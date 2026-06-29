#!/usr/bin/env node
import { readJson } from '../src/fs-utils.mjs';
import { validateCanonicalSpec } from '../src/spec-utils.mjs';

const file = process.argv[2] || 'examples/minimal-canonical-spec.json';
const spec = readJson(file);
const errors = validateCanonicalSpec(spec);

if (errors.length) {
  console.error(`Canonical spec validation failed for ${file}:`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Canonical spec is valid: ${file}`);
