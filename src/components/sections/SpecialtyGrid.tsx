'use client'

import { useState, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, X, Scissors, Heart, Activity, Shield, Baby,
  Waves, Brain, Bone, HeartPulse, Stethoscope, Droplets,
  FlaskConical, Wind, Target, Sparkles, Pill, Droplet,
  Microscope, Ear, Users, Zap, Smile, Mic, MessageCircle,
  Leaf, Dumbbell, ClipboardCheck, ChevronRight,
} from 'lucide-react'
import { CATEGORIES, SPECIALTIES } from '@/lib/data/specialties'
import { Specialty, SpecialtyCategory } from '@/types'
import { cn } from '@/utils/cn'

const ICON_MAP: Record<string, React.ElementType> = {
  Scissors, Heart, Activity, Shield, Baby, Waves, Brain, Bone,
  HeartPulse, Stethoscope, Droplets, FlaskConical, Wind, Target,
  Sparkles, Pill, Droplet, Microscope, Ear, Users, Zap, Smile,
  Mic, MessageCircle, Leaf, Dumbbell, ClipboardCheck, Search,
}

const COLOR_MAP: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  rose: {
    bg: 'rgba(244, 63, 94, 0.08)',
    text: '#fb7185',
    border: 'rgba(244, 63, 94, 0.15)',
    glow: 'rgba(244, 63, 94, 0.25)',
  },
  indigo: {
    bg: 'rgba(79, 70, 229, 0.08)',
    text: '#818cf8',
    border: 'rgba(79, 70, 229, 0.15)',
    glow: 'rgba(79, 70, 229, 0.25)',
  },
  emerald: {
    bg: 'rgba(16, 185, 129, 0.08)',
    text: '#34d399',
    border: 'rgba(16, 185, 129, 0.15)',
    glow: 'rgba(16, 185, 129, 0.25)',
  },
  amber: {
    bg: 'rgba(245, 158, 11, 0.08)',
    text: '#fbbf24',
    border: 'rgba(245, 158, 11, 0.15)',
    glow: 'rgba(245, 158, 11, 0.25)',
  },
  purple: {
    bg: 'rgba(139, 92, 246, 0.08)',
    text: '#c084fc',
    border: 'rgba(139, 92, 246, 0.15)',
    glow: 'rgba(139, 92, 246, 0.25)',
  },
}

const ALL_FILTER = 'all'

function SpecialtyCard({
  specialty,
  index,
  featured,
}: {
  specialty: Specialty
  index: number
  featured?: boolean
}) {
  const Icon = ICON_MAP[specialty.icon] ?? Activity
  const colors = COLOR_MAP[specialty.color] ?? COLOR_MAP.indigo

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.3), ease: 'easeOut' }}
      className={cn(
        'group relative rounded-2xl border p-5 cursor-pointer',
        'transition-all duration-300',
        'hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]',
        featured && 'md:col-span-1 md:row-span-1',
      )}
      style={{
        background: 'var(--bg-2)',
        borderColor: 'var(--border)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = colors.border
        e.currentTarget.style.boxShadow = `0 8px 30px ${colors.glow}`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = ''
      }}
      role="article"
      aria-label={`Especialidade: ${specialty.name}`}
    >
      {/* Featured badge */}
      {specialty.featured && (
        <div
          className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[9px] font-700 uppercase tracking-wider"
          style={{ background: colors.bg, color: colors.text }}
        >
          Destaque
        </div>
      )}

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ background: colors.bg }}
      >
        <Icon size={20} style={{ color: colors.text }} aria-hidden="true" />
      </div>

      {/* Name */}
      <h3
        className="text-[15px] font-700 mb-1.5 leading-tight"
        style={{ color: 'var(--fg)' }}
      >
        {specialty.name}
      </h3>

      {/* Description */}
      <p
        className="text-[12.5px] leading-relaxed line-clamp-2"
        style={{ color: 'var(--fg-muted)' }}
      >
        {specialty.shortDescription}
      </p>

      {/* Procedures tags */}
      {specialty.procedures && specialty.procedures.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-3">
          {specialty.procedures.slice(0, 2).map((proc) => (
            <span
              key={proc}
              className="px-2 py-0.5 rounded-full text-[10px] font-500"
              style={{ background: colors.bg, color: colors.text }}
            >
              {proc}
            </span>
          ))}
        </div>
      )}

      {/* Arrow */}
      <div
        className="flex items-center gap-1 mt-4 text-[12px] font-600 opacity-0 group-hover:opacity-100 transition-all duration-200"
        style={{ color: colors.text }}
      >
        Saiba mais
        <ChevronRight size={13} aria-hidden="true" />
      </div>
    </motion.article>
  )
}

export default function SpecialtyGrid() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<SpecialtyCategory | typeof ALL_FILTER>(ALL_FILTER)

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return SPECIALTIES.filter((s) => {
      const matchesCategory = activeCategory === ALL_FILTER || s.category === activeCategory
      const matchesSearch = !q
        || s.name.toLowerCase().includes(q)
        || s.shortDescription.toLowerCase().includes(q)
        || (s.procedures ?? []).some((p) => p.toLowerCase().includes(q))
      return matchesCategory && matchesSearch
    })
  }, [search, activeCategory])

  const clearSearch = useCallback(() => setSearch(''), [])

  return (
    <section
      id="especialidades"
      className="py-20 lg:py-28"
      aria-label="Especialidades médicas"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5"
          >
            <span className="text-[11px] font-600 uppercase tracking-widest" style={{ color: 'var(--fg-subtle)' }}>
              Nossas Especialidades
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="text-[36px] sm:text-[44px] font-800 tracking-tight mb-4"
            style={{ color: 'var(--fg)' }}
          >
            Soluções{' '}
            <span className="gradient-text">especializadas</span>{' '}
            para você
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[16px] max-w-xl mx-auto leading-relaxed"
            style={{ color: 'var(--fg-muted)' }}
          >
            Oferecemos soluções especializadas com atendimento humanizado e eficaz
            em mais de 35 especialidades médicas.
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative max-w-lg mx-auto mb-8"
        >
          <div className="relative">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: 'var(--fg-subtle)' }}
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="Buscar especialidade ou procedimento…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl border text-[14px] font-400 transition-all duration-200 outline-none"
              style={{
                background: 'var(--bg-2)',
                color: 'var(--fg)',
                borderColor: 'var(--border)',
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(79,70,229,0.5)' }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--border)' }}
              aria-label="Buscar especialidade"
              role="searchbox"
            />
            {search && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center hover:bg-red-500/15 transition-colors"
                style={{ color: 'var(--fg-subtle)' }}
                aria-label="Limpar busca"
              >
                <X size={13} aria-hidden="true" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="group"
          aria-label="Filtros por categoria"
        >
          <button
            onClick={() => setActiveCategory(ALL_FILTER)}
            className={cn(
              'px-4 py-2 rounded-xl text-[13px] font-600 transition-all duration-200 border',
              activeCategory === ALL_FILTER
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-[0_4px_16px_rgba(79,70,229,0.3)]'
                : 'border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:border-[var(--border-strong)]',
            )}
            aria-pressed={activeCategory === ALL_FILTER}
          >
            Todas ({SPECIALTIES.length})
          </button>

          {CATEGORIES.map((cat) => {
            const count = SPECIALTIES.filter((s) => s.category === cat.id).length
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'px-4 py-2 rounded-xl text-[13px] font-600 transition-all duration-200 border',
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-[0_4px_16px_rgba(79,70,229,0.3)]'
                    : 'border-[var(--border)] text-[var(--fg-muted)] hover:text-[var(--fg)] hover:border-[var(--border-strong)]',
                )}
                aria-pressed={isActive}
              >
                {cat.label.split(' ')[0]} ({count})
              </button>
            )
          })}
        </motion.div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-[13px]" style={{ color: 'var(--fg-subtle)' }}>
            {filtered.length === 0
              ? 'Nenhuma especialidade encontrada'
              : `${filtered.length} especialidade${filtered.length !== 1 ? 's' : ''} encontrada${filtered.length !== 1 ? 's' : ''}`
            }
          </p>
        </div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              role="list"
              aria-label={`${filtered.length} especialidades`}
            >
              {filtered.map((specialty, i) => (
                <div key={specialty.id} role="listitem">
                  <SpecialtyCard specialty={specialty} index={i} />
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
              role="status"
              aria-live="polite"
            >
              <Search
                size={40}
                className="mx-auto mb-4 opacity-20"
                style={{ color: 'var(--fg-subtle)' }}
                aria-hidden="true"
              />
              <p className="text-[16px] font-500 mb-2" style={{ color: 'var(--fg)' }}>
                Nenhum resultado para &ldquo;{search}&rdquo;
              </p>
              <p className="text-[14px] mb-6" style={{ color: 'var(--fg-muted)' }}>
                Tente outro termo ou remova os filtros.
              </p>
              <button
                onClick={() => { clearSearch(); setActiveCategory(ALL_FILTER) }}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-[13px] font-600 hover:bg-indigo-500 transition-colors"
              >
                Ver todas
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
