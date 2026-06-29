#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const command = process.argv[2];
const rest = process.argv.slice(3);

const map = {
  init: 'scripts/init-workspace.mjs',
  route: 'scripts/route-tools.mjs',
  collect: 'scripts/collect-page-signals.mjs',
  validate: 'scripts/validate-spec.mjs',
  score: 'scripts/fidelity-score.mjs',
  'render-prompt': 'scripts/build-render-prompt.mjs',
  'figma-contract': 'scripts/generate-figma-contract.mjs',
  'frontend-spec': 'scripts/generate-frontend-spec.mjs',
  qa: 'scripts/qa-checklist-generator.mjs'
};

if (!command || !map[command]) {
  console.log(`Usage: hf-web-design-skill <command> [args]\n\nCommands:\n${Object.keys(map).map((c) => `  - ${c}`).join('\n')}`);
  process.exit(command ? 1 : 0);
}

const result = spawnSync(process.execPath, [path.join(root, map[command]), ...rest], { stdio: 'inherit' });
process.exit(result.status || 0);
