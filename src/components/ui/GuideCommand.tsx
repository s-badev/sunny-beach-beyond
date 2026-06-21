import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check, Compass, MapPinned, Plus, Route, Search, Trash2, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { getPlacesByIntent, guideQuickActions, searchGuideItems, type GuideIntentId } from '../../lib/guideSearch'
import type { GuidePlace, Place } from '../../types'

type GuideCommandProps = {
  selectedStops: Place[]
  routeStatus: string
  onOpenPlace: (place: GuidePlace) => void
  onAddPlaceToRoute: (place: GuidePlace) => void
  onRemoveStop: (placeId: string) => void
  onClearRoute: () => void
}

function routeMessage(count: number) {
  if (count === 0) return 'Start with one place.'
  if (count === 1) return 'Add one more place to shape the route.'
  if (count <= 4) return 'Good simple day route.'
  return 'Too many stops for a relaxed coastal plan.'
}

export function GuideCommand({ selectedStops, routeStatus, onOpenPlace, onAddPlaceToRoute, onRemoveStop, onClearRoute }: GuideCommandProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIntent, setActiveIntent] = useState<GuideIntentId | null>(null)

  const results = useMemo(() => {
    if (activeIntent) return getPlacesByIntent(activeIntent, 6)
    return searchGuideItems(query, 6)
  }, [activeIntent, query])

  const activeAction = activeIntent ? guideQuickActions.find((action) => action.id === activeIntent) : undefined

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setIsOpen(true)
      }

      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  function chooseIntent(intentId: GuideIntentId) {
    const action = guideQuickActions.find((item) => item.id === intentId)
    setActiveIntent(intentId)
    setQuery(action?.query ?? '')
  }

  function updateQuery(value: string) {
    setQuery(value)
    setActiveIntent(null)
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-40 px-3 py-4 sm:px-5 sm:py-8">
            <motion.button
              type="button"
              aria-label="Close guide search"
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[color:var(--night)]/38 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Guide search"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="relative mx-auto flex max-h-[calc(100vh-2rem)] w-full max-w-4xl flex-col overflow-hidden rounded-[1.65rem] border border-white/72 bg-[color:var(--background)] shadow-[0_28px_100px_rgba(7,26,45,0.34)] sm:max-h-[calc(100vh-4rem)]"
            >
              <div className="border-b border-[color:var(--border)]/70 bg-white/78 p-4 backdrop-blur sm:p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--coral)]">
                      <Compass size={14} aria-hidden="true" />
                      Ask the guide
                    </p>
                    <h2 className="mt-2 font-serif text-2xl leading-tight text-[color:var(--ink)] sm:text-3xl">
                      Find a useful coast move.
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="interactive-control shrink-0 rounded-full border border-[color:var(--border)] bg-white p-2 text-[color:var(--sea-deep)] hover:bg-[color:var(--foam)]"
                    aria-label="Close guide search"
                  >
                    <X size={18} aria-hidden="true" />
                  </button>
                </div>

                <label className="mt-4 flex min-w-0 items-center gap-3 rounded-[1.15rem] border border-[color:var(--turquoise)]/28 bg-[color:var(--foam)]/72 px-3.5 py-3 text-[color:var(--sea-deep)]">
                  <Search size={18} aria-hidden="true" />
                  <span className="sr-only">Search Sunny Beach guide</span>
                  <input
                    value={query}
                    onChange={(event) => updateQuery(event.target.value)}
                    placeholder="Try cheap food, quiet family, party night..."
                    className="min-w-0 flex-1 bg-transparent text-base font-semibold text-[color:var(--ink)] outline-none placeholder:text-[color:var(--muted-foreground)]"
                    autoFocus
                  />
                </label>

                <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Quick guide intents">
                  {guideQuickActions.map((action) => (
                    <button
                      key={action.id}
                      type="button"
                      onClick={() => chooseIntent(action.id)}
                      aria-pressed={activeIntent === action.id}
                      className={`interactive-control shrink-0 rounded-full border px-3 py-2 text-sm font-bold ${
                        activeIntent === action.id
                          ? 'border-[color:var(--sea-deep)] bg-[color:var(--sea-deep)] text-white shadow-glow'
                          : 'border-[color:var(--border)] bg-white/80 text-[color:var(--sea-deep)] hover:border-[color:var(--turquoise)] hover:bg-white'
                      }`}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-5">
                <div className="rounded-[1.15rem] border border-[color:var(--border)]/70 bg-white/72 p-3">
                  <p className="text-sm font-semibold leading-6 text-[color:var(--sea-deep)]" aria-live="polite">
                    {activeAction
                      ? `Showing ${results.length} options for ${activeAction.label.toLowerCase()}. ${activeAction.description}`
                      : results.length > 0
                        ? `Showing ${results.length} local matches.`
                        : 'No exact match yet. Try family, dinner, quiet, budget or party.'}
                  </p>
                </div>

                <div className="mt-4 grid gap-3">
                  {results.map((result, index) => {
                    const isAdded = selectedStops.some((stop) => stop.id === `guide-${result.place.id}`)

                    return (
                      <article key={result.place.id} className="rounded-[1.2rem] border border-[color:var(--border)]/72 bg-white/86 p-4 shadow-soft">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--coral)]">
                              {index === 0 ? 'Best match' : 'Guide result'}
                            </p>
                            <h3 className="mt-1 font-serif text-xl leading-tight text-[color:var(--ink)]">{result.place.name}</h3>
                            <p className="mt-1 text-sm font-semibold leading-5 text-[color:var(--sea-deep)]">{result.reason}</p>
                          </div>
                          <span className="rounded-full bg-[color:var(--foam)] px-2.5 py-1 text-[0.68rem] font-bold text-[color:var(--sea-deep)]">{result.place.area}</span>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">{result.place.bestFor}</p>
                        <p className="mt-2 rounded-[0.95rem] border border-[color:var(--border)]/70 bg-[color:var(--background)]/70 px-3 py-2 text-xs font-semibold leading-5 text-[color:var(--ink)]">
                          Next move: {result.nextMove}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              onOpenPlace(result.place)
                              setIsOpen(false)
                            }}
                            className="interactive-control inline-flex items-center gap-2 rounded-full bg-[color:var(--sea-deep)] px-3 py-2 text-xs font-bold text-white hover:bg-[color:var(--sea)]"
                          >
                            Open detail
                            <ArrowRight size={13} aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            onClick={() => onAddPlaceToRoute(result.place)}
                            className={`interactive-control inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-bold ${
                              isAdded ? 'bg-[color:var(--turquoise)]/24 text-[color:var(--sea-deep)]' : 'bg-[color:var(--coral)] text-white shadow-coral'
                            }`}
                          >
                            {isAdded ? <Check size={13} aria-hidden="true" /> : <Plus size={13} aria-hidden="true" />}
                            {isAdded ? 'In route' : 'Add to route'}
                          </button>
                        </div>
                      </article>
                    )
                  })}
                </div>
              </div>

              <div className="border-t border-[color:var(--border)]/70 bg-white/82 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <p className="inline-flex items-center gap-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)]/62">
                      <Route size={14} aria-hidden="true" />
                      Route plan / {selectedStops.length} stops
                    </p>
                    <p className="mt-1 text-sm font-bold leading-5 text-[color:var(--ink)]">{routeMessage(selectedStops.length)}</p>
                    {routeStatus && <p className="mt-1 text-xs font-semibold leading-5 text-[color:var(--sea-deep)]">{routeStatus}</p>}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a href="#map" onClick={() => setIsOpen(false)} className="interactive-control inline-flex items-center gap-2 rounded-full bg-[color:var(--sea-deep)] px-3 py-2 text-xs font-bold text-white hover:bg-[color:var(--sea)]">
                      <MapPinned size={13} aria-hidden="true" />
                      Map
                    </a>
                    <a href="#routes" onClick={() => setIsOpen(false)} className="interactive-control inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-3 py-2 text-xs font-bold text-[color:var(--sea-deep)] hover:bg-[color:var(--foam)]">
                      <Route size={13} aria-hidden="true" />
                      Routes
                    </a>
                    {selectedStops.length > 0 && (
                      <button type="button" onClick={onClearRoute} className="interactive-control inline-flex items-center gap-2 rounded-full border border-[color:var(--coral)]/22 bg-[color:var(--coral-soft)]/32 px-3 py-2 text-xs font-bold text-[color:var(--ink)] hover:bg-[color:var(--coral-soft)]">
                        <Trash2 size={13} aria-hidden="true" />
                        Clear
                      </button>
                    )}
                  </div>
                </div>
                {selectedStops.length > 0 && (
                  <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {selectedStops.map((stop, index) => (
                      <div key={stop.id} className="flex shrink-0 items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-2.5 py-1.5 text-xs font-bold text-[color:var(--ink)]">
                        <span className="grid size-5 place-items-center rounded-full bg-[color:var(--sea-deep)] font-mono text-[0.6rem] text-white">{index + 1}</span>
                        <span className="max-w-[9rem] truncate">{stop.name}</span>
                        <button type="button" onClick={() => onRemoveStop(stop.id)} className="interactive-control rounded-full p-1 text-[color:var(--muted-foreground)] hover:bg-[color:var(--coral-soft)] hover:text-[color:var(--ink)]" aria-label={`Remove ${stop.name}`}>
                          <X size={12} aria-hidden="true" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        className="interactive-control fixed bottom-4 right-4 z-30 inline-flex items-center gap-2 rounded-full border border-white/70 bg-[color:var(--sea-deep)] px-4 py-3 text-sm font-extrabold text-white shadow-[0_18px_50px_rgba(7,26,45,0.24)] backdrop-blur hover:bg-[color:var(--sea)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--turquoise)] sm:bottom-5 sm:right-5"
      >
        <Search size={17} aria-hidden="true" />
        Guide
        {selectedStops.length > 0 && <span className="rounded-full bg-white/18 px-2 py-0.5 font-mono text-[0.65rem]">{selectedStops.length}</span>}
      </button>
    </>
  )
}
