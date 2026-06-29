# Prompt: Render To Figma Native Prototype

## Goal

Create a native Figma prototype from canonical spec and approved render direction.

## Important

The render image is a visual reference only. Do not recreate Figma as a flat bitmap.

## If Figma tool is authenticated

Create:

- pages
- frames
- sections
- variables
- text styles
- color styles
- components
- variants
- auto layout
- prototype links
- layer names with canonical IDs

## If Figma tool is not authenticated

Output only:

```text
outputs/05-figma/figma-generation-contract.json
```

And clearly state that no Figma file was created.

## Required mapping

Every Figma component should map to:

```text
canonical component ID
component contract ID
token references
interaction model ID
frontend component candidate
```
