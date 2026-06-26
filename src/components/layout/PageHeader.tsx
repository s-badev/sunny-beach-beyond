import type { PageMeta } from '../../data/pageMeta'
import { useLanguage } from '../../i18n/useLanguage'

type PageHeaderProps = {
  meta: PageMeta
}

export function PageHeader({ meta }: PageHeaderProps) {
  const { language } = useLanguage()

  return (
    <header className="section-shell bg-[color:var(--background)] py-10 sm:py-12">
      <div className="section-inner">
        <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--coral)]">
          {meta.number} - {meta.label[language]}
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
