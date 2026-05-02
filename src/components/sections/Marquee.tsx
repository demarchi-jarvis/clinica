'use client'

import { Stethoscope } from 'lucide-react'
import { SPECIALTIES } from '@/lib/data/specialties'

const items = SPECIALTIES.map(s => s.name)

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div
      className="relative py-4 overflow-hidden border-y"
      style={{ borderColor: 'var(--border)', background: 'var(--bg-2)' }}
      aria-label="Especialidades disponíveis"
      aria-hidden="true"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--bg-2), transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--bg-2), transparent)' }} />

      <div className="flex animate-marquee whitespace-nowrap will-change-transform gap-0">
        {doubled.map((name, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-6 text-[13px] font-600 flex-shrink-0" style={{ color: 'var(--fg-muted)' }}>
            <Stethoscope size={12} className="text-indigo-400 flex-shrink-0" />
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}
