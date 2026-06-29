# High Fidelity Web Product Design Skill

> 从「自己的网页想法 + 多个参考网站」出发，生成高还原度的网站结构、UI 渲染图、Figma 原型规格和前端实现规格的 Codex/Agent Skill。

这个仓库不是一个普通的网页截图分析脚本，而是一套可复用的 **高还原度网页产品设计工作流**。它的核心原则是：

```text
不要让“渲染图 → Figma → 代码”互相猜测
而是让三者都来自同一份 canonical spec
```

推荐的最高还原度路线：

```text
自己的网页初步想法
  ↓
AI 分析自己的想法：保留、修改、删除、风险、缺口
  ↓
参考网站采集与分析：结构、UI、交互、转化路径、设计 token
  ↓
合成原创 canonical spec / design tokens / component contracts / interaction models
  ↓
从同一份规格并行生成：
  - 页面渲染图 prompt / image render
  - Figma native prototype contract
  - frontend implementation spec
  ↓
用 QA scorecard、视觉 diff、交互测试、可访问性测试反向修正
```

## 适合什么场景

适合你想做这些事情：

- 输入几个参考网站，让 AI 分析它们的页面结构、UI 设计和交互逻辑。
- 先给出你自己网站的初步想法，再让 AI 分析这个想法是否合理。
- 结合参考网站的优点，但不复制参考网站，生成原创网页方案。
- 用 Codex image skill / image generation 生成页面渲染图。
- 确认视觉方向后，生成 Figma 原型规格或调用 Figma MCP 创建 native Figma frames。
- 进一步生成前端页面代码规格，让 Codex / AI coding agent 生成可维护代码。
- 用 Playwright / axe / Lighthouse / 视觉 diff 做最终验收。

## 核心产物

这个 Skill 最终会围绕以下文件组织所有设计决策：

```text
outputs/
  00-intake/
    project-brief.normalized.json
  01-own-idea/
    own-idea-draft.md
    own-idea-critique.md
  02-reference-analysis/
    <site>/signals.json
    <site>/desktop-full.png
    <site>/mobile-full.png
    reference-profile.<site>.md
    reference-comparison-matrix.md
  03-canonical-spec/
    website-blueprint.md
    canonical-spec.json
    design-tokens.json
    component-contracts.json
    interaction-models.json
    responsive-rules.md
    accessibility-rules.md
    decision-log.md
  04-render/
    desktop-hero.prompt.md
    desktop-full.prompt.md
    mobile-hero.prompt.md
    mobile-full.prompt.md
    render-review.md
    render-delta.md
  05-figma/
    figma-generation-contract.json
    figma-component-map.json
    code-connect-map.json
    prototype-review.md
  06-frontend/
    frontend-implementation-spec.md
    component-registry.json
    route-map.md
    test-plan.md
  07-qa/
    fidelity-scorecard.md
    qa-checklist.md
    patch-plan.md
  08-handoff/
    handoff-report.md
```

## 为什么不是直接 image → Figma → code

图片没有以下信息：

- auto layout
- variables
- component variants
- component props
- hover / focus / active / loading / error 状态
- responsive rules
- keyboard interaction
- aria semantics
- code component mapping

所以，最高还原度路线应该是：

```text
canonical spec
  ├─ image render，用来确认视觉方向
  ├─ Figma prototype，用来协作、评审、标注和交互演示
  └─ frontend code，用来真实落地
```

也就是说，图片不是唯一源，Figma 也不是唯一源，真正的 source of truth 是：

```text
canonical-spec.json
+ design-tokens.json
+ component-contracts.json
+ interaction-models.json
```

## 快速开始

### 1. 下载并进入仓库

```bash
cd high-fidelity-web-product-design-skill-github-ready
```

### 2. 初始化输出目录

```bash
npm run init
```

### 3. 准备项目输入

复制示例：

```bash
cp examples/input.high-fidelity.example.yaml my-project.yaml
```

编辑 `my-project.yaml`，填入你的产品、目标用户、网页想法和参考网站：

```yaml
project:
  name: "AI CRM Landing Page"
  type: "B2B SaaS 官网首页"
  target_users:
    - "销售团队负责人"
    - "创业公司 founder"
  primary_conversion: "预约 demo"
  brand_tone:
    - "可信"
    - "现代"
    - "高效"

own_ideas:
  - "首页首屏放一句强价值主张、产品截图和预约 demo CTA。"
  - "中部用 3 个场景解释产品如何提升销售跟进效率。"
  - "底部放 FAQ 和二次 CTA。"

references:
  - url: "https://example.com"
    reason: "喜欢它的首屏结构和 CTA 层级"
    borrow_scope: "structure only"
  - url: "https://example.org/pricing"
    reason: "喜欢它的价格卡布局和 FAQ 组织方式"
    borrow_scope: "interaction pattern only"
```

### 4. 查看当前可用工具路由

```bash
npm run route -- examples/tool-availability.example.yaml
```

如果你的环境已经配置了 Figma MCP、image generation、Playwright MCP 等，路由器会优先使用这些工具；如果没有，它会输出 fallback 方案。

### 5. 采集参考网站信号

本地采集需要安装 Playwright：

```bash
npm i -D playwright
npx playwright install chromium
```

然后运行：

```bash
npm run collect -- https://example.com https://example.org
```

输出示例：

```text
outputs/reference-capture/example-com/
  desktop-full.png
  mobile-full.png
  signals.json
```

### 6. 生成渲染图 prompt

如果你已有 `canonical-spec.json`：

```bash
npm run render-prompt -- examples/minimal-canonical-spec.json
```

它会输出：

```text
outputs/render-prompts/desktop-hero.prompt.md
outputs/render-prompts/desktop-full.prompt.md
outputs/render-prompts/mobile-hero.prompt.md
outputs/render-prompts/mobile-full.prompt.md
```

### 7. 校验 canonical spec

```bash
npm run validate -- examples/minimal-canonical-spec.json
```

### 8. 计算还原度分数

```bash
npm run score -- examples/fidelity-score.example.json
```

### 9. 生成 QA checklist

```bash
npm run qa -- examples/minimal-canonical-spec.json
```

## 推荐在 Codex / Agent 中这样使用

把这个仓库目录放到你的项目中，例如：

```text
.agents/skills/high-fidelity-web-product-design/
```

然后对 Codex / Agent 说：

```text
Use the high-fidelity-web-product-design skill.

我要为我的产品设计一个官网首页。请按最高还原度流程执行：
1. 先基于我的想法生成页面初稿。
2. 批判性分析这些想法。
3. 分析参考网站。
4. 合成 canonical spec、design tokens、component contracts、interaction models。
5. 生成 image render prompts。
6. 如果 image tool 可用，就生成渲染图；不可用则只输出 prompts。
7. 如果 Figma MCP 已认证，就生成 native Figma prototype；不可用则输出 figma-generation-contract.json。
8. 生成 frontend implementation spec。
9. 输出 QA scorecard 和 patch loop。

我的项目 brief 如下：
<粘贴 examples/input.high-fidelity.example.yaml 的内容>
```

## 自动工具/插件调用逻辑

Skill 通过 `prompts/12-tool-router.md` 和 `scripts/route-tools.mjs` 执行工具路由：

| 阶段 | 首选工具 | fallback |
|---|---|---|
| 参考网站采集 | Playwright MCP / Chrome DevTools MCP | 本地 Playwright 脚本 |
| 视觉渲染图 | Codex image skill / image generation | 输出 render prompt |
| Figma 原型 | Figma MCP remote / desktop | 输出 Figma generation contract |
| Figma 到代码 | Figma MCP + Code Connect | component contracts + frontend spec |
| QA 验收 | Playwright + axe + Lighthouse + visual diff | QA checklist |

更多说明见：

- [`docs/automatic-plugin-calling.md`](docs/automatic-plugin-calling.md)
- [`docs/tool-integration-priorities.md`](docs/tool-integration-priorities.md)
- [`docs/figma-auth-and-fidelity.md`](docs/figma-auth-and-fidelity.md)

## Figma 是否需要登录

需要分情况：

| 场景 | 是否需要 Figma 登录/授权 |
|---|---|
| 只生成 Figma 原型规格文档 | 不需要 |
| 把渲染图作为参考图导入 Figma | 需要你在 Figma 中操作，或需要 Figma 工具授权 |
| 自动创建/修改 Figma 文件 | 需要 Figma MCP 或 Figma API 授权 |
| 使用 Code Connect 映射真实组件 | 需要对应 Figma 和代码库权限 |

这个 Skill 的规则是：

```text
Figma 未授权：只输出 figma-generation-contract.json，不声称已经创建 Figma 文件。
Figma 已授权：创建 native Figma frames、variables、components、variants 和 prototype links。
```

## 还原度目标

默认目标写在 `docs/qa-metrics.md`：

| 指标 | 默认目标 |
|---|---:|
| Desktop 视觉还原度 | ≥ 94 |
| Mobile 视觉还原度 | ≥ 92 |
| 结构还原度 | ≥ 95 |
| Design token 还原度 | ≥ 95 |
| Component contract 还原度 | ≥ 95 |
| 交互还原度 | ≥ 88 |
| 响应式还原度 | ≥ 90 |
| 代码可维护性 | ≥ 90 |
| 原创性 | ≥ 95 |
| Accessibility | 无 critical / serious 问题 |

## GitHub 上传

当前对话环境里的 GitHub 连接器没有写入仓库的接口，所以这个包已经整理成 GitHub-ready 仓库。你可以用以下任一方式上传。

### 方式 A：GitHub CLI

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

### 方式 B：已有远程仓库

```bash
cd high-fidelity-web-product-design-skill-github-ready

git init
git add .
git commit -m "Initial commit: high fidelity web product design skill"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/high-fidelity-web-product-design-skill.git
git push -u origin main
```

### 方式 C：网页上传

1. 在 GitHub 新建仓库。
2. 解压本仓库 zip。
3. 上传所有文件。
4. 确认根目录包含 `README.md`、`SKILL.md`、`package.json`、`prompts/`、`templates/`、`scripts/`。

更完整步骤见 [`docs/github-upload-guide.md`](docs/github-upload-guide.md)。

## 原创性与合规边界

这个 Skill 只允许借鉴：

- 页面结构模式
- 信息架构
- 转化路径
- 交互模式
- 设计原则
- 组件类型
- 响应式策略

不允许复制：

- 参考网站 logo / 品牌资产
- 原创插画 / 图片 / 产品截图
- 专有文案
- 可识别的独特视觉组合
- 受版权保护的素材

详见 [`docs/originality-guardrails.md`](docs/originality-guardrails.md)。

## 仓库结构

```text
.
├── SKILL.md
├── README.md
├── workflow.md
├── package.json
├── agents/
├── bin/
├── docs/
├── examples/
├── prompts/
├── scripts/
├── src/
├── templates/
└── .github/
```

## License

MIT. See [`LICENSE`](LICENSE).
