# Troubleshooting

## `collect-page-signals` says Playwright is not installed

Install Playwright:

```bash
npm i -D playwright
npx playwright install chromium
```

Then run again.

## Figma file was not created

Check whether Figma MCP/API is authenticated. If not, this Skill should only output:

```text
outputs/05-figma/figma-generation-contract.json
```

This is expected fallback behavior.

## Render image does not match the plan

Do not immediately patch Figma or code. First decide whether the issue is:

1. canonical spec issue
2. render prompt issue
3. image generation issue

Patch the earliest wrong artifact.

## Frontend does not match Figma

Check:

- tokens are shared
- component names match
- props/variants are mapped
- responsive rules are implemented
- font loading differs
- browser default styles differ

## QA score is low

Run:

```bash
npm run score -- path/to/fidelity-score.json
```

Then update `outputs/07-qa/patch-plan.md`.
