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
import { areas } from './data/areas'
import { beaches } from './data/beaches'
import { places } from './data/places'
import { routes } from './data/routes'
import { vibes } from './data/vibes'
import { nightlife } from './data/nightlife'
import type { Place } from './types'

function App() {
  const [selectedVibe, setSelectedVibe] = useState(vibes[0].id)
  const [selectedArea, setSelectedArea] = useState(areas[0].id)
  const [selectedBeach, setSelectedBeach] = useState(beaches[0].id)
  const [selectedNightlife, setSelectedNightlife] = useState(nightlife[0].id)
  const [selectedRoute, setSelectedRoute] = useState(routes[0].id)
  const [selectedMapPlace, setSelectedMapPlace] = useState(places[0].id)
  const [selectedStops, setSelectedStops] = useState<Place[]>([])

  function addStop(place: Place) {
    setSelectedStops((currentStops) => {
      if (currentStops.some((stop) => stop.id === place.id)) return currentStops

      return [...currentStops, place].slice(-4)
    })
  }

  function removeStop(placeId: string) {
    setSelectedStops((currentStops) => currentStops.filter((stop) => stop.id !== placeId))
  }

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Vibes selectedVibe={selectedVibe} onSelectVibe={setSelectedVibe} />
        <Areas selectedArea={selectedArea} onSelectArea={setSelectedArea} />
        <Beaches selectedBeach={selectedBeach} onSelectBeach={setSelectedBeach} />
        <Nightlife selectedNightlife={selectedNightlife} onSelectNightlife={setSelectedNightlife} />
        <LocalNotes />
        <MapPreview selectedMapPlace={selectedMapPlace} selectedStops={selectedStops} onSelectMapPlace={setSelectedMapPlace} onAddStop={addStop} onRemoveStop={removeStop} />
        <PlacesExperiences />
        <LocalRoutes selectedRoute={selectedRoute} selectedStops={selectedStops} onSelectRoute={setSelectedRoute} />
        <ThenNow />
      </main>
      <Footer />
    </>
  )
}

export default App
