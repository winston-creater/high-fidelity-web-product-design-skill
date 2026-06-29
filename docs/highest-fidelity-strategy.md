# Highest Fidelity Strategy

## Principle

Highest fidelity is achieved by reducing guessing between stages.

Low-fidelity chain:

```text
image → guessed Figma layers → guessed code
```

High-fidelity chain:

```text
canonical spec + tokens + components + interactions
  ├─ image render
  ├─ Figma native prototype
  └─ frontend code
```

## Why render images are not enough

A render image can show visual direction, but it does not contain:

- semantic structure
- component names
- props
- variants
- responsive rules
- auto layout constraints
- keyboard states
- design token references
- real frontend component mapping

Therefore, image renders should be reviewed as visual checkpoints only.

## Why Figma alone is not enough

A Figma file may be visually accurate but still fail implementation if it lacks:

- variables
- components
- variants
- auto layout
- code component mapping
- interaction state definitions

## Recommended thresholds

| Stage | Good target |
|---|---:|
| Render vs canonical visual intent | 90+ |
| Figma vs canonical structure | 95+ |
| Figma vs canonical tokens | 95+ |
| Frontend vs canonical tokens | 95+ |
| Frontend vs approved visual render | 94+ desktop / 92+ mobile |
| Interaction behavior | 88+ |

## Patch order

When a mismatch appears, patch in this order:

1. If the canonical spec is wrong, patch the spec first.
2. If the spec is right but the render is wrong, patch the render prompt.
3. If render and spec are right but Figma is wrong, patch the Figma generation contract.
4. If Figma/spec are right but code is wrong, patch the component implementation.
5. Re-run QA.
