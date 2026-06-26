import { ArrowLeft } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../i18n/useLanguage'

type BackButtonProps = {
  variant?: 'inline' | 'pill'
}

export function BackButton({ variant = 'pill' }: BackButtonProps) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { language } = useLanguage()
  const label = language === 'bg' ? 'Назад' : 'Back'

  if (pathname === '/') return null

  function handleBack() {
    if (window.history.length > 1) {
      navigate(-1)
      return
    }

    navigate('/')
  }

  if (variant === 'inline') {
    return (
      <button
        type="button"
        onClick={handleBack}
        aria-label={label}
        className="interactive-control group inline-flex min-h-9 items-center gap-1.5 rounded-full border border-[color:var(--border)]/72 bg-white/72 px-3 py-1.5 text-sm font-semibold text-[color:var(--sea-deep)] transition-colors duration-200 hover:border-transparent hover:bg-transparent hover:text-[color:var(--night)] hover:underline hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--turquoise)] sm:min-h-0 sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0"
      >
        <ArrowLeft className="transition-transform duration-200 group-hover:-translate-x-0.5" size={15} aria-hidden="true" />
        <span data-no-translate>{label}</span>
      </button>
    )
  }

  return (
    <div className="relative z-20 px-4 pt-3 sm:px-8">
      <div className="mx-auto flex max-w-7xl">
        <button
          type="button"
          onClick={handleBack}
          aria-label={label}
          className="interactive-control group inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/90 px-4.5 py-2.5 text-sm font-extrabold text-[color:var(--sea-deep)] shadow-[0_16px_42px_rgba(9,58,82,0.16)] backdrop-blur-md transition-all duration-200 ease-out hover:!translate-y-[-1px] hover:!scale-105 hover:border-[color:var(--sea-deep)] hover:bg-[color:var(--sea-deep)] hover:!text-white hover:shadow-[0_20px_52px_rgba(9,58,82,0.24)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--turquoise)]"
        >
          <ArrowLeft className="transition-colors duration-200 group-hover:text-white" size={17} aria-hidden="true" />
          <span data-no-translate>{label}</span>
        </button>
      </div>
    </div>
  )
}
