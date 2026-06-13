import { places } from '../../data/places'
import { SectionLabel } from '../ui/SectionLabel'

export function MapPreview() {
  return (
    <section id="map-preview" className="bg-[color:var(--sea-deep)] px-5 py-20 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <SectionLabel>Map Preview</SectionLabel>
          <h2 className="font-serif text-4xl font-semibold">A lightweight explorer comes next.</h2>
          <p className="mt-4 leading-7 text-white/72">
            This placeholder reserves space for a future interactive coastal map without adding a real maps API yet.
          </p>
        </div>
        <div className="relative min-h-80 overflow-hidden rounded-3xl border border-white/15 bg-[radial-gradient(circle_at_30%_30%,var(--turquoise),transparent_30%),linear-gradient(145deg,#062f4f,#0c6980)] p-6 shadow-glow">
          <div className="absolute left-8 top-10 size-4 rounded-full bg-[color:var(--coral)] shadow-coral" />
          <div className="absolute right-20 top-24 size-3 rounded-full bg-[color:var(--foam)]" />
          <div className="absolute bottom-16 left-1/2 size-5 rounded-full bg-[color:var(--sand)]" />
          <div className="relative z-10 grid gap-3">
            {places.map((place) => (
              <p key={place.name} className="w-fit rounded-full bg-white/12 px-4 py-2 text-sm backdrop-blur">
                {place.name} &middot; {place.area}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
