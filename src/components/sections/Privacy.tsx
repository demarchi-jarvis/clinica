'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Eye, Lock, FileCheck, BadgeCheck, Users } from 'lucide-react'

const PILLARS = [
  {
    icon: Lock,
    title: 'Dados protegidos',
    description: 'Seus dados pessoais e médicos são armazenados com criptografia de ponta e nunca compartilhados sem sua autorização explícita.',
    color: 'indigo',
  },
  {
    icon: Eye,
    title: 'Transparência total',
    description: 'Você tem acesso completo a todos os seus dados a qualquer momento. Sabemos exatamente o que coletamos e por quê.',
    color: 'cyan',
  },
  {
    icon: FileCheck,
    title: 'Conformidade LGPD',
    description: 'Operamos em plena conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018), garantindo seus direitos.',
    color: 'emerald',
  },
  {
    icon: BadgeCheck,
    title: 'Sigilo médico',
    description: 'Toda informação compartilhada em consultas é protegida pelo sigilo médico, seguindo o Código de Ética Médica do CFM.',
    color: 'violet',
  },
  {
    icon: Users,
    title: 'Controle na sua mão',
    description: 'Você pode solicitar a exclusão, correção ou portabilidade dos seus dados a qualquer momento através do nosso DPO.',
    color: 'amber',
  },
  {
    icon: ShieldCheck,
    title: 'Infraestrutura segura',
    description: 'Servidores certificados ISO 27001 com backups criptografados e monitoramento 24/7 contra ameaças digitais.',
    color: 'rose',
  },
]

const COLOR_MAP: Record<string, { bg: string; text: string }> = {
  indigo:  { bg: 'rgba(79,70,229,0.1)',   text: '#818cf8' },
  cyan:    { bg: 'rgba(6,182,212,0.1)',    text: '#22d3ee' },
  emerald: { bg: 'rgba(16,185,129,0.1)',   text: '#34d399' },
  violet:  { bg: 'rgba(139,92,246,0.1)',   text: '#a78bfa' },
  amber:   { bg: 'rgba(245,158,11,0.1)',   text: '#fbbf24' },
  rose:    { bg: 'rgba(244,63,94,0.1)',    text: '#fb7185' },
}

export default function Privacy() {
  return (
    <section id="privacidade" className="py-20 lg:py-28" aria-label="Privacidade e proteção de dados">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="text-[11px] font-700 uppercase tracking-[0.2em] mb-4"
              style={{ color: 'rgba(129,140,248,0.8)' }}
            >
              Privacidade & LGPD
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="text-[36px] sm:text-[44px] font-900 tracking-tight mb-5 leading-[1.05]"
              style={{ color: 'var(--fg)' }}
            >
              Valorizamos a sua{' '}
              <span className="gradient-text">privacidade</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[16px] leading-relaxed"
              style={{ color: 'var(--fg-muted)' }}
            >
              Na OmniHealth, privacidade não é apenas cumprimento legal — é um valor fundamental.
              Seus dados de saúde são os mais sensíveis que existem, e tratamos cada informação
              com o máximo cuidado, sigilo e responsabilidade.
            </motion.p>
          </div>

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative rounded-3xl p-8 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(79,70,229,0.12) 0%, rgba(16,185,129,0.08) 100%)',
              border: '1px solid rgba(79,70,229,0.2)',
            }}
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20"
              style={{ background: 'radial-gradient(circle, #4f46e5, transparent)' }} aria-hidden="true" />

            <div className="relative flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/15 flex items-center justify-center flex-shrink-0">
                <ShieldCheck size={28} className="text-indigo-400" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-[18px] font-800 mb-2" style={{ color: 'var(--fg)' }}>
                  100% em conformidade com a LGPD
                </h3>
                <p className="text-[14px] leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                  Somos auditados regularmente por consultoria jurídica especializada em proteção de dados na área da saúde, garantindo conformidade total com a Lei 13.709/2018.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['LGPD', 'CFM', 'ISO 27001', 'HIPAA'].map(badge => (
                    <span key={badge} className="px-2.5 py-1 rounded-lg text-[11px] font-700 tracking-wide"
                      style={{ background: 'rgba(79,70,229,0.12)', color: '#818cf8' }}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list" aria-label="Pilares de privacidade">
          {PILLARS.map((p, i) => {
            const c = COLOR_MAP[p.color]
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                role="listitem"
                className="flex gap-4 p-5 rounded-2xl border transition-all duration-300 hover-glow"
                style={{ background: 'var(--bg-2)', borderColor: 'var(--border)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: c.bg }}
                >
                  <p.icon size={18} style={{ color: c.text }} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-[14px] font-700 mb-1.5" style={{ color: 'var(--fg)' }}>{p.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: 'var(--fg-muted)' }}>{p.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
