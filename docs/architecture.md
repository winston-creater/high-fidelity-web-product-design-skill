# Architecture

## Core idea

The workflow keeps design, prototype, and code aligned by generating all downstream artifacts from one canonical source.

```text
project brief
  ↓
own idea draft + critique
  ↓
reference evidence
  ↓
canonical spec
  ├─ render prompts
  ├─ Figma generation contract
  └─ frontend implementation spec
```

## Main modules

| Module | Files | Role |
|---|---|---|
| Skill instructions | `SKILL.md` | Defines the execution rules for AI agents |
| Prompts | `prompts/` | Stage-specific prompts |
| Templates | `templates/` | Schemas and artifact formats |
| Scripts | `scripts/` | Local utility scripts |
| Source helpers | `src/` | Shared JS helpers |
| Examples | `examples/` | Inputs and expected artifact examples |
| Docs | `docs/` | Human documentation |

## Source of truth

The source of truth is not the image render and not the Figma file. It is this set:

```text
canonical-spec.json
design-tokens.json
component-contracts.json
interaction-models.json
```

Any render, Figma frame, or frontend code that diverges from these files should either be patched or cause the canonical spec to be updated intentionally.
