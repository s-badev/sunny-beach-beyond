import type { ReactNode } from 'react'
import type { PageMeta } from '../../data/pageMeta'
import { useLanguage } from '../../i18n/useLanguage'
import { BackButton } from '../navigation/BackButton'
import { PageHeader } from './PageHeader'

type PageShellProps = {
  meta: PageMeta
  showHeader?: boolean
  children: ReactNode
}

export function PageShell({ meta, showHeader = false, children }: PageShellProps) {
  const { language } = useLanguage()
  const showMobileBack = meta.path !== '/'

  return (
    <div data-page-path={meta.path} data-page-number={meta.number} data-page-label={meta.label[language]}>
      {showHeader && <PageHeader meta={meta} />}
      {showMobileBack && (
        <div className="px-4 pt-2 md:hidden">
          <BackButton variant="inline" />
        </div>
      )}
      {children}
    </div>
  )
}
