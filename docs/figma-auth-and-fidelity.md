# Figma Authentication and Fidelity

## Does Figma need login?

Yes, if the workflow needs to create or modify a Figma file.

| Task | Login required? |
|---|---|
| Generate a Figma-ready specification | No |
| Create native Figma frames | Yes |
| Modify an existing Figma file | Yes |
| Read private Figma files | Yes |
| Use Code Connect mappings | Yes, plus repository access |

## Skill behavior

If Figma is not authenticated:

```text
Output figma-generation-contract.json.
Do not claim that a Figma file was created.
Provide next steps for connecting Figma.
```

If Figma is authenticated:

```text
Create native frames, variables, components, variants, auto layout, and prototype links.
Attach canonical spec IDs to Figma layer names or descriptions where possible.
```

## Best practice for high fidelity

Avoid importing a render image as the whole design. It looks close, but it is not editable.

Better:

```text
render image as visual reference
+ canonical spec for structure
+ design tokens for styles
+ component contracts for components
+ interaction models for prototypes
```

## Naming convention

Use stable IDs:

```text
page.home
section.home.hero
component.hero.primary
component.button.primary
interaction.faq.toggle
```

These IDs should appear in:

- canonical spec
- Figma layer names/descriptions
- frontend component registry
- QA reports
