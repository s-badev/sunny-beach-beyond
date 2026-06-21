import { useState } from 'react'
import { Footer } from './components/layout/Footer'
import { Nav } from './components/layout/Nav'
import { Areas } from './components/sections/Areas'
import { Beaches } from './components/sections/Beaches'
import { Hero } from './components/sections/Hero'
import { LocalNotes } from './components/sections/LocalNotes'
import { LocalRoutes } from './components/sections/LocalRoutes'
import { MapPreview } from './components/sections/MapPreview'
import { Nightlife } from './components/sections/Nightlife'
import { PlacesExperiences } from './components/sections/PlacesExperiences'
import { ThenNow } from './components/sections/ThenNow'
import { Vibes } from './components/sections/Vibes'
import { GuideCommand } from './components/ui/GuideCommand'
import { PlaceDetailDrawer } from './components/ui/PlaceDetailDrawer'
import { areas } from './data/areas'
import { beaches } from './data/beaches'
import { places } from './data/places'
import { routes } from './data/routes'
import { vibes } from './data/vibes'
import { nightlife } from './data/nightlife'
import { guidePlaceToRoutePlace } from './lib/guideSearch'
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
        <Hero />
        <Vibes selectedVibe={selectedVibe} onSelectVibe={setSelectedVibe} />
        <Areas selectedArea={selectedArea} onSelectArea={setSelectedArea} />
        <Beaches selectedBeach={selectedBeach} onSelectBeach={setSelectedBeach} />
        <Nightlife selectedNightlife={selectedNightlife} onSelectNightlife={setSelectedNightlife} />
        <LocalNotes />
        <MapPreview selectedMapPlace={selectedMapPlace} selectedStops={selectedStops} onSelectMapPlace={setSelectedMapPlace} onAddStop={addStop} onRemoveStop={removeStop} />
        <PlacesExperiences onOpenPlaceDetail={openGuidePlace} />
        <LocalRoutes selectedRoute={selectedRoute} selectedStops={selectedStops} onSelectRoute={setSelectedRoute} />
        <ThenNow />
      </main>
      <Footer />
    </>
  )
}

export default App
