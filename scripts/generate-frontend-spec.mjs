#!/usr/bin/env node
import { readJson, writeText } from '../src/fs-utils.mjs';

const file = process.argv[2] || 'examples/minimal-canonical-spec.json';
const out = process.argv.includes('--out') ? process.argv[process.argv.indexOf('--out') + 1] : 'outputs/06-frontend/frontend-implementation-spec.md';
const spec = readJson(file);

const components = Array.from(new Set((spec.pages || []).flatMap((p) => (p.sections || []).flatMap((s) => s.components || []))));
const routes = (spec.pages || []).map((p) => `- \`${p.id}\` → /${p.name.toLowerCase() === 'home' ? '' : p.name.toLowerCase().replace(/\s+/g, '-')}`).join('\n');
const tree = (spec.pages || []).map((p) => `## ${p.name}\n\n` + (p.sections || []).map((s) => `- ${s.name} (${s.id})\n  - components: ${(s.components || []).join(', ') || 'none'}`).join('\n')).join('\n\n');

const md = `# Frontend Implementation Spec\n\n` +
`## Project\n\n${spec.project?.name || 'Unnamed project'} — ${spec.project?.type || 'website'}\n\n` +
`Primary conversion: ${spec.project?.primary_conversion || 'primary CTA'}\n\n` +
`## Source of truth\n\n- ${spec.tokens_ref || 'design-tokens.json'}\n- ${spec.components_ref || 'component-contracts.json'}\n- ${spec.interactions_ref || 'interaction-models.json'}\n\n` +
`## Routes\n\n${routes}\n\n` +
`## Component tree\n\n${tree}\n\n` +
`## Component registry candidates\n\n${components.map((c) => `- ${c}`).join('\n')}\n\n` +
`## Implementation rules\n\n- Use semantic HTML.\n- Use design tokens instead of hardcoded values.\n- Implement responsive rules from canonical spec.\n- Implement keyboard and focus states for every interactive element.\n- Do not use copied reference assets.\n\n` +
`## Test plan\n\n- Visual screenshot tests for desktop and mobile.\n- Interaction tests for navigation, CTA, FAQ, forms, and dialogs.\n- Accessibility tests for labels, focus, contrast, landmarks, and headings.\n`;

writeText(out, md);
console.log(`Wrote frontend implementation spec to ${out}`);
