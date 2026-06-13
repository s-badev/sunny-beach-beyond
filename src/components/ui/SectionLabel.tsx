type SectionLabelProps = {
  children: string
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--coral)]">
      {children}
    </p>
  )
}
