import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from './components/layout/Footer'
import { Nav } from './components/layout/Nav'
import { BackButton } from './components/navigation/BackButton'
import { ScrollToTop } from './components/navigation/ScrollToTop'
import { GuideCommand } from './components/ui/GuideCommand'
import { PlaceDetailDrawer } from './components/ui/PlaceDetailDrawer'
import { areas } from './data/areas'
import { beaches } from './data/beaches'
import { places } from './data/places'
import { routes } from './data/routes'
import { vibes } from './data/vibes'
import { nightlife } from './data/nightlife'
import { guidePlaceToRoutePlace } from './lib/guideSearch'
import { ArchivePage } from './pages/ArchivePage'
import { AreasPage } from './pages/AreasPage'
import { BeachesPage } from './pages/BeachesPage'
import { HomePage } from './pages/HomePage'
import { MapPage } from './pages/MapPage'
import { NightlifePage } from './pages/NightlifePage'
import { NotesPage } from './pages/NotesPage'
import { PlacesPage } from './pages/PlacesPage'
import { RoutesPage } from './pages/RoutesPage'
import { VibesPage } from './pages/VibesPage'
import type { GuidePlace, Place } from './types'

function App() {
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

  function addStop(place: Place) {
    let status = ''

    setSelectedStops((currentStops) => {
      if (currentStops.some((stop) => stop.id === place.id)) {
        status = `${place.name} is already in the route.`
        return currentStops
      }

      const nextStops = [...currentStops, place].slice(-4)
      status =
        nextStops.length === 1
          ? `${place.name} added. Add one more stop to shape the route.`
          : nextStops.length < 4
            ? `${place.name} added. This is becoming a useful coast route.`
            : `${place.name} added. Route keeps the latest four stops.`

      return nextStops
    })

    window.setTimeout(() => setRouteStatus(status), 0)
  }

  function removeStop(placeId: string) {
    let removedName = ''

    setSelectedStops((currentStops) => {
      const removed = currentStops.find((stop) => stop.id === placeId)
      removedName = removed?.name ?? 'Stop'
      return currentStops.filter((stop) => stop.id !== placeId)
    })

    window.setTimeout(() => setRouteStatus(`${removedName} removed from the route.`), 0)
  }

  function clearRoute() {
    setSelectedStops([])
    setRouteStatus('Route cleared. Start again with one strong place.')
  }

  function openGuidePlace(place: GuidePlace) {
    setSelectedGuidePlace(place)
    setIsDetailOpen(true)
    setRouteStatus(`Best match selected: ${place.name}.`)
  }

  function addGuidePlaceToRoute(place: GuidePlace) {
    addStop(guidePlaceToRoutePlace(place))
  }

  return (
    <>
      <ScrollToTop />
      <Nav />
      <BackButton />
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vibes" element={<VibesPage selectedVibe={selectedVibe} onSelectVibe={setSelectedVibe} />} />
          <Route path="/areas" element={<AreasPage selectedArea={selectedArea} onSelectArea={setSelectedArea} />} />
          <Route path="/beaches" element={<BeachesPage selectedBeach={selectedBeach} onSelectBeach={setSelectedBeach} />} />
          <Route path="/nightlife" element={<NightlifePage selectedNightlife={selectedNightlife} onSelectNightlife={setSelectedNightlife} />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route
            path="/map"
            element={
              <MapPage
                selectedMapPlace={selectedMapPlace}
                selectedStops={selectedStops}
                onSelectMapPlace={setSelectedMapPlace}
                onAddStop={addStop}
                onRemoveStop={removeStop}
              />
            }
          />
          <Route path="/places" element={<PlacesPage onOpenPlaceDetail={openGuidePlace} />} />
          <Route path="/routes" element={<RoutesPage selectedRoute={selectedRoute} selectedStops={selectedStops} onSelectRoute={setSelectedRoute} />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
