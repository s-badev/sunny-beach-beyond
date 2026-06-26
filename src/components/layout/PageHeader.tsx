import type { PageMeta } from '../../data/pageMeta'
import { useLanguage } from '../../i18n/useLanguage'

type PageHeaderProps = {
  meta: PageMeta
  variant?: 'full' | 'compact'
}

export function PageHeader({ meta, variant = 'full' }: PageHeaderProps) {
  const { language } = useLanguage()
  const pageStamp = `${meta.number} — ${meta.label[language]}`

  if (variant === 'compact') {
    return (
      <div className="pointer-events-none absolute inset-x-0 top-5 z-10 hidden px-8 md:block">
        <div className="section-inner">
          <div className="flex items-center gap-4 text-[color:var(--sea-deep)]/58">
            <p className="shrink-0 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em]">
              {pageStamp}
            </p>
            <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(6,59,91,0.22),rgba(6,59,91,0))]" aria-hidden="true" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <header className="section-shell bg-[color:var(--background)] py-10 sm:py-12">
      <div className="section-inner">
        <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--coral)]">
          {pageStamp}
        </p>
        <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
          {meta.title[language]}
        </h1>
        <p className="mt-4 max-w-3xl text-base font-semibold leading-8 text-[color:var(--sea-deep)]/78">
          {meta.intro[language]}
        </p>
      </div>
    </header>
  )
}
