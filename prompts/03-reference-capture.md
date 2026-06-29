# Prompt: Reference Capture

## Goal

Capture reliable signals from each reference website.

## Tool preference

1. Playwright MCP
2. Chrome DevTools MCP
3. `scripts/collect-page-signals.mjs`
4. Manual analysis from user-provided screenshots/content

## Capture

For each reference URL, capture:

- desktop full-page screenshot
- mobile full-page screenshot
- title and meta description
- headings
- landmarks
- navigation
- CTAs
- forms
- buttons and links
- interaction candidates
- style tokens
- layout density
- visible responsive differences

## Output

```text
outputs/02-reference-analysis/<site>/signals.json
outputs/02-reference-analysis/<site>/desktop-full.png
outputs/02-reference-analysis/<site>/mobile-full.png
```

If capture fails, record:

- URL
- error
- attempted tool
- fallback used
- what evidence is missing
