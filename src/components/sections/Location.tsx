'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Car, Bus, CircleCheck } from 'lucide-react'

const INFO = [
  {
    icon: MapPin,
    title: 'Endereço',
    lines: ['Av. Exp. Oswaldo de Almeida Ramos, 250', 'Centro · Vassouras – RJ · CEP 27700-000'],
    color: 'indigo',
  },
  {
    icon: Clock,
    title: 'Horário de atendimento',
    lines: ['Segunda a Sexta: 07h às 19h', 'Sábado: 08h às 13h'],
    color: 'emerald',
  },
  {
    icon: Phone,
    title: 'Contato',
    lines: ['(24) 2471-0000', 'contato@omnihealth.com.br'],
    color: 'cyan',
  },
]

const REGIONS = [
  'Vassouras', 'Paraíba do Sul', 'Três Rios',
  'Valença', 'Mendes', 'Engenheiro Paulo de Frontin',
  'Miguel Pereira', 'Paty do Alferes', 'Barra do Piraí',
]

export default function Location() {
  return (
    <section
      id="localizacao"
      className="py-20 lg:py-28"
      style={{ background: 'var(--bg-2)' }}
      aria-label="Localização e contato"
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
            Onde estamos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="text-[36px] sm:text-[44px] font-900 tracking-tight mb-4"
            style={{ color: 'var(--fg)' }}
          >
            No coração de{' '}
            <span className="gradient-text">Vassouras</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[16px] max-w-md mx-auto"
            style={{ color: 'var(--fg-muted)' }}
          >
            Fácil acesso, estacionamento gratuito e atendimento para toda a região sul-fluminense.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-3 rounded-3xl overflow-hidden relative"
            style={{ minHeight: '380px', background: 'var(--bg-3)', border: '1px solid var(--border)' }}
          >
            {/* Map embed placeholder — substituir pelo iframe real */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/15 flex items-center justify-center">
                <MapPin size={28} className="text-indigo-400" aria-hidden="true" />
              </div>
              <div className="text-center px-8">
                <p className="text-[15px] font-700 mb-1" style={{ color: 'var(--fg)' }}>
                  Av. Exp. Oswaldo de Almeida Ramos, 250
                </p>
                <p className="text-[13px] mb-5" style={{ color: 'var(--fg-muted)' }}>
                  Centro · Vassouras – RJ
                </p>
                <a
                  href="https://maps.google.com/?q=Vassouras+RJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-[13px] font-600 transition-colors"
                >
                  <MapPin size={14} aria-hidden="true" />
                  Abrir no Google Maps
                </a>
              </div>
            </div>

            {/* Decorative grid overlay */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: 'linear-gradient(var(--fg) 1px, transparent 1px), linear-gradient(90deg, var(--fg) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }} aria-hidden="true" />
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Contact cards */}
            {INFO.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-4 rounded-2xl p-4 border"
                style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(79,70,229,0.1)' }}
                >
                  <item.icon size={17} className="text-indigo-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[11px] font-700 uppercase tracking-wider mb-1" style={{ color: 'var(--fg-subtle)' }}>
                    {item.title}
                  </p>
                  {item.lines.map(l => (
                    <p key={l} className="text-[13px] font-500" style={{ color: 'var(--fg)' }}>{l}</p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Access info */}
            <div className="rounded-2xl p-4 border" style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
              <p className="text-[11px] font-700 uppercase tracking-wider mb-3" style={{ color: 'var(--fg-subtle)' }}>
                Como chegar
              </p>
              <div className="space-y-2">
                {[
                  { icon: Car, text: 'Estacionamento próprio gratuito' },
                  { icon: Bus, text: 'Ponto de ônibus a 50 metros' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5">
                    <Icon size={14} className="text-emerald-400 flex-shrink-0" aria-hidden="true" />
                    <span className="text-[13px]" style={{ color: 'var(--fg-muted)' }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Regions served */}
            <div className="rounded-2xl p-4 border" style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
              <p className="text-[11px] font-700 uppercase tracking-wider mb-3" style={{ color: 'var(--fg-subtle)' }}>
                Atendemos toda a região
              </p>
              <div className="flex flex-wrap gap-1.5">
                {REGIONS.map(r => (
                  <span
                    key={r}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-600"
                    style={{ background: 'rgba(16,185,129,0.08)', color: '#34d399' }}
                  >
                    <CircleCheck size={10} aria-hidden="true" />
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
