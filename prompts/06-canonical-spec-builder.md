# Prompt: Canonical Spec Builder

## Goal

Build the single source of truth for all downstream artifacts.

## Required outputs

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

## Required JSON IDs

Use stable IDs:

```text
page.home
section.home.hero
component.hero.primary
component.button.primary
interaction.mobileMenu.toggle
```

## canonical-spec.json shape

```json
{
  "project": {},
  "pages": [
    {
      "id": "page.home",
      "name": "Home",
      "goal": "",
      "sections": [
        {
          "id": "section.home.hero",
          "name": "Hero",
          "purpose": "",
          "components": [],
          "content": {},
          "interactions": [],
          "responsive_behavior": {},
          "a11y_requirements": []
        }
      ]
    }
  ],
  "tokens_ref": "design-tokens.json",
  "components_ref": "component-contracts.json",
  "interactions_ref": "interaction-models.json"
}
```

## Rules

- Do not copy reference assets.
- Every section must have a purpose.
- Every component must have a contract.
- Every interaction must have states.
- Every responsive rule must be explicit.
- Every major decision should cite own idea or reference evidence in `decision-log.md`.
