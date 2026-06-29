#!/usr/bin/env node
import { ensureDir, writeText } from '../src/fs-utils.mjs';

const dirs = [
  'outputs/00-intake',
  'outputs/01-own-idea',
  'outputs/02-reference-analysis',
  'outputs/03-canonical-spec',
  'outputs/04-render',
  'outputs/05-figma',
  'outputs/06-frontend',
  'outputs/07-qa',
  'outputs/08-handoff'
];

for (const dir of dirs) ensureDir(dir);
writeText('outputs/README.md', `# Outputs\n\nGenerated workflow artifacts will be written here.\n`);
console.log('Initialized output directories.');
