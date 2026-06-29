# Package Contents

This package contains a GitHub-ready repository for the `high-fidelity-web-product-design` Skill.

## Important root files

| File | Purpose |
|---|---|
| `README.md` | Main Chinese documentation and quick start |
| `SKILL.md` | Codex/Agent Skill instructions |
| `workflow.md` | End-to-end workflow details |
| `package.json` | CLI scripts and package metadata |
| `LICENSE` | MIT license |
| `CONTRIBUTING.md` | Contribution guide |
| `.github/workflows/ci.yml` | GitHub Actions validation workflow |

## Main directories

| Directory | Purpose |
|---|---|
| `prompts/` | Stage-by-stage AI prompts |
| `templates/` | Schemas and report templates |
| `scripts/` | Local utility scripts |
| `src/` | Shared JavaScript helpers |
| `docs/` | Detailed usage, Figma, QA, and GitHub upload docs |
| `examples/` | Example project brief and canonical spec |
| `agents/` | Optional agent metadata |
| `tools/` | GitHub publishing helper script |

## Archives generated for delivery

- `high-fidelity-web-product-design-skill-github-ready.zip`: full GitHub-ready repository.
- `high-fidelity-web-product-design-skill-github-ready.tar.gz`: same repository as tarball.
- `high-fidelity-web-product-design-skill-1.0.0.tgz`: npm package output from `npm pack`.

## Validation performed

The following commands were run before packaging:

```bash
npm run validate:examples
npm run docs:check
npm run render-prompt -- examples/minimal-canonical-spec.json
npm run figma-contract -- examples/minimal-canonical-spec.json
npm run frontend-spec -- examples/minimal-canonical-spec.json
npm run qa -- examples/minimal-canonical-spec.json
```

Generated outputs were removed before packaging so the repository starts clean.
