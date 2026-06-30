---
name: ai-ui-design-pipeline
description: Use this skill when building high-fidelity mobile-first UI with AI, mapping free component libraries, producing React/Tailwind prototypes, migrating them to WordPress/WooCommerce, and maintaining an AI-readable component registry.
---

# AI UI Design Pipeline Skill

## When to use this skill

Use this skill when the user wants to:

- Design a refined mobile-first UI with AI.
- Build a social commerce or ecommerce interface.
- Reference free/open-source UI component libraries instead of designing from scratch.
- Create a React/Tailwind high-fidelity prototype.
- Migrate the approved UI into WordPress/WooCommerce.
- Maintain a reusable component registry for future AI agents.
- Perform screenshot-based visual QA.

## Core principle

Do not let AI invent UI freely.

The correct pipeline is:

```text
Research real products
↓
Map components from approved libraries
↓
Lock design tokens
↓
Build React/Tailwind high-fidelity UI
↓
Screenshot QA
↓
Save reusable components to registry
↓
Migrate to WordPress template-parts
↓
Screenshot QA again
```

## Approved component libraries

### React high-fidelity layer

```text
shadcn/ui      → base components
Origin UI      → business/product UI blocks
Magic UI       → motion and visual enhancement only
```

### WordPress migration helper layer

```text
HyperUI        → HTML/Tailwind ecommerce and form blocks
Flowbite       → JavaScript interaction patterns
Preline UI     → HTML/Tailwind blocks and templates
daisyUI        → quick semantic utility components
Meraki UI      → RTL / multilingual / Middle East references
```

## Required stages

### Stage 1: Product Brief

Create or update:

```text
docs/00-product-brief.md
```

Must include product type, target user, core pages, style keywords, forbidden styles, technical route, data sources, and acceptance criteria.

Do not write UI code in this stage.

---

### Stage 2: Benchmark Research

Create or update:

```text
docs/02-benchmark-board.md
```

For every page, collect at least:

```text
3 references
5 useful patterns
3 non-copy rules
1 component mapping suggestion
```

Do not copy brand assets.

---

### Stage 3: Component Mapping

Create or update:

```text
docs/03-component-map.md
```

Every module must have:

```text
component name
primary source
backup source
motion requirement
WordPress migration difficulty
reuse level
design token dependencies
```

No component source means no build.

---

### Stage 4: Design Tokens

Create or update:

```text
design-tokens/*.json
docs/04-design-tokens.md
```

Tokens must control layout, spacing, radius, typography, color, shadow, and motion.

The agent must not randomly invent spacing, colors, font sizes, or shadows.

---

### Stage 5: React/Tailwind Build

Build the page only after Stage 1-4 are approved.

Rules:

```text
one component per file
page composes components
mobile-first 390px baseline
compatible with 360px-430px
mock data only
no WordPress data yet
no one-off CSS
```

---

### Stage 6: Visual QA

Capture implementation screenshots and compare against target screenshots.

Score:

```text
layout accuracy: 30
component consistency: 20
typography hierarchy: 15
mobile realism: 15
visual polish: 10
WordPress readiness: 10
```

Minimum passing score: 90/100.

If below 90, list exact numeric changes and fix before continuing.

---

### Stage 7: Component Registry Update

Every reusable component must be saved under:

```text
component-registry/{component-name}/
```

Required files:

```text
README.md
source.md
tokens.md
component.tsx
component.php
component.css
registry-item.json
screenshot.png
changelog.md
```

---

### Stage 8: WordPress Migration

Migrate React components to WordPress template-parts.

Rules:

```text
do not redesign
do not rewrite confirmed CSS
preserve HTML/class structure
replace mock data with WordPress/WooCommerce/ACF data
escape all dynamic output
one React component maps to one PHP template-part when possible
```

---

### Stage 9: WordPress Visual QA

Compare React high-fidelity screenshot and WordPress implementation screenshot.

Goal:

```text
visual consistency ≥ 90%
core shared components ≥ 95%
```

## Forbidden actions

```text
Do not freely design from scratch.
Do not skip research.
Do not skip component mapping.
Do not write WordPress first.
Do not rewrite approved CSS during migration.
Do not introduce unapproved UI libraries.
Do not use paid component source code.
Do not copy real product brand assets.
Do not use vague change descriptions.
Do not proceed with a page scoring below 90.
```

## Output contract

For every page, output:

```text
1. Research summary
2. Component mapping table
3. Token usage table
4. React component structure
5. QA checklist and score
6. Registry updates
7. WordPress migration file map
8. Final QA result
```

## Example user command

```text
Use the ai-ui-design-pipeline skill.
Build a mobile social commerce Home page inspired by Xiaohongshu + Temu + SHEIN.
Start with research and component mapping only. Do not write code yet.
```