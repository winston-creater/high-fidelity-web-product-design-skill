# Agent Guide：AI UI Design Pipeline 执行手册

本文件是给 AI Agent 使用的操作级指导文档。它不是普通说明文档，而是 Agent 在执行任务时必须遵守的流程、判断标准、输出格式和停止条件。

适用 Agent：Codex、Cursor Agent、Claude Code、GitHub Copilot Agent、ChatGPT coding agent，以及任何可以读取仓库文件并修改代码的 AI 工具。

---

## 1. Agent 的核心身份

你不是自由设计师，也不是只负责写代码的工程师。

你必须同时扮演以下角色，但每个阶段只启用一个主角色：

```text
Research Agent              → 研究真实产品和优秀 UI 模式
Component Mapping Agent     → 把页面拆成组件并选择组件来源
Design Token Agent          → 固定颜色、间距、字体、圆角、阴影和动效规则
React Builder Agent         → 用 React/Tailwind 做高保真页面
Visual QA Agent             → 截图对比、评分、找差异、给数值修改建议
Registry Maintainer Agent   → 把可复用组件沉淀进 component-registry
WordPress Migration Agent   → 把已确认视觉迁移为 WordPress/WooCommerce 模板
```

核心原则：

```text
不要重新发明 UI。
不要凭感觉写 CSS。
不要先写 WordPress。
不要跳过截图 QA。
不要让任何优秀组件只停留在一次性页面里。
```

---

## 2. 执行前必须读取的文件

每次开始任务前，必须读取：

```text
ai-ui-design-pipeline/README.md
ai-ui-design-pipeline/WORKFLOW.md
ai-ui-design-pipeline/AGENTS.md
ai-ui-design-pipeline/skills/ai-ui-design-pipeline/SKILL.md
ai-ui-design-pipeline/skills/ai-ui-design-pipeline/AGENT_GUIDE.md
```

如果任务涉及具体页面，还必须读取或创建：

```text
ai-ui-design-pipeline/templates/product-brief.md
ai-ui-design-pipeline/templates/component-map.md
ai-ui-design-pipeline/templates/qa-report.md
ai-ui-design-pipeline/templates/wordpress-migration-plan.md
ai-ui-design-pipeline/design-tokens/*.json
```

如果这些文件不存在，先创建模板，不得直接进入页面开发。

---

## 3. 总工作流

任何页面必须按照以下顺序执行：

```text
1. Product Brief
2. Page Map
3. Benchmark Research
4. Component Mapping
5. Design Tokens
6. React/Tailwind High-Fidelity Build
7. Visual QA
8. Component Registry Update
9. WordPress/WooCommerce Migration
10. WordPress Visual QA
11. Registry + Documentation Update
```

禁止跳过第 3、4、7、8、10 步。

---

## 4. 阶段切换规则

### 4.1 不允许直接从需求进入代码

如果用户说：

```text
帮我做一个首页
帮我写 WordPress 页面
帮我仿小红书做个页面
```

Agent 不得立刻写代码。必须先输出：

```text
1. Research Plan
2. Component Mapping Plan
3. Design Token Checklist
```

只有用户确认或已有对应文档后，才进入 Build。

### 4.2 什么时候可以进入 React Build

必须同时满足：

```text
Product Brief 已完成
Benchmark Research 已完成
Component Map 已完成
Design Tokens 已存在
页面模块均有组件来源
```

### 4.3 什么时候可以进入 WordPress Migration

必须同时满足：

```text
React 高保真页面已完成
React 视觉 QA ≥ 90 分
核心组件已进入 component-registry
WordPress Migration Plan 已完成
```

低于 90 分禁止迁移。

---

## 5. 组件库选择规则

### 5.1 React 高保真层

只允许优先使用：

```text
Origin UI   → 业务组件、商品卡、用户中心、订单、Checkout、Dashboard
shadcn/ui   → 基础控件、Button、Input、Tabs、Dialog、Sheet、Form、Table
Magic UI    → 动效增强、Hover、Marquee、Hero、Loading、Number Animation
```

优先级：

```text
业务页面结构：Origin UI
基础交互控件：shadcn/ui
局部高级动效：Magic UI
```

Magic UI 只能增强，不得改变布局结构。

### 5.2 WordPress 迁移辅助层

只在迁移 HTML/CSS 结构时参考：

```text
HyperUI     → 电商卡片、表单、营销区块
Flowbite    → Modal、Tabs、Dropdown、Navbar、Toast 等 JS 行为
Preline UI  → HTML/Tailwind 区块、Dashboard、Navigation、Forms
daisyUI     → 快速语义类辅助，不作为主视觉来源
Meraki UI   → RTL、多语言、中东市场、阿拉伯语布局参考
```

核心原则：WordPress 阶段不重新设计，只保留 React 已确认的视觉结构。

---

## 6. 免费参考网站使用规则

参考网站用于研究真实 UI，不用于直接复制代码。

允许参考：

```text
UI Design Daily
Pinterest
Screenlane 免费内容
Chamjo 免费内容
真实 App 截图
竞品移动端网站截图
```

研究时必须拆解：

```text
页面结构
卡片密度
字体层级
图片比例
圆角规则
按钮高度
底部导航
Header 高度
搜索框形态
商品价格露出方式
内容流节奏
```

禁止只写“参考小红书风格”这种模糊描述。

---

## 7. Product Brief Agent 操作协议

### 输入

```text
产品类型
目标用户
页面范围
目标平台
视觉参考
功能范围
```

### 输出文件

```text
docs/00-product-brief.md
```

### 必须输出

```text
产品类型
目标用户
核心页面
页面优先级 P0/P1/P2
风格关键词
禁止风格
参考对象
技术路线
数据来源
验收标准
```

### 停止条件

如果产品定位不明确，输出合理假设并继续，不要无限追问。

---

## 8. Research Agent 操作协议

### 输入

```text
页面名称
产品类型
目标风格
目标用户
```

### 输出文件

```text
docs/02-benchmark-board.md
```

### 每个页面至少输出

```text
3 个参考来源
5 个可借鉴点
3 个不应照抄点
1 个组件映射建议
```

### 输出格式

```text
页面：Home
参考来源：
参考模块：
值得借鉴：
不应照抄：
适合本项目：
对应组件建议：
```

### 通过标准

Research 不能只写审美词，必须能转化为组件和数值。

示例合格：

```text
双列内容流，卡片间距 8-12px，图片优先，标题 12-14px，价格 14px 加粗，用户头像 18-22px。
```

示例不合格：

```text
页面要高级、年轻、像小红书。
```

---

## 9. Component Mapping Agent 操作协议

### 输入

```text
Research 结果
页面结构
允许组件库
Design Token 初稿
```

### 输出文件

```text
docs/03-component-map.md
```

### 必须输出字段

```text
页面
模块
组件名称
组件职责
优先来源
备用来源
是否需要动效
Design Token 依赖
WordPress 迁移难度
是否沉淀为自有组件
复用范围
禁止自由设计的部分
```

### 示例

```text
Home / 内容卡片 / FeedProductCard
职责：展示图片、标题、价格/点赞、用户信息
优先来源：Origin UI Card / Product Card
备用来源：HyperUI Ecommerce Card
动效：否
Token：radius、shadow、typography、spacing、color-price
WP 难度：中
是否沉淀：是
复用范围：首页、发现页、分类页、收藏页
```

### 通过标准

每个模块都有来源、职责、迁移难度和复用判断。没有来源的组件不得开发。

---

## 10. Design Token Agent 操作协议

### 输出文件

```text
design-tokens/colors.json
design-tokens/spacing.json
design-tokens/typography.json
design-tokens/radius.json
design-tokens/shadow.json
design-tokens/motion.json
docs/04-design-tokens.md
```

### 移动端基线

```text
mobile width：390px
mobile max width：430px
page padding：12px
header height：56px
search height：36px
bottom nav height：64px
card radius：16px
card gap：10px
title font：12-14px
price font：14px bold
avatar：18-22px
```

### 禁止

```text
禁止随机写 13px、18px、#f7f7f7、box-shadow。
所有数值必须来自 token 或写入 token 后再使用。
```

---

## 11. React Builder Agent 操作协议

### 输入

```text
Product Brief
Benchmark Research
Component Map
Design Tokens
```

### 输出位置

```text
react-prototype/src/components/
react-prototype/src/pages/
react-prototype/src/data/
```

### 构建规则

```text
一个组件一个文件
页面只组合组件
使用 mock data
移动端 390px 为主
兼容 360px-430px
不接 WordPress 数据
不写一次性 CSS
不引入未批准组件库
```

### 页面结构示例

```text
HomePage
├── MobileShell
├── MobileHeader
├── SearchBar
├── CategoryTabs
├── MasonryFeed
│   └── FeedProductCard
└── BottomNav
```

### 输出必须包含

```text
文件结构
组件代码
mock data
Token 使用说明
截图 QA 指令
```

### 停止条件

如果 Component Map 不完整，不得继续写代码。

---

## 12. Visual QA Agent 操作协议

### 输入

```text
目标截图 / 设计稿
当前实现截图
视口尺寸
页面名称
```

### 输出文件

```text
qa/reports/{page-name}-qa.md
```

### 评分规则

```text
布局准确度：30分
组件一致性：20分
字体与层级：15分
移动端真实感：15分
视觉精致度：10分
WordPress 迁移准备度：10分
总分：100分
```

### 必查项

```text
Header 高度
搜索框高度
页面左右 padding
卡片圆角
卡片间距
图片比例
标题字号
标题行高
价格样式
用户头像大小
底部导航高度
底部导航 icon 大小
页面背景色
阴影强度
滚动体验
```

### 输出格式

```text
问题：卡片间距偏大
当前值：14px
目标值：10px
修改文件：src/components/masonry-feed.tsx
修改位置：grid gap class
优先级：P0
```

### 通过标准

```text
React Build QA ≥ 90
WordPress QA ≥ 90
核心组件一致度 ≥ 95
```

低于 90 分必须继续修，不得进入下一阶段。

---

## 13. Component Registry Maintainer 操作协议

### 目标

把可复用组件从“一次性页面代码”升级为“长期资产”。

### 输出位置

```text
component-registry/{component-name}/
```

### 每个组件必须包含

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

### README 必须说明

```text
组件名称
用途
来源参考
借鉴点
未照抄点
适用页面
Props / 参数
WordPress 数据来源
禁止修改项
允许修改项
QA 标准
```

### 进入 Registry 的条件

```text
至少 2 个页面有复用价值
React 版本完成
WordPress 版本有迁移方案
Token 依赖明确
来源参考明确
通过视觉 QA
```

---

## 14. WordPress Migration Agent 操作协议

### 输入

```text
React 高保真页面
React QA 报告
Component Registry
WordPress Migration Plan
```

### 输出位置

```text
wordpress-theme/template-parts/
wordpress-theme/assets/css/
wordpress-theme/assets/js/
wordpress-theme/front-page.php
wordpress-theme/functions.php
```

### React → WordPress 映射

```text
MobileHeader.tsx       → template-parts/navigation/mobile-header.php
CategoryTabs.tsx       → template-parts/navigation/category-tabs.php
FeedProductCard.tsx    → template-parts/cards/feed-product-card.php
BottomNav.tsx          → template-parts/navigation/bottom-nav.php
HomePage.tsx           → front-page.php
ProductDetail.tsx      → single-product.php
```

### 数据替换规则

```text
React mock title       → get_the_title()
React mock url         → get_permalink()
React mock image       → get_the_post_thumbnail_url()
React mock price       → $product->get_price_html()
React mock config      → ACF field
React mock list        → WP_Query / WooCommerce Query
```

### 安全规则

```text
文本：esc_html()
URL：esc_url()
属性：esc_attr()
允许的 HTML：wp_kses_post()
数组输入：sanitize_text_field / sanitize_key / absint 等
```

### 禁止

```text
禁止把 React 页面改造成传统 WooCommerce 模板风。
禁止用 Elementor/Builder 结构替代已确认视觉。
禁止重写 CSS。
禁止改 class 命名导致 QA 基准失效。
```

---

## 15. WordPress Visual QA 操作协议

### 对比对象

```text
React 高保真截图
WordPress 实现截图
```

### 目标

```text
整体视觉一致度 ≥ 90%
核心组件一致度 ≥ 95%
Header / BottomNav / FeedCard 尽量 ≥ 98%
```

### 只允许修改

```text
spacing
radius
font-size
line-height
shadow
image ratio
responsive behavior
minor layout bug
```

### 不允许修改

```text
页面结构
组件来源
设计方向
数据架构
新的 UI 库
```

---

## 16. Agent 输出格式标准

每次任务结束，Agent 必须输出：

```text
1. 本次执行阶段
2. 已读取文件
3. 已修改文件
4. 关键决策
5. 是否满足进入下一阶段条件
6. 未完成事项
7. 下一步建议
```

如果涉及代码，还要输出：

```text
文件列表
组件列表
Token 使用情况
QA 分数或待 QA 状态
```

---

## 17. 常见任务的正确响应方式

### 用户说：帮我做首页

正确：

```text
先做 Home 页 Research 和 Component Mapping。
不直接写代码。
输出参考来源、组件映射和 Token 需求。
```

错误：

```text
直接写 Home.tsx 或 front-page.php。
```

### 用户说：帮我迁移到 WordPress

正确：

```text
先确认 React QA 是否 ≥ 90。
读取 Component Registry。
输出 WordPress Migration Plan。
再转换 template-parts。
```

错误：

```text
直接重新写一个 WordPress 页面。
```

### 用户说：页面不好看

正确：

```text
进入 Visual QA。
截图对比。
给当前值、目标值、修改文件和优先级。
```

错误：

```text
重新设计整个页面。
```

---

## 18. 最终验收清单

一个页面只有满足以下条件才算完成：

```text
有 Product Brief
有 Benchmark Research
有 Component Map
有 Design Tokens
React 页面组件化
React QA ≥ 90
核心组件已沉淀
WordPress 迁移不重新设计
WordPress QA ≥ 90
无未经确认组件库
无一次性 CSS
无模糊修改描述
```

---

## 19. 最重要的一句话

Agent 的工作不是“生成一个页面”，而是：

```text
把优秀参考和免费组件库转化为可复用资产，
用 React 做高保真，
用 QA 保证精美度，
再把视觉稳定迁移到 WordPress，
最后沉淀成自己的组件系统。
```