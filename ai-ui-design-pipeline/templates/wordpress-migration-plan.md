# WordPress Migration Plan

## 页面

```text
{page_name}
```

## React 源文件

```text

```

## WordPress 目标文件

```text

```

## React → WordPress 映射

| React Component | WordPress Template Part | 数据来源 | 迁移状态 |
|---|---|---|---|
|  |  |  |  |

## CSS 策略

```text
保留 React 高保真阶段确认过的 class 和 CSS。
只做 WordPress 环境必要适配。
```

## 数据绑定

| 字段 | React Mock Data | WordPress / WooCommerce / ACF 来源 | Escape 函数 |
|---|---|---|---|
| title | item.title | get_the_title() | esc_html |
| url | item.url | get_permalink() | esc_url |
| image | item.image | get_the_post_thumbnail_url() | esc_url |
| price | item.price | $product->get_price_html() | wp_kses_post |

## 安全检查

```text
所有文本 esc_html
所有 URL esc_url
允许 HTML 的价格 wp_kses_post
所有属性 esc_attr
```

## QA 计划

```text
1. React 截图
2. WordPress 截图
3. 对比差异
4. 输出分数
5. 低于 90 分继续修正
```