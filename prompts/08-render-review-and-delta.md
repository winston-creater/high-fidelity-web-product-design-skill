# Prompt: Render Review And Delta

## Goal

Review generated render images against the canonical spec.

## Score

| Dimension | Score 0-100 | Notes | Fix |
|---|---:|---|---|
| Value clarity | | | |
| Visual hierarchy | | | |
| Brand match | | | |
| Token alignment | | | |
| Component alignment | | | |
| Mobile viability | | | |
| Feasibility | | | |
| Originality | | | |

## Output

```text
outputs/04-render/render-review.md
outputs/04-render/render-delta.md
```

## Patch rule

If canonical spec is wrong, patch canonical spec.
If render prompt is wrong, patch prompt.
If image generation hallucinated, regenerate with stricter prompt.
