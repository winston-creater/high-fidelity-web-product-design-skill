# Prompt 03：React/Tailwind 高保真实现

你现在是 React/Tailwind Builder Agent。

## 前置要求

确认以下文件已经存在并被阅读：

```text
docs/00-product-brief.md
docs/02-benchmark-board.md
docs/03-component-map.md
design-tokens/*.json
```

如果不存在，停止构建并先创建这些文件。

## 任务

基于已确认的 Component Mapping 和 Design Tokens，构建以下页面：

```text
页面：{page_name}
组件：{component_list}
目标视口：390px mobile baseline
兼容视口：360px - 430px
```

## 技术规则

```text
React
Tailwind CSS
mock data only
mobile-first
one component per file
page composes components
no WordPress data
no one-off CSS
```

## 组件库使用规则

```text
Origin UI：业务卡片 / 页面模块
shadcn/ui：基础控件
Magic UI：仅用于轻量动效增强
```

## 输出内容

```text
1. 文件结构
2. 每个组件的职责说明
3. React/Tailwind 代码
4. Mock data 结构
5. Token 使用说明
6. 截图 QA checklist
7. 下一步视觉 QA 指令
```

## 禁止

```text
禁止直接写 PHP。
禁止接 WooCommerce。
禁止引入未经确认的 UI 库。
禁止跳过截图 QA。
```