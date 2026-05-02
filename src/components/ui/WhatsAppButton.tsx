'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MessageCircle, X, Phone } from 'lucide-react'

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 12 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="glass-strong rounded-3xl p-5 w-72 shadow-[var(--shadow-xl)]"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={17} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[13px] font-700" style={{ color: 'var(--fg)' }}>OmniHealth</p>
                  <p className="text-[10px] flex items-center gap-1" style={{ color: 'var(--fg-subtle)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Online agora
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-red-500/10 transition-colors"
                style={{ color: 'var(--fg-subtle)' }}
                aria-label="Fechar"
              >
                <X size={14} />
              </button>
            </div>

            <div
              className="rounded-2xl p-3.5 mb-4 text-[13px] leading-relaxed"
              style={{ background: 'var(--bg-3)', color: 'var(--fg-muted)' }}
            >
              Olá! Como podemos ajudar? Agende sua consulta com um dos nossos especialistas em Vassouras. 😊
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/5524999990000?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20OmniHealth%20Vassouras."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white text-[13px] font-600 transition-colors"
                aria-label="Abrir WhatsApp para agendamento"
              >
                <MessageCircle size={15} aria-hidden="true" />
                Agendar pelo WhatsApp
              </a>
              <a
                href="tel:+552424710000"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-2xl border text-[13px] font-500 transition-colors hover:bg-indigo-500/8"
                style={{ borderColor: 'var(--border-strong)', color: 'var(--fg)' }}
                aria-label="Ligar agora"
              >
                <Phone size={14} aria-hidden="true" />
                Ligar agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-[0_8px_24px_rgba(16,185,129,0.50)] transition-colors"
        aria-label="Abrir chat WhatsApp"
        aria-expanded={open}
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-[9px] font-800 text-white" aria-hidden="true">1</span>
        <AnimatePresence mode="wait">
          {open
            ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={22} aria-hidden="true" />
              </motion.div>
            : <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <MessageCircle size={22} aria-hidden="true" />
              </motion.div>
          }
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
