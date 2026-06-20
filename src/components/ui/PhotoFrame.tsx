import { Image, type LucideIcon } from 'lucide-react'
import { mediaRegistry } from '../../data/media'
import type { LocalMediaKey, MediaTone } from '../../types'

type PhotoFrameProps = {
  mediaKey?: LocalMediaKey
  tone?: MediaTone
  title: string
  subtitle?: string
  areaLabel?: string
  categoryLabel?: string
  editorialLabel?: string
  alt?: string
  icon?: LucideIcon
  selected?: boolean
  className?: string
  heightClassName?: string
}

const toneClasses: Record<MediaTone, string> = {
  coastal: 'photo-tone-coastal',
  food: 'photo-tone-food',
  cafe: 'photo-tone-cafe',
  nightlife: 'photo-tone-nightlife',
  attraction: 'photo-tone-attraction',
  premium: 'photo-tone-premium',
  budget: 'photo-tone-budget',
  walk: 'photo-tone-walk',
  sea: 'photo-tone-sea',
  sand: 'photo-tone-sand',
  marina: 'photo-tone-marina',
  'old-town': 'photo-tone-old-town',
  night: 'photo-tone-night',
  family: 'photo-tone-family',
  water: 'photo-tone-water',
  calm: 'photo-tone-calm',
}

export function PhotoFrame({
  mediaKey,
  tone: toneOverride,
  title,
  subtitle,
  areaLabel,
  categoryLabel,
  editorialLabel,
  alt,
  icon: Icon = Image,
  selected = false,
  className = '',
  heightClassName = 'min-h-[12rem]',
}: PhotoFrameProps) {
  const media = mediaKey ? mediaRegistry[mediaKey] : undefined
  const tone = toneOverride ?? media?.tone ?? 'coastal'
  const hasImage = Boolean(media?.src)
  const guideLabel = editorialLabel ?? media?.caption ?? categoryLabel ?? 'Coastal guide'

  return (
    <div className={`photo-frame-shell ${toneClasses[tone]} ${heightClassName} ${className}`}>
      {hasImage ? (
        <img src={media?.src} alt={alt ?? media?.alt ?? title} className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-[1.035]" loading="lazy" />
      ) : (
        <div className="photo-frame-fallback absolute inset-0" aria-hidden="true" />
      )}

      <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(7,26,45,0.2),rgba(7,26,45,0.1)_36%,rgba(7,26,45,0.74))]" aria-hidden="true" />

      <div className="relative z-[2] flex h-full min-h-[inherit] flex-col justify-between p-4 text-white">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {categoryLabel && (
              <span className="rounded-full bg-white/78 px-3 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-[color:var(--sea-deep)] shadow-sm">
                {categoryLabel}
              </span>
            )}
            {areaLabel && (
              <span className="rounded-full border border-white/24 bg-white/18 px-3 py-1 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-white/86 backdrop-blur">
                {areaLabel}
              </span>
            )}
          </div>
          <span
            className={`grid size-10 shrink-0 place-items-center rounded-full border border-white/46 backdrop-blur transition ${
              selected ? 'bg-[color:var(--coral)] text-white shadow-coral' : 'bg-white/18 text-white'
            }`}
          >
            <Icon size={18} aria-hidden="true" />
          </span>
        </div>

        <div>
          <p className="w-fit rounded-full border border-white/18 bg-white/16 px-2.5 py-1 font-mono text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-white/82 backdrop-blur">
            {hasImage ? media?.credit ?? guideLabel : guideLabel}
          </p>
          <h3 className="mt-2 font-serif text-2xl font-semibold leading-none text-white">{title}</h3>
          {subtitle && <p className="mt-1.5 text-sm font-semibold leading-5 text-white/78">{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}
