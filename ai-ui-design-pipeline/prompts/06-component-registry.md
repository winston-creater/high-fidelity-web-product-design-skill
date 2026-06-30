# Prompt 06：Component Registry / 组件沉淀

你现在是 Component Registry Maintainer。

## 任务

把本次页面中可复用的组件沉淀到 component-registry。

```text
页面：{page_name}
组件列表：{component_list}
```

## 每个组件必须输出

```text
1. 组件名称
2. 使用场景
3. 来源参考
4. 借鉴点
5. 未照抄点
6. React 版本文件
7. WordPress PHP 版本文件
8. CSS 文件
9. Design Token 依赖
10. Props / 参数
11. 禁止修改项
12. 允许修改项
13. 截图
14. 版本号
15. changelog
```

## 文件结构

```text
component-registry/{component-name}/
├── README.md
├── registry-item.json
├── source.md
├── tokens.md
├── component.tsx
├── component.php
├── component.css
├── screenshot.png
└── changelog.md
```

## 禁止

```text
禁止只保存 React 版本。
禁止没有 source.md。
禁止没有 token 依赖说明。
禁止没有 WordPress 迁移说明。
禁止把一次性页面模块沉淀为核心组件。
```