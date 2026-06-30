export type MobileProductCardProps = {
  image: string
  title: string
  price?: string
  likes?: string
  authorName?: string
  avatar?: string
  url?: string
  badge?: string
}

export function MobileProductCard({
  image,
  title,
  price,
  likes,
  authorName = 'user_style',
  avatar,
  url = '#',
  badge,
}: MobileProductCardProps) {
  return (
    <a href={url} className="ui-card ui-mobile-product-card">
      <div className="ui-mobile-product-card__media">
        <img src={image} alt={title} loading="lazy" />
        {badge ? <span className="ui-mobile-product-card__badge">{badge}</span> : null}
      </div>
      <div className="ui-mobile-product-card__body">
        <h3 className="ui-mobile-product-card__title">{title}</h3>
        <div className="ui-mobile-product-card__meta">
          {price ? <span className="ui-mobile-product-card__price">{price}</span> : null}
          {likes ? <span className="ui-mobile-product-card__likes">♡ {likes}</span> : null}
        </div>
        <div className="ui-mobile-product-card__author">
          {avatar ? <img src={avatar} alt="" /> : <span className="ui-mobile-product-card__avatarFallback" />}
          <span>{authorName}</span>
        </div>
      </div>
    </a>
  )
}
