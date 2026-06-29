# Workflow

This workflow optimizes fidelity by keeping one canonical design source and regenerating downstream artifacts from that source.

## Phase 0 — Intake normalization

Input:

- user idea
- product goal
- target users
- brand tone
- pages to design
- reference URLs and reasons
- technology stack
- tool availability

Output:

```text
outputs/00-intake/project-brief.normalized.json
```

## Phase 1 — Own idea first

The assistant drafts a page strategy before looking at reference websites.

Output:

```text
outputs/01-own-idea/own-idea-draft.md
```

This protects the project from becoming a copy of a reference website.

## Phase 2 — Critique own idea

The assistant critiques the draft:

- what to keep
- what to modify
- what to delete
- what to defer
- what needs reference validation

Output:

```text
outputs/01-own-idea/own-idea-critique.md
```

## Phase 3 — Reference capture

Preferred tools:

1. Playwright MCP
2. Chrome DevTools MCP
3. Local Playwright script

Output per site:

```text
outputs/02-reference-analysis/<site>/signals.json
outputs/02-reference-analysis/<site>/desktop-full.png
outputs/02-reference-analysis/<site>/mobile-full.png
```

Signals should include:

- headings
- landmarks
- navigation
- CTAs
- forms
- interactive elements
- style samples
- responsive behavior
- console/network issues when available

## Phase 4 — Reference analysis

Analyze each reference independently:

- positioning
- section sequence
- UI style
- component system
- interaction model
- conversion path
- what to adapt
- what to avoid

Output:

```text
outputs/02-reference-analysis/reference-profile.<site>.md
```

## Phase 5 — Cross-reference comparison

Compare reference findings against the own idea critique.

Output:

```text
outputs/02-reference-analysis/reference-comparison-matrix.md
```

The comparison must answer:

- which original ideas were validated
- which original ideas need changes
- which new patterns should be added
- which reference patterns should be rejected

## Phase 6 — Canonical spec

The canonical spec is the source of truth.

Output:

```text
outputs/03-canonical-spec/website-blueprint.md
outputs/03-canonical-spec/canonical-spec.json
outputs/03-canonical-spec/design-tokens.json
outputs/03-canonical-spec/component-contracts.json
outputs/03-canonical-spec/interaction-models.json
outputs/03-canonical-spec/responsive-rules.md
outputs/03-canonical-spec/accessibility-rules.md
outputs/03-canonical-spec/decision-log.md
```

No render, Figma, or frontend code should be treated as final unless it maps back to these files.

## Phase 7 — Image render prompts

Generate prompts for:

- desktop hero
- desktop full page
- mobile hero
- mobile full page

Output:

```text
outputs/04-render/*.prompt.md
```

Image generation is optional. If no image tool is available, prompts are still useful artifacts.

## Phase 8 — Render review

Review render results against canonical spec.

Output:

```text
outputs/04-render/render-review.md
outputs/04-render/render-delta.md
```

If render fails, patch canonical spec first or patch render prompt if the spec is correct.

## Phase 9 — Figma prototype

If Figma is authenticated:

- create native frames
- create variables
- create components
- create variants
- set auto layout
- add prototype links

If Figma is not authenticated:

- output a `figma-generation-contract.json`
- do not claim a Figma file was created

Output:

```text
outputs/05-figma/figma-generation-contract.json
outputs/05-figma/figma-component-map.json
outputs/05-figma/code-connect-map.json
```

## Phase 10 — Frontend implementation spec

Generate the implementation plan from canonical spec and component contracts.

Output:

```text
outputs/06-frontend/frontend-implementation-spec.md
outputs/06-frontend/component-registry.json
outputs/06-frontend/route-map.md
outputs/06-frontend/test-plan.md
```

## Phase 11 — QA and patch loop

Run or prepare:

- visual fidelity scoring
- Playwright interaction tests
- accessibility tests
- Lighthouse checks
- responsive checks
- code maintainability checks

Output:

```text
outputs/07-qa/fidelity-scorecard.md
outputs/07-qa/qa-checklist.md
outputs/07-qa/patch-plan.md
```

## Phase 12 — Handoff

Output final implementation handoff:

```text
outputs/08-handoff/handoff-report.md
```

The handoff report must include:

- final decisions
- artifact links
- assumptions
- unresolved items
- tool calls performed
- tool calls skipped
- next steps
