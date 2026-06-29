# Prompt: Quality Gate And Patch Loop

## Goal

Evaluate fidelity and produce a patch plan.

## Inputs

- canonical spec
- design tokens
- component contracts
- interaction models
- render outputs
- Figma outputs
- frontend outputs
- test results

## Output

```text
outputs/07-qa/fidelity-scorecard.md
outputs/07-qa/qa-checklist.md
outputs/07-qa/patch-plan.md
```

## Required scorecard

| Metric | Target | Actual | Pass | Patch |
|---|---:|---:|---|---|
| desktop_visual_fidelity | 94 | | | |
| mobile_visual_fidelity | 92 | | | |
| structure_fidelity | 95 | | | |
| design_token_fidelity | 95 | | | |
| component_contract_fidelity | 95 | | | |
| interaction_fidelity | 88 | | | |
| responsive_fidelity | 90 | | | |
| code_maintainability | 90 | | | |
| originality | 95 | | | |

## Patch loop

1. Identify mismatch.
2. Identify source: spec, render, Figma, code, or QA environment.
3. Patch the earliest wrong artifact.
4. Regenerate downstream artifacts.
5. Re-run checks.
