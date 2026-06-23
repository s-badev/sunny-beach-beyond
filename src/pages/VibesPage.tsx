import { Vibes } from '../components/sections/Vibes'

type VibesPageProps = {
  selectedVibe: string
  onSelectVibe: (vibeId: string) => void
}

export function VibesPage({ selectedVibe, onSelectVibe }: VibesPageProps) {
  return <Vibes selectedVibe={selectedVibe} onSelectVibe={onSelectVibe} />
}
