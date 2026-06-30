---
name: ai-ui-design-pipeline
description: Use this skill when building high-fidelity mobile-first UI with AI, mapping free/open-source component libraries, producing React/Tailwind prototypes, migrating them to WordPress/WooCommerce, and maintaining an AI-readable component registry.
---

# AI UI Design Pipeline Skill

## Agent operating guide

This skill is designed for AI agents. Before executing any UI, React, WordPress, QA, or component-registry task, the agent must read and follow:

```text
skills/ai-ui-design-pipeline/AGENT_GUIDE.md
```

`AGENT_GUIDE.md` is the operational manual. It contains the stage gates, exact file outputs, component-library rules, visual QA rules, WordPress migration rules, and registry maintenance rules.

## Required startup instruction

When a user asks to use this skill, or when an agent decides this skill applies, the following instruction is mandatory and must be treated as part of the skill itself:

```text
请使用 ai-ui-design-pipeline skill。

开始前必须读取：

ai-ui-design-pipeline/skills/ai-ui-design-pipeline/SKILL.md
ai-ui-design-pipeline/skills/ai-ui-design-pipeline/AGENT_GUIDE.md

然后严格按照 AGENT_GUIDE.md 执行。

不要直接写代码。
先做 Research。
再做 Component Mapping。
再确认 Design Tokens。
然后才允许进入 React/Tailwind Build。
React QA ≥ 90 后，才允许迁移 WordPress。
```

Agent behavior required by this startup instruction:

```text
1. Read SKILL.md and AGENT_GUIDE.md first.
2. Do not write implementation code immediately.
3. Start with Research.
4. Continue with Component Mapping.
5. Confirm or create Design Tokens.
6. Enter React/Tailwind Build only after the stage gates are satisfied.
7. Run Visual QA after React Build.
8. Enter WordPress migration only when React QA is 90 or above.
```

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

## Required agent workflow

The agent must not jump directly into code. The required sequence is:

```text
1. Product Brief
2. Page Map
3. Benchmark Research
4. Component Mapping
5. Design Tokens
6. React/Tailwind High-Fidelity Build
7. Visual QA
8. Component Registry Update
9. WordPress/WooCommerce Migration
10. WordPress Visual QA
11. Registry + Documentation Update
```

The agent must not skip Benchmark Research, Component Mapping, Visual QA, Component Registry Update, or WordPress Visual QA.

## Stage gates

### Gate 1: Before React Build

React/Tailwind implementation may start only when all are true:

```text
Product Brief exists.
Benchmark Research exists.
Component Map exists.
Design Tokens exist.
Every page module has a component source.
```

### Gate 2: Before WordPress Migration

WordPress migration may start only when all are true:

```text
React high-fidelity page exists.
React Visual QA score is 90 or above.
Core reusable components have been added to component-registry.
WordPress Migration Plan exists.
```

### Gate 3: Before completion

A page is complete only when all are true:

```text
React QA score is 90 or above.
WordPress QA score is 90 or above.
Core shared components are reusable.
No unapproved UI library was introduced.
No one-off CSS remains for reusable modules.
```

## Required stages

### Stage 1: Product Brief

Create or update:

```text
docs/00-product-brief.md
```

Must include product type, target user, core pages, page priority, style keywords, forbidden styles, reference products, technical route, data sources, and acceptance criteria.

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

Allowed reference sources include UI Design Daily, Pinterest, Screenlane free content, Chamjo free content, real app screenshots, and competitor mobile websites.

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
component responsibility
primary source
backup source
motion requirement
design token dependencies
WordPress migration difficulty
reuse level
registry decision
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

The agent must not randomly invent spacing, colors, font sizes, or shadows. Any new visual value must be added to tokens first.

---

### Stage 5: React/Tailwind Build

Build the page only after Stage 1-4 are complete.

Rules:

```text
one component per file
page composes components
mobile-first 390px baseline
compatible with 360px-430px
mock data only
no WordPress data yet
no one-off CSS
no unapproved UI library
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

Example:

```text
FeedProductCard.tsx → template-parts/cards/feed-product-card.php
BottomNav.tsx       → template-parts/navigation/bottom-nav.php
HomePage.tsx        → front-page.php
```

---

### Stage 9: WordPress Visual QA

Compare:

```text
React high-fidelity screenshot
WordPress implementation screenshot
```

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