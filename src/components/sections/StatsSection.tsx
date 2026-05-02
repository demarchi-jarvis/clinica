'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle, Clock, MapPin, Phone } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const STATS = [
  { value: 35, suffix: '+', label: 'Especialidades Médicas', color: 'indigo' },
  { value: 120, suffix: '+', label: 'Especialistas', color: 'emerald' },
  { value: 50, suffix: 'k+', label: 'Pacientes Atendidos', color: 'indigo' },
  { value: 98, suffix: '%', label: 'Taxa de Satisfação', color: 'emerald' },
]

const HIGHLIGHTS = [
  { icon: CheckCircle, text: 'Atendimento humanizado e ético' },
  { icon: Clock, text: 'Consultas disponíveis 6 dias por semana' },
  { icon: MapPin, text: 'Localização central e acessível' },
  { icon: Phone, text: 'Agendamento rápido por telefone ou app' },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { stiffness: 80, damping: 20 })
  const display = useTransform(spring, (v) => `${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (inView) motionValue.set(value)
  }, [inView, value, motionValue])

  return <motion.span ref={ref}>{display}</motion.span>
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        panel,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: panel,
            start: 'top 80%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-24"
      aria-label="Nossos números e diferenciais"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={panelRef}
          className="rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(79,70,229,0.12) 0%, rgba(16,185,129,0.08) 100%)',
            border: '1px solid rgba(79,70,229,0.15)',
          }}
        >
          <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[rgba(255,255,255,0.06)]">
            {/* Stats */}
            <div className="p-10 lg:p-14">
              <p className="text-[11px] font-700 uppercase tracking-widest mb-2" style={{ color: 'rgba(129,140,248,0.8)' }}>
                Nossos Números
              </p>
              <h2 className="text-[30px] sm:text-[36px] font-800 tracking-tight mb-10" style={{ color: 'var(--fg)' }}>
                Excelência em{' '}
                <span className="gradient-text">dados</span>
              </h2>

              <div className="grid grid-cols-2 gap-8" role="list" aria-label="Estatísticas">
                {STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    role="listitem"
                  >
                    <div
                      className="text-[40px] font-800 tracking-tight leading-none mb-1"
                      style={{
                        background: stat.color === 'emerald'
                          ? 'linear-gradient(135deg, #10b981, #34d399)'
                          : 'linear-gradient(135deg, #4f46e5, #818cf8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-[13px] font-500" style={{ color: 'var(--fg-muted)' }}>
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="p-10 lg:p-14">
              <p className="text-[11px] font-700 uppercase tracking-widest mb-2" style={{ color: 'rgba(52,211,153,0.8)' }}>
                Por que nos escolher
              </p>
              <h2 className="text-[30px] sm:text-[36px] font-800 tracking-tight mb-10" style={{ color: 'var(--fg)' }}>
                Cuidado que{' '}
                <span className="gradient-text">transforma</span>
              </h2>

              <ul className="space-y-5" aria-label="Diferenciais da clínica">
                {HIGHLIGHTS.map((h, i) => (
                  <motion.li
                    key={h.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex items-start gap-3.5"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(16,185,129,0.1)' }}
                    >
                      <h.icon size={17} className="text-emerald-400" aria-hidden="true" />
                    </div>
                    <p className="text-[14px] font-500 leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                      {h.text}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
