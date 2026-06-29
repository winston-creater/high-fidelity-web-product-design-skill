# Local Development

## Requirements

- Node.js 20+
- Optional: Playwright for webpage capture
- Optional: Figma MCP or Figma API for real Figma file creation
- Optional: image generation tool for actual render images

## Install

This package has no required runtime dependencies for validation scripts.

```bash
npm install
```

Optional Playwright capture:

```bash
npm i -D playwright
npx playwright install chromium
```

## Commands

```bash
npm run init
npm run route -- examples/tool-availability.example.yaml
npm run validate -- examples/minimal-canonical-spec.json
npm run render-prompt -- examples/minimal-canonical-spec.json
npm run figma-contract -- examples/minimal-canonical-spec.json
npm run frontend-spec -- examples/minimal-canonical-spec.json
npm run qa -- examples/minimal-canonical-spec.json
npm run score -- examples/fidelity-score.example.json
npm run validate:examples
```

## Browser capture

```bash
npm run collect -- https://example.com https://example.org
```

Output:

```text
outputs/reference-capture/<site>/desktop-full.png
outputs/reference-capture/<site>/mobile-full.png
outputs/reference-capture/<site>/signals.json
```

## Development note

Scripts are intentionally dependency-light so the repository can be used as a Skill package even before installing browser tooling.
