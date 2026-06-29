#!/usr/bin/env node
import { readJson, writeJson } from '../src/fs-utils.mjs';

const file = process.argv[2] || 'examples/minimal-canonical-spec.json';
const out = process.argv.includes('--out') ? process.argv[process.argv.indexOf('--out') + 1] : 'outputs/05-figma/figma-generation-contract.json';
const spec = readJson(file);

const contract = {
  figma_file: {
    name: `${spec.project?.name || 'Website'} Prototype`,
    source_of_truth: 'canonical-spec.json',
    note: 'Create native editable Figma frames; do not use a single bitmap as the prototype.'
  },
  pages: (spec.pages || []).map((page) => ({
    id: page.id,
    name: page.name,
    frames: [
      {
        id: `${page.id}.desktop`,
        name: `${page.name} / Desktop`,
        width: 1440,
        sections: (page.sections || []).map((s) => ({ id: s.id, name: s.name, purpose: s.purpose, components: s.components || [] }))
      },
      {
        id: `${page.id}.mobile`,
        name: `${page.name} / Mobile`,
        width: 390,
        sections: (page.sections || []).map((s) => ({ id: s.id, name: s.name, purpose: s.purpose, components: s.components || [] }))
      }
    ]
  })),
  variables: {
    source: spec.tokens_ref || 'design-tokens.json',
    create_collections: ['color', 'typography', 'spacing', 'radius', 'shadow', 'breakpoints']
  },
  components: Array.from(new Set((spec.pages || []).flatMap((p) => (p.sections || []).flatMap((s) => s.components || [])))).map((id) => ({
    id,
    figma_name: id.split('.').map((part) => part[0]?.toUpperCase() + part.slice(1)).join(' / '),
    create_as_component: true,
    variants_required: true
  })),
  prototype_links: [
    { from: 'component.button.primary', to: 'primary_conversion', behavior: 'navigate_or_open_form' },
    { from: 'interaction.mobileMenu.toggle', to: 'mobile_menu', behavior: 'open_close_overlay' }
  ],
  notes: [
    'Figma creation requires authenticated Figma MCP/API access.',
    'If Figma is not authenticated, this contract is the handoff artifact.'
  ]
};

writeJson(out, contract);
console.log(`Wrote Figma generation contract to ${out}`);
