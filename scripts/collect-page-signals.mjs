#!/usr/bin/env node
import path from 'node:path';
import { ensureDir, writeJson, slugify } from '../src/fs-utils.mjs';

const urls = process.argv.slice(2).filter((arg) => !arg.startsWith('--'));
const outRootIndex = process.argv.indexOf('--out');
const outRoot = outRootIndex >= 0 ? process.argv[outRootIndex + 1] : 'outputs/reference-capture';

if (!urls.length) {
  console.error('Usage: npm run collect -- https://example.com https://example.org');
  process.exit(1);
}

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  console.error('Playwright is not installed. Run: npm i -D playwright && npx playwright install chromium');
  process.exit(1);
}

function topCounts(values, limit = 12) {
  const counts = new Map();
  for (const value of values.filter(Boolean)) counts.set(value, (counts.get(value) || 0) + 1);
  return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).slice(0, limit).map(([value, count]) => ({ value, count }));
}

async function capture(url) {
  const siteDir = path.join(outRoot, slugify(url));
  ensureDir(siteDir);
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1100 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  const consoleMessages = [];
  const failedRequests = [];
  page.on('console', (msg) => consoleMessages.push({ type: msg.type(), text: msg.text().slice(0, 500) }));
  page.on('requestfailed', (req) => failedRequests.push({ url: req.url(), failure: req.failure()?.errorText || 'unknown' }));

  await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
  await page.screenshot({ path: path.join(siteDir, 'desktop-full.png'), fullPage: true });

  const desktopSignals = await page.evaluate(() => {
    const text = (el) => (el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 240);
    const selector = (el) => {
      if (el.id) return `#${el.id}`;
      const cls = [...el.classList].slice(0, 3).join('.');
      return `${el.tagName.toLowerCase()}${cls ? `.${cls}` : ''}`;
    };
    const visible = (el) => {
      const rect = el.getBoundingClientRect();
      const style = getComputedStyle(el);
      return rect.width > 0 && rect.height > 0 && style.visibility !== 'hidden' && style.display !== 'none';
    };
    const els = [...document.querySelectorAll('body *')].filter(visible).slice(0, 2500);
    const styles = els.map((el) => {
      const s = getComputedStyle(el);
      return {
        color: s.color,
        backgroundColor: s.backgroundColor,
        fontFamily: s.fontFamily,
        fontSize: s.fontSize,
        fontWeight: s.fontWeight,
        borderRadius: s.borderRadius,
        boxShadow: s.boxShadow,
        display: s.display
      };
    });
    return {
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
      headings: [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].filter(visible).map((el) => ({ tag: el.tagName.toLowerCase(), text: text(el), selector: selector(el) })),
      landmarks: [...document.querySelectorAll('header,nav,main,section,article,aside,footer,[role]')].filter(visible).slice(0, 120).map((el) => ({ tag: el.tagName.toLowerCase(), role: el.getAttribute('role') || '', text: text(el).slice(0, 160), selector: selector(el) })),
      interactive: [...document.querySelectorAll('a,button,input,select,textarea,[role="button"],[tabindex]')].filter(visible).slice(0, 250).map((el) => ({ tag: el.tagName.toLowerCase(), role: el.getAttribute('role') || '', type: el.getAttribute('type') || '', text: text(el), href: el.getAttribute('href') || '', ariaLabel: el.getAttribute('aria-label') || '', selector: selector(el) })),
      styleSamples: styles
    };
  });

  await page.setViewportSize({ width: 390, height: 900 });
  await page.screenshot({ path: path.join(siteDir, 'mobile-full.png'), fullPage: true });
  const mobileSignals = await page.evaluate(() => ({
    viewport: { width: window.innerWidth, height: window.innerHeight },
    bodyWidth: document.body.scrollWidth,
    bodyHeight: document.body.scrollHeight,
    visibleButtons: [...document.querySelectorAll('button,a')].filter((el) => {
      const rect = el.getBoundingClientRect();
      const style = getComputedStyle(el);
      return rect.width > 0 && rect.height > 0 && style.visibility !== 'hidden' && style.display !== 'none';
    }).slice(0, 80).map((el) => (el.innerText || el.textContent || el.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim().slice(0, 120))
  }));

  const tokens = {
    colors: topCounts(desktopSignals.styleSamples.map((s) => s.color)),
    backgrounds: topCounts(desktopSignals.styleSamples.map((s) => s.backgroundColor).filter((v) => v && v !== 'rgba(0, 0, 0, 0)')),
    fonts: topCounts(desktopSignals.styleSamples.map((s) => s.fontFamily)),
    fontSizes: topCounts(desktopSignals.styleSamples.map((s) => s.fontSize)),
    radii: topCounts(desktopSignals.styleSamples.map((s) => s.borderRadius).filter((v) => v && v !== '0px')),
    shadows: topCounts(desktopSignals.styleSamples.map((s) => s.boxShadow).filter((v) => v && v !== 'none'))
  };

  const signals = {
    url,
    captured_at: new Date().toISOString(),
    desktop: {
      title: desktopSignals.title,
      description: desktopSignals.description,
      headings: desktopSignals.headings,
      landmarks: desktopSignals.landmarks,
      interactive: desktopSignals.interactive
    },
    mobile: mobileSignals,
    styleTokens: tokens,
    diagnostics: {
      consoleMessages: consoleMessages.slice(0, 100),
      failedRequests: failedRequests.slice(0, 100)
    }
  };

  writeJson(path.join(siteDir, 'signals.json'), signals);
  await browser.close();
  console.log(`Captured ${url} -> ${siteDir}`);
}

for (const url of urls) {
  try {
    await capture(url);
  } catch (error) {
    console.error(`Failed to capture ${url}: ${error.message}`);
  }
}
