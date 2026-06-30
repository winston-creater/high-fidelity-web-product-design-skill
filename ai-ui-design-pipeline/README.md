# AI UI Design Pipeline

一套适配 AI Agent 的高保真前端设计生产线：先参考优秀产品和免费开源组件库，生成 React/Tailwind 高保真页面，再迁移为 WordPress/WooCommerce 模板，最后通过截图 QA 和组件 Registry 持续沉淀。

## 核心目标

不要让 AI 每次重新设计页面，而是让 AI 按固定流程工作：

```text
真实产品参考
↓
免费组件库映射
↓
Design Tokens 固定视觉规则
↓
React/Tailwind 高保真页面
↓
截图 QA
↓
组件沉淀
↓
WordPress/WooCommerce 迁移
↓
再次截图 QA
```

## 适用场景

- 移动端社区电商网站
- WordPress + WooCommerce 项目
- 小红书 / Temu / SHEIN / TikTok Shop 风格页面
- React/Tailwind 高保真原型
- AI Agent 前端协作规范
- 组件库沉淀与复用
- 截图级视觉 QA

## 推荐组件库

### React 高保真层

| 组件库 | 角色 | 用途 |
|---|---|---|
| shadcn/ui | 基础组件层 | Button、Input、Tabs、Dialog、Sheet、Form、Table |
| Origin UI | 业务组件层 | 商品卡片、用户资料、订单、Checkout、Settings、Dashboard |
| Magic UI | 动效增强层 | Hover、Hero、Marquee、Loading、Number Animation |

### WordPress 迁移辅助层

| 组件库 | 角色 | 用途 |
|---|---|---|
| HyperUI | HTML/Tailwind 参考 | 电商卡片、营销区块、表单 |
| Flowbite | 交互组件参考 | Modal、Tabs、Dropdown、Navbar、Toast |
| Preline UI | HTML/Tailwind 区块参考 | Navigation、Dashboard、Forms、Landing blocks |
| daisyUI | 快速语义类辅助 | Button、Badge、Form、Theme |
| Meraki UI | RTL / 多语言参考 | 中东市场、阿拉伯语、响应式区块 |

## 推荐参考网站

- UI Design Daily：免费 UI 模块、卡片、购物车、Profile、Product Details
- Pinterest：视觉风格、移动端卡片流、社交电商灵感
- Screenlane：移动端真实界面参考，免费内容优先
- Chamjo：亚洲/中东 App 真实截图参考，免费内容优先

## 建议目录结构

```text
ai-ui-design-pipeline/
├── README.md
├── WORKFLOW.md
├── AGENTS.md
├── skills/ai-ui-design-pipeline/SKILL.md
├── prompts/
├── templates/
├── design-tokens/
├── component-registry/
└── registry/
```

## 使用方式

先让 AI 读取：

```text
README.md
WORKFLOW.md
AGENTS.md
skills/ai-ui-design-pipeline/SKILL.md
```

再要求它：

```text
先做 Research 和 Component Mapping，不要直接写代码。
```

## 最重要的纪律

```text
不允许 AI 自由设计。
不允许没有参考来源就写组件。
不允许没有 Component Mapping 就写页面。
不允许直接写 WordPress 全页面。
不允许重写已确认 CSS。
不允许引入未经确认的 UI 库。
所有页面必须截图 QA。
低于 90 分不得进入下一阶段。
```

## 推荐使用顺序

```text
Product Brief
↓
Benchmark Research
↓
Component Mapping
↓
Design Tokens
↓
React/Tailwind High Fidelity Build
↓
Visual QA
↓
Component Registry Update
↓
WordPress Migration
↓
WordPress Visual QA
```

完整资产包包含 38 个文件，已在本地 ZIP 中生成。