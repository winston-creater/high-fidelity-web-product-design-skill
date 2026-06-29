# Release Checklist

Before publishing a new release:

- [ ] `npm run validate:examples` passes.
- [ ] `npm run docs:check` passes.
- [ ] README is up to date.
- [ ] SKILL.md reflects the latest workflow.
- [ ] No `.env` or secrets are included.
- [ ] No reference site assets are included.
- [ ] Changelog updated.
- [ ] Zip/tar.gz package generated.

Suggested release command:

```bash
git tag v1.0.0
git push origin v1.0.0
```
