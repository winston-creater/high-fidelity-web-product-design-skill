# Automatic Plugin Calling

The Skill uses a tool router instead of hardcoding one tool chain.

## Router inputs

`examples/tool-availability.example.yaml`:

```yaml
phase: all
tools:
  playwright_mcp: false
  chrome_devtools_mcp: false
  playwright_local: true
  image_generation: false
  figma_mcp: false
  figma_rest_api: false
  code_connect: false
  axe_core: false
  lighthouse: false
```

Run:

```bash
npm run route -- examples/tool-availability.example.yaml
```

## Router decisions

| Phase | Preferred route | Fallback |
|---|---|---|
| intake | no external tool | no external tool |
| reference_capture | Playwright MCP / DevTools MCP | local Playwright script |
| render | image generation | render prompt only |
| figma | Figma MCP | figma-generation-contract.json |
| code | Figma MCP + Code Connect | frontend implementation spec |
| qa | Playwright + axe + Lighthouse | checklist |

## Agent instruction

When an AI agent has access to tools, it should:

1. Check tool availability.
2. Route the phase using `prompts/12-tool-router.md`.
3. Call the best available tool.
4. If the tool is unavailable or fails, produce the fallback artifact.
5. Record the route and failure in the handoff report.

## Do not fake tool results

If a plugin cannot be called, the Skill must not pretend it was called. It should output a contract or prompt that the user can use later.
