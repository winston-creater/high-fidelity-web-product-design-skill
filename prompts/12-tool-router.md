# Prompt: Tool Router

## Goal

Choose the best available tool for the current phase and produce a fallback if the tool is unavailable.

## Input

Tool availability:

```yaml
tools:
  playwright_mcp: true|false
  chrome_devtools_mcp: true|false
  playwright_local: true|false
  image_generation: true|false
  figma_mcp: true|false
  figma_rest_api: true|false
  code_connect: true|false
  axe_core: true|false
  lighthouse: true|false
```

## Routing

| Phase | Preferred | Fallback |
|---|---|---|
| reference_capture | Playwright MCP, then Chrome DevTools MCP | local Playwright script |
| render | image generation | render prompts only |
| figma | Figma MCP, then Figma REST API | figma-generation-contract.json |
| frontend | Code Connect, then component contracts | frontend implementation spec |
| qa | Playwright + axe + Lighthouse | QA checklist |

## Output

```json
{
  "phase": "",
  "selected_route": "",
  "tools_to_call": [],
  "fallback": "",
  "requires_auth": false,
  "notes": []
}
```

Never claim a tool was called if it was not actually available.
