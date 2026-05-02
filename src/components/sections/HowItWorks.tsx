'use client'

import { motion } from 'framer-motion'
import { PhoneCall, CalendarCheck, Stethoscope, ClipboardCheck } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    icon: PhoneCall,
    title: 'Entre em contato',
    description: 'Ligue, mande WhatsApp ou acesse nosso portal online. Nossa equipe responde em minutos.',
    color: 'indigo',
    bg: 'rgba(79,70,229,0.08)',
    text: '#818cf8',
    glow: 'rgba(79,70,229,0.2)',
  },
  {
    number: '02',
    icon: CalendarCheck,
    title: 'Escolha o melhor horário',
    description: 'Consulte disponibilidade de mais de 120 especialistas e reserve o horário ideal para você.',
    color: 'cyan',
    bg: 'rgba(6,182,212,0.08)',
    text: '#22d3ee',
    glow: 'rgba(6,182,212,0.2)',
  },
  {
    number: '03',
    icon: Stethoscope,
    title: 'Atendimento de excelência',
    description: 'Consulte com especialistas altamente qualificados em um ambiente moderno e acolhedor.',
    color: 'emerald',
    bg: 'rgba(16,185,129,0.08)',
    text: '#34d399',
    glow: 'rgba(16,185,129,0.2)',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Acompanhamento contínuo',
    description: 'Receba seus resultados e laudos digitalmente. Continuamos cuidando de você a distância.',
    color: 'violet',
    bg: 'rgba(139,92,246,0.08)',
    text: '#a78bfa',
    glow: 'rgba(139,92,246,0.2)',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28" aria-label="Como funciona">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-[11px] font-700 uppercase tracking-[0.2em] mb-4"
            style={{ color: 'rgba(129,140,248,0.8)' }}
          >
            Simples e rápido
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="text-[36px] sm:text-[44px] font-900 tracking-tight mb-4"
            style={{ color: 'var(--fg)' }}
          >
            Do agendamento ao{' '}
            <span className="gradient-text">cuidado</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[16px] max-w-md mx-auto leading-relaxed"
            style={{ color: 'var(--fg-muted)' }}
          >
            Cuidar da sua saúde nunca foi tão fácil. Em 4 passos simples, você já está sendo atendido pelos melhores especialistas.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px z-0"
            style={{ background: 'linear-gradient(to right, transparent, var(--border-strong), transparent)' }}
            aria-hidden="true"
          />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative z-10 gradient-border rounded-3xl p-6 hover-glow"
            >
              {/* Step number + icon */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{ background: step.bg, boxShadow: `0 0 20px ${step.glow}` }}
                >
                  <step.icon size={22} style={{ color: step.text }} aria-hidden="true" />
                </div>
                <span
                  className="text-[40px] font-900 leading-none tracking-tighter"
                  style={{ color: 'var(--border-strong)', lineHeight: 1 }}
                >
                  {step.number}
                </span>
              </div>

              <h3 className="text-[16px] font-700 mb-2" style={{ color: 'var(--fg)' }}>
                {step.title}
              </h3>
              <p className="text-[13.5px] leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
