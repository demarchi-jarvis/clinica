'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { Calendar, ArrowRight, ShieldCheck, Star, MapPin, Award, Zap } from 'lucide-react'

const STATS = [
  { value: '35+', label: 'Especialidades' },
  { value: '98%', label: 'Satisfação' },
  { value: '15k+', label: 'Pacientes' },
  { value: '12', label: 'Anos de história' },
]

export default function Hero() {
  const ctaRef      = useRef<HTMLAnchorElement>(null)
  const heroRef     = useRef<HTMLElement>(null)
  const meshRef     = useRef<HTMLDivElement>(null)
  const floatRefs   = useRef<HTMLDivElement[]>([])

  /* Magnetic CTA */
  useEffect(() => {
    const btn = ctaRef.current
    if (!btn) return
    const onMove = (e: MouseEvent) => {
      const r = btn.getBoundingClientRect()
      gsap.to(btn, { x: (e.clientX - r.left - r.width / 2) * 0.4, y: (e.clientY - r.top - r.height / 2) * 0.4, duration: 0.4, ease: 'power2.out' })
    }
    const onLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.5)' })
    btn.addEventListener('mousemove', onMove)
    btn.addEventListener('mouseleave', onLeave)
    return () => { btn.removeEventListener('mousemove', onMove); btn.removeEventListener('mouseleave', onLeave) }
  }, [])

  /* Parallax mesh on mouse */
  useEffect(() => {
    const hero = heroRef.current
    const mesh = meshRef.current
    if (!hero || !mesh) return
    const onMove = (e: MouseEvent) => {
      const { width, height, left, top } = hero.getBoundingClientRect()
      const rx = (e.clientX - left - width / 2) / width
      const ry = (e.clientY - top - height / 2) / height
      gsap.to(mesh, { x: rx * 50, y: ry * 35, duration: 1.4, ease: 'power1.out' })
    }
    hero.addEventListener('mousemove', onMove)
    return () => hero.removeEventListener('mousemove', onMove)
  }, [])

  /* Float badges */
  useEffect(() => {
    floatRefs.current.forEach((el, i) => {
      if (!el) return
      gsap.to(el, { y: i % 2 === 0 ? -16 : 12, duration: 2.8 + i * 0.5, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: i * 0.4 })
    })
  }, [])

  const setFloat = (el: HTMLDivElement | null, i: number) => { if (el) floatRefs.current[i] = el }

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden" aria-label="Seção principal">

      {/* ── Aurora Background ── */}
      <div className="absolute inset-0 noise" aria-hidden="true">
        <div className="absolute inset-0" style={{ background: 'var(--bg)' }} />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.05]" style={{
          backgroundImage: 'linear-gradient(rgba(79,70,229,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.8) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }} />

        {/* Mesh orbs */}
        <div ref={meshRef} className="absolute inset-0 pointer-events-none">
          <div className="animate-aurora absolute -top-40 right-[-10%] w-[750px] h-[750px] rounded-full blur-[120px] opacity-25 dark:opacity-20"
            style={{ background: 'radial-gradient(circle at 40% 40%, #4f46e5 0%, #06b6d4 40%, transparent 70%)' }} />
          <div className="animate-aurora absolute bottom-[-20%] left-[-8%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-20 dark:opacity-15"
            style={{ background: 'radial-gradient(circle, #10b981 0%, #0891b2 50%, transparent 70%)', animationDelay: '-4s' }} />
          <div className="animate-aurora absolute top-[30%] left-[20%] w-[400px] h-[400px] rounded-full blur-[80px] opacity-10"
            style={{ background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)', animationDelay: '-8s' }} />
        </div>
      </div>

      {/* ── Floating Badges ── */}
      <div ref={(el) => setFloat(el, 0)}
        className="absolute top-28 right-[4%] lg:right-[10%] hidden lg:flex items-center gap-3 glass-strong rounded-2xl px-4 py-3 shadow-[var(--shadow-lg)]"
        aria-hidden="true">
        <div className="w-9 h-9 rounded-xl bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
          <ShieldCheck size={17} className="text-emerald-400" />
        </div>
        <div>
          <p className="text-[12px] font-700" style={{ color: 'var(--fg)' }}>CFM Certificado</p>
          <p className="text-[10px]" style={{ color: 'var(--fg-subtle)' }}>Excelência clínica</p>
        </div>
      </div>

      <div ref={(el) => setFloat(el, 1)}
        className="absolute top-48 right-[1%] lg:right-[6%] hidden lg:flex items-center gap-3 glass-strong rounded-2xl px-4 py-3 shadow-[var(--shadow-lg)]"
        aria-hidden="true">
        <div className="relative w-9 h-9 flex-shrink-0">
          <div className="animate-pulse-ring absolute inset-0 rounded-xl bg-amber-400/30" />
          <div className="relative w-9 h-9 rounded-xl bg-amber-500/15 flex items-center justify-center">
            <Star size={16} className="text-amber-400 fill-amber-400" />
          </div>
        </div>
        <div>
          <p className="text-[12px] font-700" style={{ color: 'var(--fg)' }}>4.9 / 5.0</p>
          <p className="text-[10px]" style={{ color: 'var(--fg-subtle)' }}>+1.800 avaliações</p>
        </div>
      </div>

      <div ref={(el) => setFloat(el, 2)}
        className="absolute bottom-36 right-[5%] lg:right-[12%] hidden lg:flex items-center gap-3 glass-strong rounded-2xl px-4 py-3 shadow-[var(--shadow-lg)]"
        aria-hidden="true">
        <div className="w-9 h-9 rounded-xl bg-indigo-500/15 flex items-center justify-center flex-shrink-0">
          <MapPin size={16} className="text-indigo-400" />
        </div>
        <div>
          <p className="text-[12px] font-700" style={{ color: 'var(--fg)' }}>Vassouras · RJ</p>
          <p className="text-[10px]" style={{ color: 'var(--fg-subtle)' }}>Referência na região</p>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-[720px]">

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 glass rounded-full px-4 py-2 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[12px] font-600 tracking-wide" style={{ color: 'var(--fg-muted)' }}>
              A melhor clínica de Vassouras e região
            </span>
            <Award size={13} className="text-indigo-400" aria-hidden="true" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-[44px] sm:text-[58px] lg:text-[72px] font-900 leading-[1.02] tracking-[-2px] mb-6"
            style={{ color: 'var(--fg)' }}
          >
            Cuidado de{' '}
            <span className="gradient-text">excelência</span>
            <br />
            perto de{' '}
            <span
              style={{
                WebkitTextStroke: '2px',
                WebkitTextStrokeColor: 'var(--primary)',
                color: 'transparent',
              }}
            >
              você
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-[17px] sm:text-[19px] leading-[1.75] max-w-2xl mb-10"
            style={{ color: 'var(--fg-muted)' }}
          >
            A <strong style={{ color: 'var(--fg)', fontWeight: 600 }}>OmniHealth</strong> reúne mais de{' '}
            <strong style={{ color: 'var(--fg)', fontWeight: 600 }}>35 especialidades médicas</strong>{' '}
            em Vassouras, com equipe de alto nível e tecnologia de ponta — tudo para cuidar de toda a sua família
            com atenção e carinho.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="flex flex-col sm:flex-row gap-3 mb-16"
          >
            <a
              ref={ctaRef}
              href="#especialidades"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-white font-700 text-[15px] transition-all duration-300 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)', boxShadow: '0 8px 32px rgba(79,70,229,0.40)' }}
              aria-label="Agendar consulta"
            >
              <span className="absolute inset-0 animate-shimmer" aria-hidden="true" />
              <Calendar size={18} aria-hidden="true" />
              Agendar Consulta
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-200" aria-hidden="true" />
            </a>

            <a
              href="https://wa.me/5524999990000?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20OmniHealth."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-600 text-[15px] transition-all duration-200 border hover:bg-emerald-500/6"
              style={{ color: 'var(--fg)', borderColor: 'var(--border-strong)', background: 'var(--bg-2)' }}
              aria-label="WhatsApp para consulta"
            >
              <Zap size={16} className="text-emerald-400" aria-hidden="true" />
              WhatsApp
            </a>

            <a
              href="#especialidades"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-600 text-[15px] transition-all duration-200 border hover:bg-indigo-500/6"
              style={{ color: 'var(--fg-muted)', borderColor: 'var(--border)', background: 'transparent' }}
              aria-label="Ver especialidades"
            >
              Ver Especialidades
              <ArrowRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" aria-hidden="true" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-lg sm:max-w-none"
            role="list"
            aria-label="Números da clínica"
          >
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.48 + i * 0.07, type: 'spring', stiffness: 200 }}
                role="listitem"
                className="flex flex-col gap-0.5"
              >
                <span className="text-[30px] font-900 tracking-tight gradient-text leading-none">{s.value}</span>
                <span className="text-[12px] font-500" style={{ color: 'var(--fg-subtle)' }}>{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 inset-x-0 h-40 pointer-events-none" style={{ background: 'linear-gradient(to top, var(--bg), transparent)' }} aria-hidden="true" />
    </section>
  )
}
