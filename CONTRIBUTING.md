# Contributing

欢迎贡献。这个仓库的目标是把「参考网站分析 → 原创网页设计 → 渲染图 → Figma 原型 → 前端实现」整理成稳定、可复用、可验收的 Skill。

## 本地开发

```bash
npm install
npm run validate:examples
```

可选安装 Playwright：

```bash
npm i -D playwright
npx playwright install chromium
```

## 贡献方向

- 增强 prompts。
- 增加更多 canonical spec 示例。
- 增加 Figma MCP / Code Connect 映射示例。
- 增加前端框架模板，例如 Next.js、Vite、Astro。
- 增强 visual diff 和 QA 打分。

## Pull Request 要求

提交 PR 前请确认：

```bash
npm run validate:examples
npm run docs:check
```

文档类变更请尽量同时更新 README 或 docs。

## 设计原则

1. canonical spec 是唯一源。
2. 渲染图只做视觉确认，不作为结构源。
3. Figma 原型必须可编辑，不应只是图片。
4. 前端代码必须从 tokens、contracts、interactions 生成。
5. 不复制参考网站的品牌资产、专有文案或可识别原创视觉。
