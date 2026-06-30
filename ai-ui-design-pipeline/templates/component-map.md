# Component Map

| 页面 | 模块 | 组件名称 | 职责 | 优先来源 | 备用来源 | 动效 | Token 依赖 | WP 难度 | 是否沉淀 | 复用范围 |
|---|---|---|---|---|---|---|---|---|---|---|
| Home | 顶部搜索 | MobileSearchHeader | Logo/Search/Message | shadcn/ui Input | Preline Search | 否 | spacing, typography, radius | 低 | 是 | 全站 |
| Home | 分类导航 | CategoryTabs | 横向分类 | shadcn/ui Tabs | Flowbite Tabs | 否 | spacing, radius | 低 | 是 | 首页/分类 |
| Home | 内容卡片 | FeedProductCard | 内容+商品信息 | Origin UI Card | HyperUI Card | 否 | radius, shadow, typography | 中 | 是 | 核心 |
| Home | 瀑布流 | MasonryFeed | 双列布局 | 自有 Layout | CSS Columns | 否 | spacing | 中 | 是 | 核心 |
| Home | 底部导航 | MobileBottomNav | 固定底部导航 | 自有组件 | Flowbite Navbar | 否 | spacing, shadow | 低 | 是 | 全站 |

## 组件优先级

```text
P0：
P1：
P2：
```

## React 文件结构建议

```text
react-prototype/src/components/
```

## WordPress 文件结构建议

```text
wordpress-theme/template-parts/
```

## 需要补充的 Tokens

```text

```

## 风险点

```text

```