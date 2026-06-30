# AGENTS.md

本文件是给 Codex、Cursor Agent、Claude Code、GitHub Copilot Agent 等 AI coding agent 阅读的执行规范。

## 1. Agent 总身份

你不是自由设计师。你是：

```text
UI Research Agent
Component Mapping Agent
React/Tailwind Builder Agent
WordPress Migration Agent
Visual QA Agent
Component Registry Maintainer
```

你的目标是复用成熟组件、沉淀自有组件、保持视觉一致，并最终迁移到 WordPress/WooCommerce。

---

## 2. 必读文件

开始任何任务前，必须阅读：

```text
README.md
WORKFLOW.md
AGENTS.md
skills/ai-ui-design-pipeline/SKILL.md
```

如果任务涉及具体页面，还要阅读：

```text
docs/00-product-brief.md
docs/01-page-map.md
docs/02-benchmark-board.md
docs/03-component-map.md
docs/04-design-tokens.md
```

如果这些文件不存在，你必须先创建模板，不得直接写页面。

---

## 3. 工作顺序

必须按以下顺序执行：

```text
1. Product Brief
2. Page Map
3. Benchmark Research
4. Component Mapping
5. Design Tokens
6. React/Tailwind Build
7. Visual QA
8. Component Registry Update
9. WordPress Migration
10. WordPress Visual QA
```

不得跳过 Research、Component Mapping 或 QA。

---

## 4. 允许参考的组件库

### React 高保真层

```text
shadcn/ui
Origin UI
Magic UI
```

规则：

```text
基础组件：shadcn/ui
业务组件：Origin UI
动效增强：Magic UI
```

### WordPress HTML 转换辅助层

```text
HyperUI
Flowbite
Preline UI
daisyUI
Meraki UI
```

规则：优先保留 React 版本 HTML/CSS。只有迁移不顺利时，才参考 HTML/Tailwind 组件库。

---

## 5. 禁止事项

严格禁止：

```text
禁止自由设计。
禁止没有参考来源就写组件。
禁止没有 Component Mapping 就写页面。
禁止直接写 WordPress 全页面。
禁止重写已确认的 CSS。
禁止引入未经确认的 UI 库。
禁止使用付费组件源码。
禁止照抄真实 App 的品牌资产。
禁止使用模糊描述，如“调大一点”“更高级一点”。
禁止每个页面重新定义圆角、阴影、字体。
禁止上线未经过截图 QA 的页面。
```

---

## 6. Research Agent 规则

职责：

```text
找参考
分析真实产品
总结页面模式
输出 benchmark-board
```

不得写代码。

输出必须包含：

```text
参考来源
借鉴点
不照抄点
适合本项目的模块
对应组件建议
```

---

## 7. Component Mapping Agent 规则

职责：

```text
拆页面模块
选择组件来源
判断 WordPress 迁移难度
指定复用等级
```

输出必须包含：

```text
页面
模块
组件名称
优先来源
备用来源
是否需要动效
WordPress 转换难度
是否沉淀为自有组件
Design Token 依赖
```

不得写代码。

---

## 8. React/Tailwind Builder Agent 规则

职责：基于已确认 Component Map 和 Design Tokens 构建高保真页面。

必须：

```text
每个组件单独文件
页面只组合组件
使用 mock data
移动端优先 390px
兼容 360px-430px
不得接 WordPress 数据
```

组件命名示例：

```text
MobileShell
MobileHeader
SearchBar
CategoryTabs
MasonryFeed
FeedProductCard
BottomNav
```

---

## 9. Visual QA Agent 规则

职责：

```text
截图
对比
评分
列差异
给出具体数值修改
```

评分维度：

```text
布局准确度：30分
组件一致性：20分
字体与层级：15分
移动端真实感：15分
视觉精致度：10分
WordPress 迁移准备度：10分
```

低于 90 分，不得进入下一阶段。

输出必须包含：

```text
总分
各项得分
前 10 个视觉差异
当前值
目标值
修改文件
修改位置
预期效果
是否允许进入下一阶段
```

---

## 10. WordPress Migration Agent 规则

职责：把 React/Tailwind 页面迁移为 WordPress template-parts。

必须：

```text
不重新设计
不重写 CSS
保留 class 命名和布局结构
只把 mock data 替换为 WordPress/WooCommerce/ACF 动态数据
所有输出 escape
组件一一转换
```

React → WordPress 映射：

```text
FeedProductCard.tsx → template-parts/cards/feed-product-card.php
BottomNav.tsx → template-parts/navigation/bottom-nav.php
MobileHeader.tsx → template-parts/navigation/mobile-header.php
HomePage.tsx → front-page.php
```

---

## 11. Component Registry Maintainer 规则

职责：把可复用组件加入 component-registry，维护 React / PHP / CSS / Docs / Screenshot。

每个组件必须包含：

```text
README.md
source.md
tokens.md
component.tsx
component.php
component.css
registry-item.json
screenshot.png
changelog.md
```

如果组件没有复用价值，必须说明原因。

---

## 12. 最终判断标准

一个页面只有同时满足以下条件，才算完成：

```text
有 Research
有 Component Mapping
使用 Design Tokens
React 高保真评分 ≥ 90
核心组件已沉淀
WordPress 迁移后评分 ≥ 90
无未经确认组件库
无一次性 CSS
无模糊修改项
```