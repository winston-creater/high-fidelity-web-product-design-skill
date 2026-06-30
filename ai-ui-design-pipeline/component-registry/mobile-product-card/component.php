<?php
/**
 * Mobile Product Card template part.
 *
 * Expected $args:
 * - title
 * - url
 * - image
 * - price_html
 * - likes
 * - author_name
 * - avatar
 * - badge
 */

$title = isset($args['title']) ? $args['title'] : get_the_title();
$url = isset($args['url']) ? $args['url'] : get_permalink();
$image = isset($args['image']) ? $args['image'] : get_the_post_thumbnail_url(get_the_ID(), 'large');
$price_html = isset($args['price_html']) ? $args['price_html'] : '';
$likes = isset($args['likes']) ? $args['likes'] : '';
$author_name = isset($args['author_name']) ? $args['author_name'] : 'user_style';
$avatar = isset($args['avatar']) ? $args['avatar'] : '';
$badge = isset($args['badge']) ? $args['badge'] : '';
?>
<a class="ui-card ui-mobile-product-card" href="<?php echo esc_url($url); ?>">
  <div class="ui-mobile-product-card__media">
    <?php if ($image) : ?>
      <img src="<?php echo esc_url($image); ?>" alt="<?php echo esc_attr($title); ?>" loading="lazy" />
    <?php endif; ?>

    <?php if ($badge) : ?>
      <span class="ui-mobile-product-card__badge"><?php echo esc_html($badge); ?></span>
    <?php endif; ?>
  </div>

  <div class="ui-mobile-product-card__body">
    <h3 class="ui-mobile-product-card__title"><?php echo esc_html($title); ?></h3>

    <div class="ui-mobile-product-card__meta">
      <?php if ($price_html) : ?>
        <span class="ui-mobile-product-card__price"><?php echo wp_kses_post($price_html); ?></span>
      <?php endif; ?>

      <?php if ($likes) : ?>
        <span class="ui-mobile-product-card__likes">♡ <?php echo esc_html($likes); ?></span>
      <?php endif; ?>
    </div>

    <div class="ui-mobile-product-card__author">
      <?php if ($avatar) : ?>
        <img src="<?php echo esc_url($avatar); ?>" alt="" />
      <?php else : ?>
        <span class="ui-mobile-product-card__avatarFallback"></span>
      <?php endif; ?>
      <span><?php echo esc_html($author_name); ?></span>
    </div>
  </div>
</a>
