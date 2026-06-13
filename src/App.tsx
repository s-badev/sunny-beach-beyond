import { Footer } from './components/layout/Footer'
import { Nav } from './components/layout/Nav'
import { Areas } from './components/sections/Areas'
import { Beaches } from './components/sections/Beaches'
import { Hero } from './components/sections/Hero'
import { LocalNotes } from './components/sections/LocalNotes'
import { LocalRoutes } from './components/sections/LocalRoutes'
import { MapPreview } from './components/sections/MapPreview'
import { Nightlife } from './components/sections/Nightlife'
import { ThenNow } from './components/sections/ThenNow'
import { Vibes } from './components/sections/Vibes'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Vibes />
        <Areas />
        <Beaches />
        <Nightlife />
        <LocalNotes />
        <MapPreview />
        <LocalRoutes />
        <ThenNow />
      </main>
      <Footer />
    </>
  )
}

export default App
