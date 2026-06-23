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

const guideSteps = [
  {
    title: { en: 'Choose a page', bg: 'Избери страница' },
    description: {
      en: 'Open only the guide layer you need instead of scrolling through everything.',
      bg: 'Отвори само нужния слой от гида, вместо да скролваш през всичко.',
    },
  },
  {
    title: { en: 'Compare the tradeoffs', bg: 'Сравни компромисите' },
    description: {
      en: 'Each page focuses on timing, transport, crowd level and the best use case.',
      bg: 'Всяка страница гледа време, транспорт, тълпи и най-добра употреба.',
    },
  },
  {
    title: { en: 'Shape a simple plan', bg: 'Оформи прост план' },
    description: {
      en: 'Use the map and routes together when you are ready to connect real stops.',
      bg: 'Използвай картата и маршрутите заедно, когато си готов да свържеш реални спирки.',
    },
  },
]

export function HomePage() {
  const { language } = useLanguage()

  return (
    <>
      <Hero />
      <MotionSection className="section-shell overflow-hidden bg-[linear-gradient(180deg,#eef8f5_0%,#fff8e8_48%,#eaf6f2_100%)] py-12 sm:py-16 lg:py-18">
        <div
          className="pointer-events-none absolute -inset-x-20 -top-32 bottom-[-7rem] z-0 scale-[1.1] bg-cover bg-center opacity-[0.44] blur-[22px] saturate-[1.12] contrast-[1.04]"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(238,248,245,0.5)_0%,rgba(255,248,232,0.58)_42%,rgba(234,246,242,0.82)_100%),radial-gradient(circle_at_18%_18%,rgba(255,248,226,0.28),transparent_20rem),radial-gradient(circle_at_84%_28%,rgba(32,199,189,0.2),transparent_24rem),linear-gradient(105deg,rgba(255,255,255,0.3),rgba(255,255,255,0.06)_52%,rgba(223,246,237,0.34))]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-28 bg-[linear-gradient(180deg,rgba(7,26,45,0.18),rgba(238,248,245,0))]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-[linear-gradient(180deg,rgba(234,246,242,0),rgba(234,246,242,0.92))]" aria-hidden="true" />
        <div className="grain absolute inset-0 opacity-22" aria-hidden="true" />
        <div className="section-inner">
          <motion.div className="grid gap-6 lg:grid-cols-[0.78fr_1fr] lg:items-end" variants={fadeUp}>
            <div>
              <SectionLabel>{language === 'bg' ? 'Начало' : 'Start Here'}</SectionLabel>
              <h2 className="text-balance font-serif text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
                {language === 'bg' ? 'Отвори правилната част от крайбрежието.' : 'Open the right part of the coast.'}
              </h2>
            </div>
            <p className="max-w-3xl text-pretty text-base font-semibold leading-8 text-[color:var(--sea-deep)]/82">
              {language === 'bg'
                ? 'Гидът вече е разделен на фокусирани страници, за да стигаш директно до плажове, нощен живот, карта, маршрути и архив без тежко скролване.'
                : 'The guide is split into focused pages so you can jump straight to beaches, nightlife, maps, routes and archive stories without heavy scrolling.'}
            </p>
          </motion.div>

          <motion.div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3" variants={staggerContainer}>
            {routeCards.map((card) => {
              const Icon = card.icon

              return (
                <motion.div key={card.to} variants={fadeUp}>
                  <Link
                    to={card.to}
                    className="interactive-card active-rail group grid min-h-full grid-cols-[2.75rem_1fr] gap-4 rounded-[1.25rem] border border-white/74 bg-white/82 p-4 shadow-soft backdrop-blur-md hover:border-[color:var(--turquoise)]/42 hover:bg-white/92 sm:p-5"
                  >
                    <span className="grid size-11 place-items-center rounded-full border border-[color:var(--turquoise)]/24 bg-[color:var(--foam)] text-[color:var(--sea-deep)] shadow-sm transition group-hover:bg-[color:var(--turquoise)] group-hover:text-[color:var(--night)]">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[color:var(--coral)]">{card.meta[language]}</span>
                      <span className="mt-1.5 block font-serif text-2xl leading-tight text-[color:var(--ink)]">{card.title[language]}</span>
                      <span className="mt-2 block text-sm font-medium leading-6 text-[color:var(--muted-foreground)]">{card.description[language]}</span>
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div className="mt-8 rounded-[1.6rem] border border-white/76 bg-white/64 p-3 shadow-[0_28px_80px_rgba(9,58,82,0.14)] backdrop-blur-md sm:p-4" variants={fadeUp}>
            <div className="grid gap-3 lg:grid-cols-[0.42fr_1fr] lg:items-stretch">
              <div className="rounded-[1.25rem] border border-[color:var(--border)]/72 bg-[color:var(--sea-deep)] p-5 text-white shadow-soft">
                <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[color:var(--coral-soft)]">
                  {language === 'bg' ? 'Започни оттук' : 'Start with these'}
                </p>
                <h3 className="mt-3 font-serif text-3xl leading-tight text-white">
                  {language === 'bg' ? 'Най-бързите входове в гида.' : 'The fastest ways into the guide.'}
                </h3>
                <p className="mt-3 text-sm font-medium leading-6 text-white/76">
                  {language === 'bg'
                    ? 'Избери според първото решение за деня: плаж, вечер, карта или архивна разходка.'
                    : 'Choose by the first decision of the day: beach, evening, map or archive walk.'}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {quickStarts.map((item) => {
                  const Icon = item.icon

                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="interactive-card group rounded-[1.2rem] border border-white/72 bg-white/78 p-4 shadow-soft backdrop-blur hover:bg-white/92"
                    >
                      <span className="flex items-center justify-between gap-3">
                        <span className="grid size-10 place-items-center rounded-full bg-[color:var(--foam)] text-[color:var(--sea-deep)] transition group-hover:bg-[color:var(--turquoise)] group-hover:text-[color:var(--night)]">
                          <Icon size={18} aria-hidden="true" />
                        </span>
                        <ArrowRight size={16} className="text-[color:var(--coral)] transition group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                      <span className="mt-3 block font-serif text-xl leading-tight text-[color:var(--ink)]">{item.title[language]}</span>
                      <span className="mt-2 block text-sm font-medium leading-6 text-[color:var(--muted-foreground)]">{item.description[language]}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div className="mt-6 grid gap-3 md:grid-cols-3" variants={staggerContainer}>
            {guideSteps.map((step, index) => (
              <motion.div key={step.title.en} variants={fadeUp} className="rounded-[1.2rem] border border-white/74 bg-white/72 p-4 shadow-soft backdrop-blur">
                <span className="grid size-9 place-items-center rounded-full bg-[color:var(--sand)] font-mono text-[0.72rem] font-bold text-[color:var(--ink)]">
                  {index + 1}
                </span>
                <h3 className="mt-3 font-serif text-xl leading-tight text-[color:var(--ink)]">{step.title[language]}</h3>
                <p className="mt-2 text-sm font-medium leading-6 text-[color:var(--muted-foreground)]">{step.description[language]}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </MotionSection>
    </>
  )
}
