# Prompt: Intake Normalizer

## Goal

Normalize the user's raw request into a structured project brief.

## Input

User may provide:

- product description
- own website idea
- target audience
- conversion goal
- reference URLs
- favorite parts of each reference
- technology stack
- design constraints
- tool availability

## Instructions

1. Extract all available information.
2. If key information is missing, make a reasonable assumption and mark it.
3. Ask at most one clarification only if progress is blocked.
4. Convert vague wishes into testable design hypotheses.
5. Keep references as evidence sources, not copy targets.

## Output

Create `outputs/00-intake/project-brief.normalized.json` with:

```json
{
  "project": {
    "name": "",
    "type": "",
    "target_users": [],
    "primary_conversion": "",
    "secondary_conversions": [],
    "brand_tone": [],
    "pages": [],
    "tech_stack": "",
    "constraints": []
  },
  "own_ideas": [],
  "references": [
    {
      "url": "",
      "reason": "",
      "borrow_scope": "",
      "must_not_copy": []
    }
  ],
  "assumptions": [],
  "open_questions": []
}
```
