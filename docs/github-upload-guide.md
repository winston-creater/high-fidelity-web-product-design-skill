# GitHub Upload Guide

This repository is ready to upload to GitHub.

## Option A — GitHub CLI

Install and authenticate GitHub CLI first:

```bash
gh auth login
```

Then run:

```bash
cd high-fidelity-web-product-design-skill-github-ready

git init
git add .
git commit -m "Initial commit: high fidelity web product design skill"

gh repo create YOUR_USERNAME/high-fidelity-web-product-design-skill \
  --public \
  --source=. \
  --remote=origin \
  --push
```

For a private repository:

```bash
gh repo create YOUR_USERNAME/high-fidelity-web-product-design-skill \
  --private \
  --source=. \
  --remote=origin \
  --push
```

## Option B — Existing empty repository

```bash
cd high-fidelity-web-product-design-skill-github-ready

git init
git add .
git commit -m "Initial commit: high fidelity web product design skill"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/high-fidelity-web-product-design-skill.git
git push -u origin main
```

## Option C — GitHub web UI

1. Create a new repository on GitHub.
2. Unzip the package.
3. Upload all files.
4. Confirm these files are at the repository root:
   - `README.md`
   - `SKILL.md`
   - `package.json`
   - `workflow.md`
   - `prompts/`
   - `templates/`
   - `scripts/`
   - `docs/`

## Recommended repository settings

- Default branch: `main`
- License: MIT
- Topics:
  - `codex-skill`
  - `web-design`
  - `figma`
  - `playwright`
  - `design-tokens`
  - `frontend-codegen`

## After upload

Run locally:

```bash
npm run validate:examples
```

Then check GitHub Actions CI after pushing.
