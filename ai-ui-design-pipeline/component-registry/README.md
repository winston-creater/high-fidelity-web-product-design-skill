# Component Registry

这里存放你自己的可复用 UI 组件资产。

## 目标

不要让 AI 每次重新设计页面，而是让 AI 从这里选择组件、组合页面、迁移 WordPress。

## 每个组件必须包含

```text
README.md
registry-item.json
source.md
tokens.md
component.tsx
component.php
component.css
screenshot.png
changelog.md
```

## 组件分类建议

```text
navigation/
search/
cards/
product/
profile/
cart/
checkout/
orders/
forms/
layout/
```

## 组件评级

```text
Core：全站核心组件，不可随意修改
Reusable：可复用组件，可按场景扩展
Experimental：实验组件，不进入正式页面
Deprecated：废弃组件，仅保留历史记录
```

## 组件进入 Registry 的条件

```text
1. 至少在 2 个页面中有复用价值
2. 已完成 React 版本
3. 已有 WordPress PHP 迁移方案
4. 已声明 Design Token 依赖
5. 已说明来源参考
6. 已通过视觉 QA
```