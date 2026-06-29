#!/usr/bin/env node
import path from 'node:path';
import { readJson, writeText } from '../src/fs-utils.mjs';
import { summarizeSections } from '../src/spec-utils.mjs';

const file = process.argv[2] || 'examples/minimal-canonical-spec.json';
const outDir = process.argv.includes('--out') ? process.argv[process.argv.indexOf('--out') + 1] : 'outputs/render-prompts';
const spec = readJson(file);
const project = spec.project || {};
const sections = summarizeSections(spec);

function sectionSummary(scope) {
  const visible = scope.includes('hero') ? sections.slice(0, 2) : sections;
  return visible.map((s) => `${s.order}. ${s.name} (${s.id}) — ${s.purpose}; components: ${(s.components || []).join(', ')}`).join('\n');
}

function prompt(viewport, scope) {
  return `# Render Prompt: ${viewport} / ${scope}\n\n` +
`Create a high-fidelity original website render.\n\n` +
`Project: ${project.name || 'Unnamed project'}\n` +
`Type: ${project.type || 'website'}\n` +
`Target users: ${(project.target_users || []).join(', ') || 'target customers'}\n` +
`Primary conversion: ${project.primary_conversion || 'primary CTA'}\n` +
`Brand tone: ${(project.brand_tone || []).join(', ') || 'modern, clear, trustworthy'}\n` +
`Viewport: ${viewport}\n` +
`Scope: ${scope}\n\n` +
`## Canonical page structure\n\n${sectionSummary(scope)}\n\n` +
`## Visual direction\n\nUse a polished, production-ready SaaS/product website style. Respect the canonical structure, clear hierarchy, strong CTA, clean spacing, and responsive layout.\n\n` +
`## Fidelity requirements\n\nThe render must preserve section order, component hierarchy, CTA priority, spacing intent, and mobile/desktop viewport intent.\n\n` +
`## Negative prompt\n\nDo not copy logos, brand names, proprietary copy, reference website screenshots, protected illustrations, exact layouts, or recognizable branded visual systems from the reference websites. Use original placeholder product visuals and original copy.\n`;
}

const tasks = [
  ['desktop-hero.prompt.md', 'desktop 1440px wide', 'hero / above the fold'],
  ['desktop-full.prompt.md', 'desktop 1440px wide', 'full page'],
  ['mobile-hero.prompt.md', 'mobile 390px wide', 'hero / above the fold'],
  ['mobile-full.prompt.md', 'mobile 390px wide', 'full page']
];

for (const [name, viewport, scope] of tasks) {
  writeText(path.join(outDir, name), prompt(viewport, scope));
}

console.log(`Wrote render prompts to ${outDir}`);
