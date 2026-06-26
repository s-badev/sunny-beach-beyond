import nightlifeImage from '../../assets/section-backgrounds/sunny-beach-nightlife.png'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/useLanguage'

const exploreLinks = [
  { to: '/vibes', label: 'Vibes' },
  { to: '/areas', label: 'Areas' },
  { to: '/beaches', label: 'Beaches' },
  { to: '/nightlife', label: 'Nightlife' },
  { to: '/notes', label: 'Notes' },
]

const toolLinks = [
  { to: '/map', label: 'Interactive Map' },
  { to: '/places', label: 'Places & Experiences' },
  { to: '/routes', label: 'Local Routes' },
  { to: '/archive', label: 'Archive' },
]

const coastNotes = ['Bulgarian Black Sea coast', 'Sunny Beach to Elenite', '42.7 N, 27.7 E']

function FooterLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="group inline-flex w-fit items-center gap-2 rounded-full py-1.5 pr-3 text-sm font-semibold text-white/72 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--turquoise)]"
    >
      <span className="size-1.5 rounded-full bg-[color:var(--turquoise)]/42 transition group-hover:bg-[color:var(--coral)]" aria-hidden="true" />
      {label}
    </Link>
  )
}

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#05233a] px-5 py-16 text-white sm:px-8 sm:py-20 lg:py-24">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-44 saturate-[1.14] contrast-[1.04]"
        style={{ backgroundImage: `url(${nightlifeImage})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-0 bg-[#05233a]/62" aria-hidden="true" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(234,246,242,0.14)_0%,rgba(5,35,58,0.28)_18%,rgba(5,35,58,0.58)_58%,rgba(3,17,31,0.78)_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_16%_0%,rgba(32,199,189,0.28),transparent_24rem),radial-gradient(circle_at_86%_16%,rgba(240,111,97,0.17),transparent_22rem),linear-gradient(115deg,rgba(3,31,49,0.58),rgba(6,59,91,0.22)_48%,rgba(3,31,49,0.62))]" aria-hidden="true" />
      <div className="grain absolute inset-0 z-0 opacity-10" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 z-10 h-20 bg-[linear-gradient(180deg,rgba(234,246,242,0.2),rgba(234,246,242,0))]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[color:var(--turquoise)]/46 to-transparent" aria-hidden="true" />

      <div className="section-inner relative z-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.7fr)_minmax(0,0.7fr)_minmax(0,0.85fr)] lg:gap-12">
          <div className="max-w-xl">
            <p className="w-fit rounded-full border border-white/14 bg-white/8 px-3 py-1.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--coral-soft)]">
              {t('Coastal guide / archive')}
            </p>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Sunny Beach &amp; Beyond
            </h2>
            <p className="mt-5 max-w-lg text-base font-medium leading-8 text-white/72 sm:text-lg">
              {t('A personal digital travel guide for Sunny Beach, Nessebar, Sveti Vlas and Elenite, built around local notes, routes, maps and archive-style memories.')}
            </p>
            <div className="mt-7 rounded-[1.35rem] border border-white/12 bg-white/7 p-4 shadow-[0_22px_60px_rgba(0,0,0,0.18)] backdrop-blur">
              <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/50">{t('Project note')}</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-white/78">
                {t('Built as a calm, practical coastal companion: part local guide, part route planner, part postcard archive.')}
              </p>
            </div>
          </div>

          <nav aria-label={t('Footer explore navigation')}>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/48">{t('Explore')}</p>
            <div className="mt-5 grid gap-1">
              {exploreLinks.map((link) => (
                <FooterLink key={link.to} to={link.to} label={t(link.label)} />
              ))}
            </div>
          </nav>

          <nav aria-label={t('Footer tools navigation')}>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/48">{t('Tools')}</p>
            <div className="mt-5 grid gap-1">
              {toolLinks.map((link) => (
                <FooterLink key={link.to} to={link.to} label={t(link.label)} />
              ))}
            </div>
          </nav>

          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white/48">{t('Coordinates')}</p>
            <div className="mt-5 grid gap-3">
              {coastNotes.map((note) => (
                <p key={note} className="rounded-[1rem] border border-white/10 bg-white/7 px-3.5 py-3 text-sm font-semibold leading-5 text-white/76">
                  {t(note)}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm font-medium text-white/56 sm:flex-row sm:items-center sm:justify-between lg:mt-16">
          <p>{t('Made as a personal digital travel guide and archive project.')}</p>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-white/44">
            Sunny Beach &amp; Beyond / {year}
          </p>
        </div>
      </div>
    </footer>
  )
}
