import { motion } from 'framer-motion'
import {
  Archive,
  ArrowRight,
  BookOpen,
  Camera,
  Compass,
  MapPinned,
  Moon,
  Route,
  Sparkles,
  Umbrella,
  Waves,
  type LucideIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/sunny-beach-hero.png'
import archiveImage from '../assets/section-backgrounds/sunny-beach-archive.png'
import beachImage from '../assets/section-backgrounds/sunny-beach-beachfront.png'
import dayPanoramaImage from '../assets/section-backgrounds/sunny-beach-day-panorama.png'
import nightlifeImage from '../assets/section-backgrounds/sunny-beach-nightlife.png'
import vlasMarinaImage from '../assets/section-backgrounds/vlas-marina.png'
import { Hero } from '../components/sections/Hero'
import { fadeUp, MotionSection, staggerContainer } from '../components/ui/motion'
import { SectionLabel } from '../components/ui/SectionLabel'
import { useLanguage } from '../i18n/useLanguage'

type LocalizedText = {
  en: string
  bg: string
}

type HomeRouteCard = {
  to: string
  title: LocalizedText
  description: LocalizedText
  meta: LocalizedText
  icon: LucideIcon
}

const routeCards: HomeRouteCard[] = [
  {
    to: '/vibes',
    title: { en: 'Vibes', bg: 'Настроения' },
    description: {
      en: 'Choose a coastal mood and turn it into an area, beach, route and timing.',
      bg: 'Избери крайбрежно настроение и го превърни в зона, плаж, маршрут и време.',
    },
    meta: { en: 'Mood compass', bg: 'Компас за настроение' },
    icon: Sparkles,
  },
  {
    to: '/areas',
    title: { en: 'Areas', bg: 'Зони' },
    description: {
      en: 'Compare Sunny Beach, Nessebar, Sveti Vlas and Elenite before choosing your base.',
      bg: 'Сравни Слънчев бряг, Несебър, Свети Влас и Елените преди да избереш база.',
    },
    meta: { en: 'Where to stay', bg: 'Къде да отседнеш' },
    icon: Compass,
  },
  {
    to: '/beaches',
    title: { en: 'Beaches', bg: 'Плажове' },
    description: {
      en: 'Find the right shoreline by crowd, access, calm, family fit and after-beach plan.',
      bg: 'Намери правилния плаж според тълпи, достъп, спокойствие, семейства и план след плажа.',
    },
    meta: { en: 'Beach atlas', bg: 'Плажен атлас' },
    icon: Umbrella,
  },
  {
    to: '/nightlife',
    title: { en: 'Nightlife', bg: 'Нощен живот' },
    description: {
      en: 'Plan the evening by mood, noise, transport and how you want the night to end.',
      bg: 'Планирай вечерта според настроение, шум, транспорт и финал на нощта.',
    },
    meta: { en: 'After dark', bg: 'След залез' },
    icon: Moon,
  },
  {
    to: '/notes',
    title: { en: 'Notes', bg: 'Бележки' },
    description: {
      en: 'Use practical local rules for zones, timing, crowds, transport and quiet nights.',
      bg: 'Използвай практични локални правила за зони, време, тълпи, транспорт и тихи нощи.',
    },
    meta: { en: 'Field notes', bg: 'Локални бележки' },
    icon: BookOpen,
  },
  {
    to: '/map',
    title: { en: 'Map', bg: 'Карта' },
    description: {
      en: 'Filter coastal places, save stops and sketch a simple route across the resort area.',
      bg: 'Филтрирай места, запази спирки и очертай прост маршрут по крайбрежието.',
    },
    meta: { en: 'Planning tool', bg: 'Инструмент за план' },
    icon: MapPinned,
  },
  {
    to: '/places',
    title: { en: 'Places', bg: 'Места' },
    description: {
      en: 'Browse restaurants, viewpoints, walks, marina stops and nearby experiences.',
      bg: 'Разгледай ресторанти, гледки, разходки, марина спирки и близки преживявания.',
    },
    meta: { en: 'Experience finder', bg: 'Търсач на места' },
    icon: Camera,
  },
  {
    to: '/routes',
    title: { en: 'Routes', bg: 'Маршрути' },
    description: {
      en: 'Pick a route shape for beach days, party nights, family plans or sunset dinners.',
      bg: 'Избери маршрут за плаж, парти вечер, семеен ден или залезна вечеря.',
    },
    meta: { en: 'Itinerary lens', bg: 'Маршрутен прочит' },
    icon: Route,
  },
  {
    to: '/archive',
    title: { en: 'Archive', bg: 'Архив' },
    description: {
      en: 'Trace the coast from planned resort and postcards to today’s layered summer map.',
      bg: 'Проследи крайбрежието от планиран курорт и картички до днешната лятна карта.',
    },
    meta: { en: 'Then and now', bg: 'Тогава и сега' },
    icon: Archive,
  },
]

const quickStarts = [
  {
    to: '/beaches',
    title: { en: 'Find the right beach', bg: 'Намери правилния плаж' },
    description: {
      en: 'Start here when the day depends on calm, crowd level, access and shade.',
      bg: 'Започни оттук, ако денят зависи от спокойствие, тълпи, достъп и сянка.',
    },
    icon: Waves,
  },
  {
    to: '/nightlife',
    title: { en: 'Plan a night out', bg: 'Планирай вечер навън' },
    description: {
      en: 'Choose between beach bars, clubs, live music, cocktails and late food.',
      bg: 'Избери между плажни барове, клубове, музика, коктейли и късна храна.',
    },
    icon: Moon,
  },
  {
    to: '/map',
    title: { en: 'Open the interactive map', bg: 'Отвори интерактивната карта' },
    description: {
      en: 'Filter places and keep up to four stops for a lightweight route sketch.',
      bg: 'Филтрирай места и запази до четири спирки за лек маршрут.',
    },
    icon: MapPinned,
  },
  {
    to: '/archive',
    title: { en: 'Explore the archive', bg: 'Разгледай архива' },
    description: {
      en: 'See how Sunny Beach shifted from postcard resort to layered coast.',
      bg: 'Виж как Слънчев бряг се променя от курортна картичка до многослойно крайбрежие.',
    },
    icon: Archive,
  },
]

const entryImages: Partial<Record<string, string>> = {
  '/vibes': dayPanoramaImage,
  '/areas': vlasMarinaImage,
  '/beaches': beachImage,
  '/nightlife': nightlifeImage,
  '/archive': archiveImage,
}

const primaryEntryRoutes = new Set(['/vibes', '/areas', '/beaches'])

export function HomePage() {
  const { language } = useLanguage()
  const primaryCards = routeCards.filter((card) => primaryEntryRoutes.has(card.to))
  const secondaryCards = routeCards.filter((card) => !primaryEntryRoutes.has(card.to))

  return (
    <>
      <Hero />
      <MotionSection data-no-translate className="section-shell overflow-hidden bg-[linear-gradient(180deg,#eef8f5_0%,#fff8e8_46%,#f5ecda_100%)] py-12 sm:py-16 lg:py-20">
        <div
          className="pointer-events-none absolute -inset-x-12 -top-24 h-[28rem] z-0 bg-cover bg-center opacity-[0.18] saturate-[0.95] contrast-[0.96]"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(238,248,245,0.74)_0%,rgba(255,248,232,0.86)_38%,rgba(245,236,218,0.94)_100%),linear-gradient(90deg,rgba(6,59,91,0.055)_0_1px,transparent_1px),linear-gradient(rgba(114,88,61,0.05)_0_1px,transparent_1px)] bg-[length:auto,34px_100%,100%_30px]" aria-hidden="true" />
        <div className="grain absolute inset-0 opacity-14" aria-hidden="true" />
        <div className="section-inner">
          <motion.div className="grid gap-7 border-b border-[color:var(--sea-deep)]/16 pb-9 lg:grid-cols-[0.9fr_0.75fr] lg:items-end lg:pb-12" variants={fadeUp}>
            <div className="max-w-4xl">
              <SectionLabel>{language === 'bg' ? 'Начало' : 'Start Here'}</SectionLabel>
              <h2 className="mt-4 text-balance font-serif text-4xl font-semibold leading-[1.03] text-[color:var(--ink)] sm:text-5xl lg:text-6xl">
                {language === 'bg' ? 'Личен вход към българското Черноморие.' : 'A personal entrance to the Bulgarian coast.'}
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-lg font-semibold leading-8 text-[color:var(--sea-deep)]/84">
                {language === 'bg'
                  ? 'Отвори правилната част от крайбрежието според деня, настроението и маршрута.'
                  : 'Open the right part of the coast for the day, mood and route you need.'}
              </p>
            </div>
            <p className="max-w-2xl text-pretty text-base font-medium leading-8 text-[color:var(--muted-foreground)] lg:justify-self-end">
              {language === 'bg'
                ? 'Sunny Beach & Beyond събира Слънчев бряг, Несебър, Свети Влас и Елените като практичен, визуален и малко архивен пътеводител - не като безкраен туристически каталог.'
                : 'Sunny Beach & Beyond reads Sunny Beach, Nessebar, Sveti Vlas and Elenite as one practical, visual and slightly archival guide - not an endless tourism catalogue.'}
            </p>
          </motion.div>

          <motion.div className="mt-9 grid gap-4 md:grid-cols-3" variants={staggerContainer}>
            {primaryCards.map((card) => {
              const Icon = card.icon
              const image = entryImages[card.to]

              return (
                <motion.div key={card.to} variants={fadeUp}>
                  <Link
                    to={card.to}
                    className="interactive-card group flex min-h-full flex-col overflow-hidden rounded-lg border border-[color:var(--sea-deep)]/14 bg-[color:var(--paper-soft)] shadow-[0_16px_38px_rgba(73,52,31,0.08)] hover:border-[color:var(--sea-deep)]/28"
                  >
                    <span className="relative block aspect-[16/9] w-full overflow-hidden bg-[color:var(--sea-deep)]">
                      {image ? (
                        <img
                          src={image}
                          alt=""
                          className="h-full w-full object-cover opacity-82 saturate-[0.92] transition duration-500 group-hover:scale-[1.035]"
                          loading="lazy"
                        />
                      ) : null}
                      <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,45,0.08),rgba(7,26,45,0.58))]" aria-hidden="true" />
                      <span className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-white">
                        <span className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.14em] text-white/74">{card.meta[language]}</span>
                        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/28 bg-white/12 text-white backdrop-blur-sm">
                          <Icon size={17} aria-hidden="true" />
                        </span>
                      </span>
                    </span>
                    <span className="flex flex-1 flex-col p-5 sm:p-6">
                      <span className="block font-serif text-3xl leading-tight text-[color:var(--ink)]">{card.title[language]}</span>
                      <span className="mt-3 block text-sm font-medium leading-6 text-[color:var(--muted-foreground)]">{card.description[language]}</span>
                      <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-[color:var(--sea-deep)]">
                        {language === 'bg' ? 'Отвори секцията' : 'Open section'}
                        <ArrowRight size={15} className="transition group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" variants={staggerContainer}>
            {secondaryCards.map((card) => {
              const Icon = card.icon
              const image = entryImages[card.to]

              return (
                <motion.div key={card.to} variants={fadeUp}>
                  <Link
                    to={card.to}
                    className="interactive-card group grid min-h-full gap-4 rounded-lg border border-[color:var(--sea-deep)]/12 bg-[color:var(--paper-soft)]/90 p-4 shadow-[0_12px_28px_rgba(73,52,31,0.06)] hover:border-[color:var(--sea-deep)]/26 sm:grid-cols-[5.5rem_1fr] sm:p-5"
                  >
                    <span className="relative block h-24 overflow-hidden rounded-md border border-[color:var(--sea-deep)]/10 bg-[color:var(--foam)] sm:h-full">
                      {image ? (
                        <span
                          className="absolute inset-0 bg-cover bg-center opacity-76 saturate-[0.88] transition duration-500 group-hover:scale-[1.04]"
                          style={{ backgroundImage: `url(${image})` }}
                          aria-hidden="true"
                        />
                      ) : (
                        <span className="absolute inset-0 bg-[linear-gradient(135deg,var(--foam),var(--paper),var(--sand))]" aria-hidden="true" />
                      )}
                      <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,59,91,0.14),rgba(255,248,232,0.2))]" aria-hidden="true" />
                      <span className="absolute left-3 top-3 grid size-8 place-items-center rounded-full bg-white/78 text-[color:var(--sea-deep)]">
                        <Icon size={16} aria-hidden="true" />
                      </span>
                    </span>
                    <span className="min-w-0">
                      <span className="font-mono text-[0.64rem] font-bold uppercase tracking-[0.13em] text-[color:var(--sand-deep)]">{card.meta[language]}</span>
                      <span className="mt-1 block font-serif text-2xl leading-tight text-[color:var(--ink)]">{card.title[language]}</span>
                      <span className="mt-2 block text-sm font-medium leading-6 text-[color:var(--muted-foreground)]">{card.description[language]}</span>
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div className="mt-9 overflow-hidden rounded-lg border border-[color:var(--sea-deep)]/14 bg-[color:var(--sea-deep)] text-white shadow-[0_18px_44px_rgba(7,26,45,0.16)]" variants={fadeUp}>
            <div className="grid lg:grid-cols-[0.78fr_1fr]">
              <div className="relative min-h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-76 saturate-[0.86] contrast-[0.96]"
                  style={{ backgroundImage: `url(${dayPanoramaImage})` }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(3,17,31,0.72),rgba(3,17,31,0.16))]" aria-hidden="true" />
                <div className="absolute inset-x-5 bottom-5">
                  <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[color:var(--coral-soft)]">
                    {language === 'bg' ? 'Започни оттук' : 'Start with these'}
                  </p>
                  <h3 className="mt-3 max-w-md font-serif text-3xl leading-tight text-white sm:text-4xl">
                    {language === 'bg' ? 'Четири бързи входа според деня.' : 'Four quick entries for the day.'}
                  </h3>
                </div>
              </div>
              <div className="grid gap-px bg-white/10 p-px sm:grid-cols-2">
                {quickStarts.map((item) => {
                  const Icon = item.icon

                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="group bg-[#082b42] p-5 transition-colors hover:bg-[#0a354e]"
                    >
                      <span className="flex items-center justify-between gap-4">
                        <span className="grid size-10 place-items-center rounded-full border border-white/14 bg-white/8 text-[color:var(--turquoise)]">
                          <Icon size={18} aria-hidden="true" />
                        </span>
                        <ArrowRight size={16} className="text-white/58 transition group-hover:translate-x-1 group-hover:text-white" aria-hidden="true" />
                      </span>
                      <span className="mt-4 block font-serif text-xl leading-tight text-white">{item.title[language]}</span>
                      <span className="mt-2 block text-sm font-medium leading-6 text-white/68">{item.description[language]}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </MotionSection>
    </>
  )
}
