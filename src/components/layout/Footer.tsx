'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, Phone, Mail, MapPin, AtSign, Share2, Rss } from 'lucide-react'

const FOOTER_LINKS = {
  Especialidades: [
    { label: 'Cardiologia', href: '#especialidades' },
    { label: 'Neurologia', href: '#especialidades' },
    { label: 'Oncologia', href: '#especialidades' },
    { label: 'Ortopedia', href: '#especialidades' },
    { label: 'Ginecologia', href: '#especialidades' },
    { label: 'Ver todas (35+)', href: '#especialidades' },
  ],
  Clínica: [
    { label: 'Sobre a OmniHealth', href: '#sobre' },
    { label: 'Nossa equipe', href: '#medicos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Convênios aceitos', href: '#' },
    { label: 'Trabalhe conosco', href: '#' },
  ],
  Paciente: [
    { label: 'Agendar consulta', href: '#' },
    { label: 'WhatsApp', href: 'https://wa.me/5524999990000' },
    { label: 'Privacidade & LGPD', href: '#privacidade' },
    { label: 'Política de privacidade', href: '#' },
    { label: 'Termos de uso', href: '#' },
  ],
}

const SOCIALS = [
  { icon: AtSign, href: '#', label: 'Instagram' },
  { icon: Share2, href: '#', label: 'LinkedIn' },
  { icon: Rss, href: '#', label: 'Blog' },
]

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: 'var(--border)', background: 'var(--bg-2)' }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5" aria-label="OmniHealth - Página inicial">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Heart size={17} className="text-white" strokeWidth={2.5} aria-hidden="true" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[17px] font-800 tracking-tight" style={{ color: 'var(--fg)' }}>
                  Omni<span className="gradient-text">Health</span>
                </span>
                <span className="text-[9px] font-600 tracking-widest uppercase" style={{ color: 'var(--fg-subtle)' }}>
                  Vassouras e Região
                </span>
              </div>
            </Link>

            <p className="text-[14px] leading-relaxed mb-6 max-w-xs" style={{ color: 'var(--fg-muted)' }}>
              A melhor clínica multidisciplinar de Vassouras e região, com mais de 35 especialidades médicas
              e atendimento humanizado para toda a sua família.
            </p>

            <div className="space-y-2.5">
              {[
                { icon: Phone, text: '(24) 2471-0000', href: 'tel:+552424710000' },
                { icon: Mail, text: 'contato@omnihealth.com.br', href: 'mailto:contato@omnihealth.com.br' },
                { icon: MapPin, text: 'Av. Exp. O. A. Ramos, 250 — Vassouras, RJ', href: '#localizacao' },
              ].map(({ icon: Icon, text, href }) => (
                <a key={text} href={href}
                  className="flex items-center gap-2.5 text-[13px] transition-opacity hover:opacity-75"
                  style={{ color: 'var(--fg-muted)' }}>
                  <Icon size={14} className="text-indigo-400 flex-shrink-0" aria-hidden="true" />
                  {text}
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2 mt-6">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-200 hover:border-indigo-500/40 hover:bg-indigo-500/8"
                  style={{ borderColor: 'var(--border)', color: 'var(--fg-subtle)' }}
                  aria-label={label}>
                  <Icon size={15} aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[11px] font-700 uppercase tracking-widest mb-4" style={{ color: 'var(--fg-subtle)' }}>
                {title}
              </h3>
              <nav aria-label={`Links de ${title}`}>
                <ul className="space-y-2.5">
                  {links.map(link => (
                    <li key={link.label}>
                      <Link href={link.href}
                        className="text-[13px] font-500 transition-opacity hover:opacity-75"
                        style={{ color: 'var(--fg-muted)' }}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="py-5 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: 'var(--border)' }}>
          <p className="text-[12px]" style={{ color: 'var(--fg-subtle)' }}>
            © {new Date().getFullYear()} OmniHealth · Vassouras, RJ · CNPJ 00.000.000/0001-00 · CRM-RJ 000000
          </p>
          <p className="text-[12px] flex items-center gap-1" style={{ color: 'var(--fg-subtle)' }}>
            Feito com
            <Heart size={11} className="text-rose-400 fill-rose-400 mx-0.5" aria-hidden="true" />
            para Vassouras
          </p>
        </div>
      </div>
    </footer>
  )
}
