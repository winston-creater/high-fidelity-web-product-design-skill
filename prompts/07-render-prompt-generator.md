# Prompt: Render Prompt Generator

## Goal

Generate image render prompts from canonical spec.

## Required prompts

- desktop hero
- desktop full page
- mobile hero
- mobile full page

## Prompt contents

Each prompt must include:

- page purpose
- target user
- viewport
- section order
- hero structure
- UI style
- color tokens
- typography direction
- component descriptions
- spacing and density
- interaction hints visible in static render
- originality negative prompt

## Output

```text
outputs/04-render/desktop-hero.prompt.md
outputs/04-render/desktop-full.prompt.md
outputs/04-render/mobile-hero.prompt.md
outputs/04-render/mobile-full.prompt.md
```

## Negative prompt

Always include:

```text
Do not copy logos, brand names, proprietary copy, reference website screenshots, protected illustrations, exact layouts, or recognizable branded visual systems from the reference websites.
```
