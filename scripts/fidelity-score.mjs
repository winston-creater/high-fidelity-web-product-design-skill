#!/usr/bin/env node
import { readJson } from '../src/fs-utils.mjs';
import { defaultThresholds } from '../src/spec-utils.mjs';

const file = process.argv[2] || 'examples/fidelity-score.example.json';
const strict = process.argv.includes('--strict');
const data = readJson(file);
const thresholds = { ...defaultThresholds(), ...(data.thresholds || {}) };
const scores = data.scores || data;

let passed = true;
const rows = [];
for (const [metric, target] of Object.entries(thresholds)) {
  const actual = Number(scores[metric] ?? 0);
  const pass = actual >= target;
  if (!pass) passed = false;
  rows.push({ metric, target, actual, pass });
}

console.log('| Metric | Target | Actual | Pass |');
console.log('|---|---:|---:|---|');
for (const row of rows) {
  console.log(`| ${row.metric} | ${row.target} | ${row.actual} | ${row.pass ? 'yes' : 'no'} |`);
}
console.log(`\nOverall: ${passed ? 'PASS' : 'FAIL'}`);

if (strict && !passed) process.exit(1);
