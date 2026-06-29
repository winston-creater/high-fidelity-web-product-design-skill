#!/usr/bin/env bash
set -euo pipefail

REPO_FULL_NAME="${1:-}"
VISIBILITY="${2:-public}"

if [[ -z "$REPO_FULL_NAME" ]]; then
  echo "Usage: ./tools/publish-to-github.sh YOUR_USERNAME/high-fidelity-web-product-design-skill [public|private]"
  exit 1
fi

if ! command -v git >/dev/null 2>&1; then
  echo "git is required."
  exit 1
fi

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI (gh) is required for automatic repository creation."
  echo "Alternative: create an empty repo manually, then run the commands in docs/github-upload-guide.md."
  exit 1
fi

if [[ ! -d .git ]]; then
  git init
fi

git add .
if git diff --cached --quiet; then
  echo "No staged changes to commit."
else
  git commit -m "Initial commit: high fidelity web product design skill"
fi

git branch -M main

VIS_FLAG="--public"
if [[ "$VISIBILITY" == "private" ]]; then
  VIS_FLAG="--private"
fi

if git remote get-url origin >/dev/null 2>&1; then
  echo "Remote origin already exists: $(git remote get-url origin)"
  git push -u origin main
else
  gh repo create "$REPO_FULL_NAME" "$VIS_FLAG" --source=. --remote=origin --push
fi
