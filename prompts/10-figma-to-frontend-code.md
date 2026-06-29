# Prompt: Figma To Frontend Code

## Goal

Generate frontend implementation spec from Figma context and canonical spec.

## Priority

1. Use Figma MCP + Code Connect if available.
2. Use Figma context + component contracts if Code Connect is unavailable.
3. Use canonical spec + component contracts if Figma is unavailable.

## Output

```text
outputs/06-frontend/frontend-implementation-spec.md
outputs/06-frontend/component-registry.json
outputs/06-frontend/route-map.md
outputs/06-frontend/test-plan.md
```

## Include

- tech stack
- route structure
- component tree
- props and types
- variants and states
- tokens mapping
- responsive behavior
- accessibility behavior
- animation/interaction implementation
- data/content model
- test plan

## Rule

Do not generate brittle, absolute-positioned code unless the user explicitly asks for a one-off prototype. Prefer semantic HTML, reusable components, responsive CSS, and tokenized styles.
