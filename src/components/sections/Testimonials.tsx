'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Mariana Sousa',
    role: 'Paciente de Cardiologia',
    city: 'Vassouras, RJ',
    rating: 5,
    text: 'Fui atendida com muito carinho e profissionalismo. O Dr. Eduardo explicou tudo com calma e me deixou completamente tranquila. Melhor clínica de Vassouras com certeza!',
    initials: 'MS',
    color: 'indigo',
  },
  {
    name: 'Roberto Alves',
    role: 'Paciente de Ortopedia',
    city: 'Paraíba do Sul, RJ',
    rating: 5,
    text: 'Vim de Paraíba do Sul para ser atendido e valeu cada quilômetro. Estrutura impecável, equipe atenciosa. Me recuperei da cirurgia muito mais rápido do que esperava.',
    initials: 'RA',
    color: 'emerald',
  },
  {
    name: 'Fernanda Lima',
    role: 'Paciente de Ginecologia',
    city: 'Vassouras, RJ',
    rating: 5,
    text: 'Acompanhamento pré-natal de excelência. Senti-me acolhida desde a primeira consulta. A Dra. Júlia é maravilhosa — cuidadosa e sempre disponível para responder dúvidas.',
    initials: 'FL',
    color: 'rose',
  },
  {
    name: 'Carlos Mendonça',
    role: 'Paciente de Fisioterapia',
    city: 'Mendes, RJ',
    rating: 5,
    text: 'Após um acidente, precisei de reabilitação intensa. A equipe de fisioterapia foi excepcional — paciente, técnica e humanizada. Voltei a jogar futebol aos 52 anos!',
    initials: 'CM',
    color: 'amber',
  },
  {
    name: 'Ana Paula Ramos',
    role: 'Mãe de paciente pediátrico',
    city: 'Vassouras, RJ',
    rating: 5,
    text: 'Meu filho tem fobia de médico, mas a pediatra conquistou a confiança dele em minutos. O ambiente é pensado para crianças se sentirem seguras. Nota 10!',
    initials: 'AP',
    color: 'cyan',
  },
  {
    name: 'Jorge Ferreira',
    role: 'Paciente de Neurologia',
    city: 'Três Rios, RJ',
    rating: 5,
    text: 'Diagnóstico preciso e tratamento eficaz para minha enxaqueca crônica. Pela primeira vez em anos estou vivendo sem dores. Recomendo a todos da região.',
    initials: 'JF',
    color: 'violet',
  },
]

const COLOR_MAP: Record<string, { bg: string; text: string; border: string }> = {
  indigo: { bg: 'rgba(79,70,229,0.1)', text: '#818cf8', border: 'rgba(79,70,229,0.2)' },
  emerald: { bg: 'rgba(16,185,129,0.1)', text: '#34d399', border: 'rgba(16,185,129,0.2)' },
  rose: { bg: 'rgba(244,63,94,0.1)', text: '#fb7185', border: 'rgba(244,63,94,0.2)' },
  amber: { bg: 'rgba(245,158,11,0.1)', text: '#fbbf24', border: 'rgba(245,158,11,0.2)' },
  cyan: { bg: 'rgba(6,182,212,0.1)', text: '#22d3ee', border: 'rgba(6,182,212,0.2)' },
  violet: { bg: 'rgba(139,92,246,0.1)', text: '#a78bfa', border: 'rgba(139,92,246,0.2)' },
}

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-20 lg:py-28"
      style={{ background: 'var(--bg-2)' }}
      aria-label="Depoimentos de pacientes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-[11px] font-700 uppercase tracking-[0.2em] mb-4"
            style={{ color: 'rgba(52,211,153,0.8)' }}
          >
            Depoimentos reais
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="text-[36px] sm:text-[44px] font-900 tracking-tight mb-4"
            style={{ color: 'var(--fg)' }}
          >
            O que nossos{' '}
            <span className="gradient-text">pacientes dizem</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[16px] max-w-md mx-auto"
            style={{ color: 'var(--fg-muted)' }}
          >
            Mais de 1.800 avaliações 5 estrelas de pacientes de Vassouras e toda a região.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
          aria-label="Depoimentos"
        >
          {TESTIMONIALS.map((t, i) => {
            const c = COLOR_MAP[t.color]
            return (
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                role="listitem"
                className="gradient-border rounded-3xl p-6 flex flex-col gap-4 hover-glow"
              >
                {/* Quote icon */}
                <Quote size={20} style={{ color: c.text, opacity: 0.6 }} aria-hidden="true" />

                {/* Stars */}
                <div className="flex gap-0.5" aria-label={`${t.rating} de 5 estrelas`}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={13} className="fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-[14px] leading-relaxed flex-1" style={{ color: 'var(--fg-muted)' }}>
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-[13px] font-700 flex-shrink-0"
                    style={{ background: c.bg, color: c.text }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-[13px] font-700" style={{ color: 'var(--fg)' }}>{t.name}</p>
                    <p className="text-[11px]" style={{ color: 'var(--fg-subtle)' }}>{t.role} · {t.city}</p>
                  </div>
                </div>
              </motion.blockquote>
            )
          })}
        </div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 glass rounded-2xl px-8 py-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-amber-400 text-amber-400" aria-hidden="true" />
              ))}
            </div>
            <div className="w-px h-6" style={{ background: 'var(--border-strong)' }} aria-hidden="true" />
            <p className="text-[14px] font-600" style={{ color: 'var(--fg)' }}>
              <strong className="text-[20px] font-900 gradient-text-gold">4.9</strong>
              {' '}/ 5.0 · +1.800 avaliações verificadas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
