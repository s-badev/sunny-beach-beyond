type SectionBackgroundProps = {
  image: string
  position?: string
  overlay: string
  className?: string
  imageClassName?: string
}

export function SectionBackground({ image, position = 'center', overlay, className = '', imageClassName = '' }: SectionBackgroundProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`} aria-hidden="true">
      <img src={image} alt="" className={`h-full w-full object-cover ${imageClassName}`} style={{ objectPosition: position }} />
      <div className={`absolute inset-0 ${overlay}`} />
    </div>
  )
}
