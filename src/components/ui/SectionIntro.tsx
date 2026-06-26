import type { ReactNode } from 'react'

type SectionIntroProps = {
  label: string
  tone?: 'light' | 'dark'
  children: ReactNode
}

export function SectionIntro({ label, tone = 'light', children }: SectionIntroProps) {
  const isDark = tone === 'dark'

  return (
    <div
      className={`relative w-full max-w-2xl justify-self-end overflow-hidden rounded-[1.25rem] border p-4 sm:p-5 ${
        isDark
          ? 'border-white/12 bg-white/8 text-white shadow-soft backdrop-blur'
          : 'border-[color:var(--sand-deep)]/16 bg-[color:var(--paper-soft)]/86 text-[color:var(--ink)] shadow-[0_14px_34px_rgba(9,58,82,0.07)]'
      }`}
    >
      <div
        className={`absolute inset-y-4 left-0 w-1 rounded-r-full ${
          isDark ? 'bg-[color:var(--coral)]' : 'bg-[color:var(--turquoise)]'
        }`}
        aria-hidden="true"
      />
      <p
        className={`font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${
          isDark ? 'text-[color:var(--coral-soft)]' : 'text-[color:var(--sea-deep)]/68'
        }`}
      >
        {label}
      </p>
      <p
        className={`mt-2 text-base font-medium leading-7 sm:text-lg sm:leading-8 ${
          isDark ? 'text-white/88' : 'text-[color:var(--ink)]/78'
        }`}
      >
        {children}
      </p>
    </div>
  )
}
