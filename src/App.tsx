import { lazy, Suspense, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from './components/layout/Footer'
import { Nav } from './components/layout/Nav'
import { PageShell } from './components/layout/PageShell'
import { RouteTransition } from './components/layout/RouteTransition'
import { ScrollToTop } from './components/navigation/ScrollToTop'
import { GuideCommand } from './components/ui/GuideCommand'
import { PlaceDetailDrawer } from './components/ui/PlaceDetailDrawer'
import { areas } from './data/areas'
import { beaches } from './data/beaches'
import { pageMeta } from './data/pageMeta'
import { places } from './data/places'
import { routes } from './data/routes'
import { vibes } from './data/vibes'
import { nightlife } from './data/nightlife'
import { useLanguage } from './i18n/useLanguage'
import { guidePlaceToRoutePlace } from './lib/guideSearch'
import type { GuidePlace, Place } from './types'

const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })))
const VibesPage = lazy(() => import('./pages/VibesPage').then((module) => ({ default: module.VibesPage })))
const AreasPage = lazy(() => import('./pages/AreasPage').then((module) => ({ default: module.AreasPage })))
const BeachesPage = lazy(() => import('./pages/BeachesPage').then((module) => ({ default: module.BeachesPage })))
const NightlifePage = lazy(() => import('./pages/NightlifePage').then((module) => ({ default: module.NightlifePage })))
const NotesPage = lazy(() => import('./pages/NotesPage').then((module) => ({ default: module.NotesPage })))
const MapPage = lazy(() => import('./pages/MapPage').then((module) => ({ default: module.MapPage })))
const PlacesPage = lazy(() => import('./pages/PlacesPage').then((module) => ({ default: module.PlacesPage })))
const RoutesPage = lazy(() => import('./pages/RoutesPage').then((module) => ({ default: module.RoutesPage })))
const ArchivePage = lazy(() => import('./pages/ArchivePage').then((module) => ({ default: module.ArchivePage })))

function App() {
  const { language, t } = useLanguage()
  const [selectedVibe, setSelectedVibe] = useState(vibes[0].id)
  const [selectedArea, setSelectedArea] = useState(areas[0].id)
  const [selectedBeach, setSelectedBeach] = useState(beaches[0].id)
  const [selectedNightlife, setSelectedNightlife] = useState(nightlife[0].id)
  const [selectedRoute, setSelectedRoute] = useState(routes[0].id)
  const [selectedMapPlace, setSelectedMapPlace] = useState(places[0].id)
  const [selectedStops, setSelectedStops] = useState<Place[]>([])
  const [selectedGuidePlace, setSelectedGuidePlace] = useState<GuidePlace | null>(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const [routeStatus, setRouteStatus] = useState('')

  function placeStatus(placeName: string, enMessage: string, bgMessage: string) {
    return language === 'bg' ? `${t(placeName)} ${bgMessage}` : `${placeName} ${enMessage}`
  }

  function addStop(place: Place) {
    let status = ''

    setSelectedStops((currentStops) => {
      if (currentStops.some((stop) => stop.id === place.id)) {
        status = placeStatus(place.name, 'is already in the route.', 'вече е в маршрута.')
        return currentStops
      }

      const nextStops = [...currentStops, place].slice(-4)
      status =
        nextStops.length === 1
          ? placeStatus(place.name, 'added. Add one more stop to shape the route.', 'е добавено. Добави още една спирка, за да оформиш маршрута.')
          : nextStops.length < 4
            ? placeStatus(place.name, 'added. This is becoming a useful coast route.', 'е добавено. Това вече става полезен крайбрежен маршрут.')
            : placeStatus(place.name, 'added. Route keeps the latest four stops.', 'е добавено. Маршрутът пази последните четири спирки.')

      return nextStops
    })

    window.setTimeout(() => setRouteStatus(status), 0)
  }

  function removeStop(placeId: string) {
    let removedName = ''

    setSelectedStops((currentStops) => {
      const removed = currentStops.find((stop) => stop.id === placeId)
      removedName = removed?.name ?? t('Stop')
      return currentStops.filter((stop) => stop.id !== placeId)
    })

    const status = language === 'bg' ? `${t(removedName)} е премахнато от маршрута.` : `${removedName} removed from the route.`
    window.setTimeout(() => setRouteStatus(status), 0)
  }

  function clearRoute() {
    setSelectedStops([])
    setRouteStatus(t('Route cleared. Start again with one strong place.'))
  }

  function openGuidePlace(place: GuidePlace) {
    setSelectedGuidePlace(place)
    setIsDetailOpen(true)
    setRouteStatus(language === 'bg' ? `Избрано най-добро съвпадение: ${t(place.name)}.` : `Best match selected: ${place.name}.`)
  }

  function addGuidePlaceToRoute(place: GuidePlace) {
    addStop(guidePlaceToRoutePlace(place))
  }

  return (
    <>
      <ScrollToTop />
      <Nav />
      <GuideCommand
        selectedStops={selectedStops}
        routeStatus={routeStatus}
        onOpenPlace={openGuidePlace}
        onAddPlaceToRoute={addGuidePlaceToRoute}
        onRemoveStop={removeStop}
        onClearRoute={clearRoute}
      />
      <PlaceDetailDrawer
        place={selectedGuidePlace}
        isOpen={isDetailOpen}
        selectedStops={selectedStops}
        routeStatus={routeStatus}
        onClose={() => setIsDetailOpen(false)}
        onAddToRoute={addGuidePlaceToRoute}
      />
      <main>
        <RouteTransition>
          <Suspense fallback={<RouteLoading />}>
            <Routes>
              <Route
                path="/"
                element={
                  <PageShell meta={pageMeta.home}>
                    <HomePage />
                  </PageShell>
                }
              />
              <Route
                path="/vibes"
                element={
                  <PageShell meta={pageMeta.vibes}>
                    <VibesPage selectedVibe={selectedVibe} onSelectVibe={setSelectedVibe} />
                  </PageShell>
                }
              />
              <Route
                path="/areas"
                element={
                  <PageShell meta={pageMeta.areas}>
                    <AreasPage selectedArea={selectedArea} onSelectArea={setSelectedArea} />
                  </PageShell>
                }
              />
              <Route
                path="/beaches"
                element={
                  <PageShell meta={pageMeta.beaches}>
                    <BeachesPage selectedBeach={selectedBeach} onSelectBeach={setSelectedBeach} />
                  </PageShell>
                }
              />
              <Route
                path="/nightlife"
                element={
                  <PageShell meta={pageMeta.nightlife}>
                    <NightlifePage selectedNightlife={selectedNightlife} onSelectNightlife={setSelectedNightlife} />
                  </PageShell>
                }
              />
              <Route
                path="/notes"
                element={
                  <PageShell meta={pageMeta.notes}>
                    <NotesPage />
                  </PageShell>
                }
              />
              <Route
                path="/map"
                element={
                  <PageShell meta={pageMeta.map}>
                    <MapPage
                      selectedMapPlace={selectedMapPlace}
                      selectedStops={selectedStops}
                      onSelectMapPlace={setSelectedMapPlace}
                      onAddStop={addStop}
                      onRemoveStop={removeStop}
                    />
                  </PageShell>
                }
              />
              <Route
                path="/places"
                element={
                  <PageShell meta={pageMeta.places}>
                    <PlacesPage onOpenPlaceDetail={openGuidePlace} />
                  </PageShell>
                }
              />
              <Route
                path="/routes"
                element={
                  <PageShell meta={pageMeta.routes}>
                    <RoutesPage selectedRoute={selectedRoute} selectedStops={selectedStops} onSelectRoute={setSelectedRoute} />
                  </PageShell>
                }
              />
              <Route
                path="/archive"
                element={
                  <PageShell meta={pageMeta.archive}>
                    <ArchivePage />
                  </PageShell>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </RouteTransition>
      </main>
      <Footer />
    </>
  )
}

function RouteLoading() {
  const { t } = useLanguage()

  return (
    <div className="section-shell grid min-h-[40vh] place-items-center bg-[color:var(--background)] px-5 py-20">
      <p className="rounded-full border border-[color:var(--border)] bg-white/80 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--sea-deep)] shadow-soft">
        {t('Loading guide section...')}
      </p>
    </div>
  )
}

export default App
