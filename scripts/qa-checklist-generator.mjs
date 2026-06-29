#!/usr/bin/env node
import { readJson, writeText } from '../src/fs-utils.mjs';

const file = process.argv[2] || 'examples/minimal-canonical-spec.json';
const out = process.argv.includes('--out') ? process.argv[process.argv.indexOf('--out') + 1] : 'outputs/07-qa/qa-checklist.md';
const spec = readJson(file);

const sectionChecks = (spec.pages || []).flatMap((page) => (page.sections || []).map((section) => `- [ ] ${section.id}: ${section.name} purpose is visible and implemented.`)).join('\n');

const md = `# QA Checklist\n\n` +
`## Structure\n\n${sectionChecks}\n\n` +
`## Visual fidelity\n\n- [ ] Desktop screenshot matches approved render direction.\n- [ ] Mobile screenshot matches approved render direction.\n- [ ] Typography, spacing, radius, shadow, and color tokens match design tokens.\n\n` +
`## Interaction\n\n- [ ] Navigation works.\n- [ ] Mobile menu works.\n- [ ] Primary CTA works.\n- [ ] Forms validate correctly.\n- [ ] FAQ/tabs/dialogs work if present.\n\n` +
`## Accessibility\n\n- [ ] Keyboard navigation works.\n- [ ] Focus states are visible.\n- [ ] Inputs have labels.\n- [ ] Dialogs trap focus.\n- [ ] Headings are hierarchical.\n- [ ] Landmarks are meaningful.\n\n` +
`## Originality\n\n- [ ] No copied logos.\n- [ ] No copied reference screenshots.\n- [ ] No copied proprietary copy.\n- [ ] Visual system is transformed and original.\n`;

writeText(out, md);
console.log(`Wrote QA checklist to ${out}`);
