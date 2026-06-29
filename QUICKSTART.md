# Quickstart

## 1. Unzip

```bash
unzip high-fidelity-web-product-design-skill-github-ready.zip
cd high-fidelity-web-product-design-skill-github-ready
```

## 2. Validate

```bash
npm run validate:examples
npm run docs:check
```

## 3. Initialize workflow outputs

```bash
npm run init
```

## 4. Route available tools

```bash
npm run route -- examples/tool-availability.example.yaml
```

## 5. Use with Codex / Agent

Ask your agent:

```text
Use the high-fidelity-web-product-design skill.

请按照最高还原度流程，根据我的网页想法和参考网站，生成 canonical spec、render prompts、Figma prototype contract、frontend implementation spec 和 QA scorecard。

项目 brief 如下：
<粘贴 examples/input.high-fidelity.example.yaml 格式内容>
```

## 6. Upload to GitHub

Using GitHub CLI:

```bash
./tools/publish-to-github.sh YOUR_USERNAME/high-fidelity-web-product-design-skill public
```

Or follow `docs/github-upload-guide.md`.
