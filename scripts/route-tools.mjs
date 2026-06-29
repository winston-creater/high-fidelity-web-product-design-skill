#!/usr/bin/env node
import { readConfig } from '../src/simple-yaml.mjs';
import { writeJson } from '../src/fs-utils.mjs';
import { planRoute } from '../src/tool-router.mjs';

const args = process.argv.slice(2);
const inputPath = args.find((arg) => !arg.startsWith('--')) || 'examples/tool-availability.example.yaml';
const phaseIndex = args.indexOf('--phase');
const phase = phaseIndex >= 0 ? args[phaseIndex + 1] : undefined;
const outIndex = args.indexOf('--out');
const out = outIndex >= 0 ? args[outIndex + 1] : null;

const config = readConfig(inputPath);
const selectedPhase = phase || config.phase || 'all';
const plan = planRoute(config, selectedPhase);

if (out) {
  writeJson(out, plan);
  console.log(`Wrote route plan to ${out}`);
} else {
  console.log(JSON.stringify(plan, null, 2));
}
