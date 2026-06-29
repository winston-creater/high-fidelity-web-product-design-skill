# QA Metrics

## Default thresholds

| Metric | Target |
|---|---:|
| desktop_visual_fidelity | 94 |
| mobile_visual_fidelity | 92 |
| structure_fidelity | 95 |
| design_token_fidelity | 95 |
| component_contract_fidelity | 95 |
| interaction_fidelity | 88 |
| responsive_fidelity | 90 |
| code_maintainability | 90 |
| originality | 95 |

## Accessibility gate

No known critical or serious accessibility issues should remain.

Minimum checks:

- every interactive element is keyboard reachable
- visible focus states exist
- color contrast is acceptable
- form fields have labels
- dialogs trap focus
- accordions/tabs expose state
- headings are hierarchical
- landmarks are meaningful

## Visual QA

Compare:

1. approved render vs Figma export
2. approved render vs frontend screenshot
3. Figma export vs frontend screenshot
4. desktop vs responsive rules
5. mobile vs responsive rules

## Interaction QA

At minimum test:

- header navigation
- mobile menu
- CTA click behavior
- form validation
- FAQ accordion
- modal open/close if present
- tabs if present
- keyboard focus order

## Patch loop

If QA fails:

```text
QA finding
  ↓
root cause
  ↓
canonical spec patch or downstream artifact patch
  ↓
regenerate affected artifacts
  ↓
rerun QA
```
