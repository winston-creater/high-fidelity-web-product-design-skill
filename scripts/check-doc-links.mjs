#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const markdownFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['.git', 'node_modules', 'outputs'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.md')) markdownFiles.push(full);
  }
}
walk(root);

let broken = 0;
const linkPattern = /\[[^\]]+\]\(([^)]+)\)/g;
for (const file of markdownFiles) {
  const text = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = linkPattern.exec(text))) {
    const link = match[1];
    if (/^(https?:|mailto:|#)/.test(link)) continue;
    const target = path.resolve(path.dirname(file), link.split('#')[0]);
    if (link && !fs.existsSync(target)) {
      console.error(`Broken link in ${path.relative(root, file)}: ${link}`);
      broken++;
    }
  }
}

if (broken) process.exit(1);
console.log(`Checked ${markdownFiles.length} markdown files; no broken local links found.`);
