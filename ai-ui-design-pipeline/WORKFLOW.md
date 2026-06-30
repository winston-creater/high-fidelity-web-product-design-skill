# AI 前端设计工作流 v1.0

## 0. 定位

本工作流用于建立一条长期可复用的 AI 前端生产线：

```text
优秀产品参考
↓
免费开源组件库复用
↓
Design Tokens 固定风格
↓
React/Tailwind 高保真页面
↓
截图 QA
↓
组件 Registry 沉淀
↓
WordPress/WooCommerce 迁移
↓
再次截图 QA
```

目标不是让 AI 每次重新设计，而是让 AI 持续复用、组合、检查、沉淀。

---

## 1. 总原则

AI 不是自由设计师，而是：

```text
UI Researcher
Component Librarian
Front-end Implementation Engineer
WordPress Migration Engineer
Visual QA Engineer
Component Registry Maintainer
```

严格禁止：

```text
不从零设计
不凭感觉写 CSS
不直接写 WordPress 页面
不大面积重构
不引入未批准组件库
不复制付费组件源码
不使用真实产品品牌资产
```

视觉质量公式：

```text
精美度 = 优秀参考 + 成熟组件 + 统一 Tokens + 组件复用 + 截图迭代
```

---

## 2. 组件库分层

### React 高保真层

| 优先级 | 组件库 | 角色 | 用途 |
|---|---|---|---|
| 1 | Origin UI | 业务组件层 | Product Card、Profile、Checkout、Order、Dashboard |
| 2 | shadcn/ui | 基础组件层 | Button、Input、Tabs、Sheet、Dialog、Form、Table |
| 3 | Magic UI | 动效增强层 | Hover、Marquee、Loading、Hero、Number Animation |

规则：业务模块优先 Origin UI；基础控件优先 shadcn/ui；动效只在必要时使用 Magic UI。

### WordPress 迁移辅助层

| 优先级 | 组件库 | 角色 | 用途 |
|---|---|---|---|
| 1 | HyperUI | HTML/Tailwind 参考 | Cards、Forms、Marketing、Ecommerce |
| 2 | Flowbite | 交互组件参考 | Modal、Tabs、Dropdown、Navbar、Toast |
| 3 | Preline UI | HTML 区块参考 | Navigation、Dashboard、Forms、Templates |
| 4 | daisyUI | 快速语义类辅助 | Button、Badge、Form、Theme |
| 5 | Meraki UI | RTL / 多语言参考 | 中东市场、阿拉伯语、响应式 UI |

迁移阶段不重新设计，优先保留 React 版本 HTML/CSS。

---

## 3. 参考网站

参考网站不是代码来源，而是视觉与产品模式来源。

重点观察：页面密度、信息层级、卡片比例、图片比例、圆角、字体、导航结构、底部操作区、商品信息露出方式。

推荐来源：

```text
UI Design Daily
Pinterest
Screenlane 免费内容
Chamjo 免费内容
真实 App 截图
竞品移动端网站截图
```

推荐关键词：

```text
xiaohongshu ui
social commerce mobile ui
mobile ecommerce app ui
fashion ecommerce mobile app
community app design
product detail mobile ui
profile mobile app ui
tiktok shop mobile ui
temu product detail mobile
shein shopping app ui
```

---

## 4. Phase 0：项目初始化

必须创建：

```text
docs/
references/
design-tokens/
react-prototype/
wordpress-theme/
component-registry/
qa/
prompts/
skills/
registry/
```

项目没有完成 Product Brief、Page Map、Component Map 和 Design Tokens 之前，不允许写页面代码。

---

## 5. Phase 1：产品定义

AI 必须输出：

```text
1. 产品类型
2. 目标用户
3. 核心场景
4. 页面优先级
5. 风格关键词
6. 禁止风格
7. 技术路线
8. 数据来源
9. 验收标准
```

页面优先级示例：

```text
P0：首页、发现页、商品详情页、用户中心
P1：搜索页、购物车、订单页、分类页
P2：消息页、收藏页、设置页、通知页
```

---

## 6. Phase 2：优秀产品分析

每个页面至少分析：

```text
3 个参考来源
5 个可借鉴点
3 个不应照抄点
1 个组件映射建议
```

输出格式：

```text
页面：Home
参考来源：
参考模块：
值得借鉴：
不应照抄：
适合本项目：
对应组件：
```

---

## 7. Phase 3：组件映射

页面不直接写代码，而是先拆成组件。

必须输出字段：

```text
页面
模块
组件名称
优先来源
备用来源
是否需要动效
WordPress 转换难度
复用等级
Design Token 依赖
```

没有 Component Mapping，不允许进入 React Build。

---

## 8. Phase 4：Design Tokens

所有视觉细节统一，不让 AI 随机写数值。

推荐移动端 Token：

```text
Mobile width：390px
Max width：430px
Page padding：12px
Header height：56px
Search height：36px
Bottom nav height：64px
Card radius：16px
Card gap：10px
Title font：13px / 14px
Price font：14px
```

禁止随手写颜色、圆角、阴影、字体大小。

---

## 9. Phase 5：React/Tailwind 高保真实现

先在 React/Tailwind 中把页面视觉做到满意，再迁移 WordPress。

页面只能由组件组合：

```text
HomePage
├── MobileShell
├── MobileHeader
├── CategoryTabs
├── MasonryFeed
│   └── FeedProductCard
└── BottomNav
```

禁止直接接 WordPress 数据，禁止先写 PHP，禁止写一次性 CSS。

---

## 10. Phase 6：视觉 QA

必查项：

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

评分规则：

```text
布局准确度：30分
组件一致性：20分
字体与层级：15分
移动端真实感：15分
视觉精致度：10分
WordPress 迁移准备度：10分
总分：100分
```

低于 90 分，不得进入 WordPress 迁移。

---

## 11. Phase 7：组件沉淀

优秀组件必须沉淀为自有组件。

每个组件必须包含：

```text
README.md
source.md
tokens.md
component.tsx
component.php
component.css
screenshot.png
changelog.md
registry-item.json
```

---

## 12. Phase 8：WordPress 迁移

迁移不是重新写页面，而是复用 React 高保真页面的视觉结构：

```text
React Component
↓
HTML Structure
↓
WordPress template-part
↓
WooCommerce / ACF / WP data binding
```

核心规则：

```text
CSS 不重写
视觉结构不重写
组件一一对应
只替换数据层
动态输出必须 escape
```

示例：

```text
FeedProductCard.tsx → template-parts/cards/feed-product-card.php
BottomNav.tsx → template-parts/navigation/bottom-nav.php
MobileHeader.tsx → template-parts/navigation/mobile-header.php
HomePage.tsx → front-page.php
```

---

## 13. Phase 9：WordPress QA

对比 React 高保真截图和 WordPress 实现截图。

目标：

```text
视觉一致度 ≥ 90%
核心页面 ≥ 95%
底部导航 / Header / Card 核心组件尽量 98%+
```

QA 阶段只允许修 spacing、radius、font、shadow、layout、image ratio、responsive behavior。

---

## 14. Phase 10：持续升级

每月让 AI 扫描组件库和参考来源，输出：

```text
新组件建议
旧组件替换建议
设计趋势变化
不建议采用的趋势
Registry 升级计划
```

只有比现有组件明显更好，才允许替换。替换前必须保留旧版本。升级后必须重新截图 QA。

---

## 15. 最终路线

```text
免费参考网站
↓
真实产品 UI 分析
↓
免费组件库 Component Mapping
↓
Design Tokens
↓
React/Tailwind 高保真页面
↓
截图 QA
↓
组件沉淀
↓
WordPress template-parts 迁移
↓
WooCommerce / ACF / WordPress 数据绑定
↓
WordPress 截图 QA
↓
Registry 更新
```

这套流程的核心不是生成一次页面，而是让 UI 系统随着项目不断变强。