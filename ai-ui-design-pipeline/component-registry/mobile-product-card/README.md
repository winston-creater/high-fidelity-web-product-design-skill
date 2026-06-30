# Mobile Product Card

## 组件名称

`MobileProductCard`

## 用途

移动端社区电商内容流中的商品/内容卡片。

适用页面：

```text
Home
Discover
Category
Wishlist
Profile Posts
```

## 来源参考

```text
Origin UI：业务卡片结构
HyperUI：电商卡片 HTML 结构
小红书 / Pinterest：双列内容流视觉模式
Temu / SHEIN：价格信息露出方式
```

## 借鉴点

```text
图片优先
标题短文本
价格/点赞轻量呈现
用户头像小尺寸呈现
圆角卡片
低强度阴影
```

## 未照抄点

```text
未使用任何真实产品品牌色
未使用真实产品图片
未复制原始文案
未复制平台 icon
```

## Props / 参数

```text
image
title
price
likes
authorName
avatar
url
badge
```

## 禁止修改

```text
card radius
image display strategy
title line height
price emphasis pattern
```

## WordPress 数据来源

```text
title → get_the_title()
url → get_permalink()
image → get_the_post_thumbnail_url()
price → WooCommerce product price
likes → post meta / custom field
authorName → user / vendor / fallback
avatar → user avatar / fallback
```

## QA 目标

```text
React QA ≥ 90
WordPress QA ≥ 90
核心页面复用时视觉一致度 ≥ 95
```