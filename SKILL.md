---
name: high-fidelity-web-product-design
description: High-fidelity workflow for turning a user's own website idea plus reference websites into an original canonical web design spec, image render prompts, Figma prototype contract, frontend implementation spec, and QA patch loop.
version: 1.0.0
license: MIT
---

# High Fidelity Web Product Design Skill

## Purpose

Use this skill when the user wants to design a website page by combining:

1. Their own initial website idea.
2. Several reference websites.
3. AI analysis of structure, UI, interaction, and conversion logic.
4. Image render generation.
5. Figma prototype generation.
6. Frontend code generation.
7. Fidelity QA and iterative patching.

The highest-fidelity principle is:

```text
The canonical spec is the source of truth.
Image renders, Figma prototypes, and frontend code must all be generated from the same canonical spec, design tokens, component contracts, and interaction models.
```

Do **not** treat a render image as the source of truth. A render image is only a visual checkpoint.
Do **not** treat Figma layers as the only source of truth unless they have auto layout, variables, components, variants, states, and code mappings.

## Required execution order

Always follow this order unless the user explicitly asks to skip a stage:

1. **Intake normalization**
   - Normalize the user’s project brief.
   - Extract project type, audience, conversion goal, brand tone, constraints, target pages, and reference URLs.
   - Ask at most one clarification only if the missing detail blocks the task. Otherwise make a reasonable assumption and log it.

2. **Own idea first**
   - Before analyzing references, draft the website based only on the user’s own idea.
   - Produce a simple section order, initial UI style, initial interaction assumptions, and conversion hypothesis.

3. **Own idea critique**
   - Identify what to keep, modify, delete, or defer.
   - Identify risks: unclear positioning, weak CTA, over-designed interaction, missing trust, bad mobile path, poor accessibility.
   - Generate questions that reference websites should help answer.

4. **Reference capture and analysis**
   - Use available browser tools to capture website signals.
   - Prefer Playwright MCP or Chrome DevTools MCP when available.
   - Fall back to `scripts/collect-page-signals.mjs` if external browser tools are unavailable.
   - Analyze structure, UI design, interaction logic, conversion path, design tokens, accessibility, and mobile behavior.

5. **Reference-to-own-idea comparison**
   - Compare each reference pattern against the user’s own idea.
   - Decide: keep, modify, reject, or add.
   - Record every decision in the decision log.

6. **Canonical spec build**
   - Produce the single source of truth:
     - `website-blueprint.md`
     - `canonical-spec.json`
     - `design-tokens.json`
     - `component-contracts.json`
     - `interaction-models.json`
     - `responsive-rules.md`
     - `accessibility-rules.md`
     - `decision-log.md`
   - No image, Figma, or code generation should start before this spec exists.

7. **Image render prompt generation**
   - Generate desktop hero, desktop full-page, mobile hero, and mobile full-page prompts.
   - Use the canonical spec, not the reference sites, as the primary source.
   - Include originality negative prompts.

8. **Render review**
   - Review renders against the canonical spec.
   - Score value clarity, visual hierarchy, brand match, feasibility, originality, mobile potential, and accessibility risk.
   - Produce a render delta patch before moving to Figma.

9. **Figma prototype generation**
   - If Figma MCP/API is authenticated, create native frames, variables, components, variants, auto layout, and prototype links.
   - If Figma is not authenticated, output `figma-generation-contract.json` and do not claim that a Figma file was created.
   - Figma must be editable and structured, not just an imported bitmap.

10. **Frontend implementation spec**
    - Prefer Figma MCP + Code Connect if available.
    - Otherwise use component contracts and interaction models.
    - Output route map, component registry, props, states, responsive rules, accessibility requirements, and testing plan.

11. **QA and patch loop**
    - Run or prepare Playwright visual checks, accessibility checks, Lighthouse checks, and interaction tests.
    - Use `fidelity-scorecard.md` to decide pass/fail.
    - Patch the canonical spec first, then regenerate downstream artifacts.

12. **Handoff report**
    - Summarize decisions, generated artifacts, remaining assumptions, required manual actions, and next implementation steps.

## Tool routing rules

Use tools in this priority order:

### Reference website capture

1. Playwright MCP.
2. Chrome DevTools MCP.
3. Local Playwright script: `scripts/collect-page-signals.mjs`.
4. Manual analysis from supplied screenshots/content.

### UI/design token extraction

1. Browser computed styles through Playwright/DevTools.
2. Design system extraction tools if connected.
3. Manual token inference with explicit uncertainty.

### Interaction analysis

1. Stagehand / Midscene / browser agent tools if connected.
2. Playwright scripted interactions.
3. Static interaction candidate detection.

### Image render generation

1. Codex image skill / image generation tool if available.
2. Render prompt files if image generation is unavailable.

### Figma prototype generation

1. Figma MCP remote/desktop, authenticated.
2. Figma REST/API plugin bridge, authenticated.
3. Figma generation contract only.

### Figma-to-code

1. Figma MCP + Code Connect.
2. Figma context + component contracts.
3. Canonical spec + component contracts only.

### QA

1. Playwright screenshot and interaction tests.
2. axe-core accessibility checks.
3. Lighthouse quality checks.
4. Visual diff scorecard.
5. Manual QA checklist fallback.

## Fidelity targets

Default targets:

| Dimension | Target |
|---|---:|
| Desktop visual fidelity | ≥ 94 |
| Mobile visual fidelity | ≥ 92 |
| Structure fidelity | ≥ 95 |
| Design token fidelity | ≥ 95 |
| Component contract fidelity | ≥ 95 |
| Interaction fidelity | ≥ 88 |
| Responsive fidelity | ≥ 90 |
| Code maintainability | ≥ 90 |
| Originality | ≥ 95 |
| Accessibility | no critical / serious issues |

If a target fails, do not hide it. Produce a patch plan.

## Output standards

Every major output must include:

- Purpose.
- Inputs used.
- Assumptions.
- Decisions.
- Evidence from own idea or reference analysis.
- Rejected alternatives.
- Next artifact dependencies.
- QA criteria.

## Originality guardrails

The assistant may adapt:

- Layout patterns.
- Information architecture.
- Interaction patterns.
- Conversion strategy.
- General visual principles.
- Component categories.

The assistant must not copy:

- Logos.
- Brand names.
- Proprietary copy.
- Original illustrations or icons.
- Product screenshots.
- Unique branded visual combinations.
- Protected assets.

Always transform reference patterns into original choices suitable for the user’s product.

## Figma authentication rule

If Figma is not authenticated or no Figma writing tool is available:

```text
State clearly that native Figma creation was not performed.
Output figma-generation-contract.json instead.
Provide the exact next steps for the user to authenticate/connect Figma.
```

Never claim that a Figma file was created unless a Figma tool call actually succeeded.

## Frontend code generation rule

Do not generate final frontend code before:

1. The canonical spec exists.
2. The design tokens are defined.
3. Component contracts are defined.
4. Interaction models are defined.
5. The user or workflow has accepted the render/prototype direction.

If the user asks for code early, produce a scaffold or implementation plan, and clearly mark it as preliminary.
