# Tool Integration Priorities

## Reference capture

Priority:

1. Playwright MCP
2. Chrome DevTools MCP
3. Local Playwright script
4. Manual analysis

Use browser tools to capture:

- desktop screenshot
- mobile screenshot
- headings
- landmarks
- CTAs
- forms
- interactive elements
- computed style samples
- responsive layout shifts

## Visual rendering

Priority:

1. Codex image skill / image generation tool
2. External approved image tool
3. Render prompts only

Render prompts must come from canonical spec and include originality guardrails.

## Figma

Priority:

1. Figma MCP remote/desktop with write access
2. Figma REST API integration
3. Figma generation contract only

Native Figma output should include:

- frames
- sections
- auto layout
- variables
- components
- variants
- prototype links
- notes mapping back to canonical spec IDs

## Code generation

Priority:

1. Figma MCP + Code Connect
2. Figma context + component contracts
3. Canonical spec + component contracts

If Code Connect is unavailable, still generate a `component-registry.json` so the codebase can later be mapped to Figma components.

## QA

Priority:

1. Playwright visual screenshots
2. Playwright interaction tests
3. axe-core accessibility
4. Lighthouse quality audit
5. Manual checklist
