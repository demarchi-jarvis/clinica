'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu, X, Sun, Moon, ChevronDown, Phone,
  Heart, Stethoscope, Activity, Users, Briefcase,
} from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/utils/cn'

const NAV_ITEMS = [
  {
    label: 'Especialidades',
    href: '#especialidades',
    icon: Stethoscope,
    children: [
      { label: 'Cirurgia & Procedimentos', href: '#especialidades', icon: Activity },
      { label: 'Clínica & Diagnóstico', href: '#especialidades', icon: Heart },
      { label: 'Saúde Preventiva', href: '#especialidades', icon: Users },
      { label: 'Reabilitação', href: '#especialidades', icon: Activity },
      { label: 'Medicina Ocupacional', href: '#especialidades', icon: Briefcase },
    ],
  },
  { label: 'Médicos', href: '#medicos', icon: Users },
  { label: 'Como Funciona', href: '#como-funciona', icon: null },
  { label: 'Localização', href: '#localizacao', icon: null },
]

export default function Navbar() {
  const { toggle, isDark } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500',
          isScrolled
            ? 'glass shadow-[var(--shadow-md)] py-3'
            : 'py-5',
        )}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center justify-between"
            aria-label="Navegação principal"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="OmniHealth - Página inicial"
            >
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-indigo-500/20 rounded-xl blur-sm group-hover:bg-indigo-500/30 transition-all duration-300" />
                <div className="relative w-9 h-9 bg-gradient-to-br from-indigo-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Heart
                    className="w-4.5 h-4.5 text-white"
                    aria-hidden="true"
                    strokeWidth={2.5}
                    size={18}
                  />
                </div>
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

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1" ref={dropdownRef}>
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className={cn(
                        'flex items-center gap-1 px-3.5 py-2 rounded-lg text-[14px] font-500 transition-all duration-200',
                        'hover:bg-indigo-500/8',
                        activeDropdown === item.label
                          ? 'text-indigo-400'
                          : 'text-[var(--fg-muted)] hover:text-[var(--fg)]',
                      )}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          'transition-transform duration-200',
                          activeDropdown === item.label && 'rotate-180',
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-3.5 py-2 rounded-lg text-[14px] font-500 transition-all duration-200 text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-indigo-500/8"
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute top-full left-0 mt-2 w-64 glass rounded-2xl p-2 shadow-[var(--shadow-lg)]"
                        role="menu"
                      >
                        {item.children.map((child, i) => (
                          <motion.div
                            key={child.label}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.04 }}
                          >
                            <Link
                              href={child.href}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-500 text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-indigo-500/8 transition-all duration-150 group"
                              role="menuitem"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <child.icon
                                size={15}
                                className="text-indigo-400 group-hover:text-indigo-300 transition-colors flex-shrink-0"
                                aria-hidden="true"
                              />
                              {child.label}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              <motion.button
                onClick={toggle}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200 hover:bg-indigo-500/10"
                style={{ color: 'var(--fg-muted)' }}
                aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
              >
                {isDark
                  ? <Sun size={17} aria-hidden="true" />
                  : <Moon size={17} aria-hidden="true" />
                }
              </motion.button>

              {/* CTA */}
              <motion.a
                href="tel:+551140028922"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-[13px] font-600 transition-colors duration-200"
                aria-label="Ligar para agendamento"
              >
                <Phone size={14} aria-hidden="true" />
                Agendar
              </motion.a>

              {/* Mobile toggle */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center hover:bg-indigo-500/10 transition-colors"
                style={{ color: 'var(--fg-muted)' }}
                aria-label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={isMobileOpen}
                aria-controls="mobile-menu"
              >
                {isMobileOpen
                  ? <X size={20} aria-hidden="true" />
                  : <Menu size={20} aria-hidden="true" />
                }
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 glass md:hidden flex flex-col shadow-[var(--shadow-lg)]"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
            >
              <div className="flex items-center justify-between p-5 border-b border-[var(--border)]">
                <span className="text-[15px] font-600" style={{ color: 'var(--fg)' }}>Menu</span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-red-500/10 transition-colors"
                  style={{ color: 'var(--fg-muted)' }}
                  aria-label="Fechar menu"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-4 space-y-1" aria-label="Navegação mobile">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    {item.children ? (
                      <div>
                        <p className="px-3 py-1 text-[11px] font-600 uppercase tracking-widest" style={{ color: 'var(--fg-subtle)' }}>
                          {item.label}
                        </p>
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setIsMobileOpen(false)}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-500 text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-indigo-500/8 transition-all duration-150"
                          >
                            <child.icon size={15} className="text-indigo-400 flex-shrink-0" aria-hidden="true" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileOpen(false)}
                        className="flex items-center px-3 py-3 rounded-xl text-[15px] font-500 text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-indigo-500/8 transition-all duration-150"
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              <div className="p-4 border-t border-[var(--border)]">
                <a
                  href="tel:+551140028922"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-600 text-[15px] transition-colors"
                >
                  <Phone size={16} aria-hidden="true" />
                  Ligar para Agendar
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
