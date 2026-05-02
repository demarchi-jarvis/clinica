'use client'

import { motion } from 'framer-motion'
import { Award, Calendar, Star, GraduationCap, ChevronRight } from 'lucide-react'
import { DOCTORS } from '@/lib/data/doctors'

export default function DoctorCards() {
  return (
    <section
      id="medicos"
      className="py-20 lg:py-28"
      style={{ background: 'var(--bg-2)' }}
      aria-label="Nossos especialistas"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-4"
            >
              <span className="text-[11px] font-600 uppercase tracking-widest" style={{ color: 'var(--fg-subtle)' }}>
                Nossa Equipe
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="text-[36px] sm:text-[44px] font-800 tracking-tight"
              style={{ color: 'var(--fg)' }}
            >
              Especialistas de{' '}
              <span className="gradient-text">alto nível</span>
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="#"
            className="flex items-center gap-2 text-[14px] font-600 transition-colors duration-200 hover:opacity-80 whitespace-nowrap"
            style={{ color: 'var(--primary)' }}
          >
            Ver todos os médicos
            <ChevronRight size={16} aria-hidden="true" />
          </motion.a>
        </div>

        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          role="list"
          aria-label="Lista de especialistas"
        >
          {DOCTORS.map((doctor, i) => (
            <motion.article
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              role="listitem"
              className="group relative rounded-3xl border overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
              style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
              aria-label={`Dr(a). ${doctor.name}, ${doctor.specialty}`}
            >
              {/* Image area */}
              <div
                className="relative h-52 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(79,70,229,0.15) 0%, rgba(16,185,129,0.1) 100%)',
                }}
              >
                {/* Placeholder avatar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-800"
                      style={{
                        background: 'linear-gradient(135deg, rgba(79,70,229,0.3), rgba(16,185,129,0.2))',
                        color: 'var(--fg)',
                        border: '2px solid rgba(79,70,229,0.2)',
                      }}
                    >
                      {doctor.name.split(' ').slice(1, 3).map(n => n[0]).join('')}
                    </div>
                    {/* Online indicator */}
                    <div
                      className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 border-2"
                      style={{ borderColor: 'var(--bg)' }}
                      aria-label="Disponível para consulta"
                    />
                  </div>
                </div>

                {/* Rating badge */}
                <div
                  className="absolute top-3 right-3 flex items-center gap-1 glass rounded-full px-2.5 py-1"
                >
                  <Star size={11} className="text-amber-400 fill-amber-400" aria-hidden="true" />
                  <span className="text-[11px] font-600" style={{ color: 'var(--fg)' }}>4.9</span>
                </div>

                {/* Experience badge */}
                <div
                  className="absolute bottom-3 left-3 glass rounded-full px-2.5 py-1 flex items-center gap-1"
                >
                  <Award size={11} className="text-indigo-400" aria-hidden="true" />
                  <span className="text-[11px] font-600" style={{ color: 'var(--fg)' }}>
                    {doctor.experience} anos
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-[10px] font-700 uppercase tracking-widest mb-1" style={{ color: 'rgba(79,70,229,0.8)' }}>
                  {doctor.specialty}
                </p>
                <h3 className="text-[16px] font-700 mb-0.5 leading-tight" style={{ color: 'var(--fg)' }}>
                  {doctor.name}
                </h3>
                <p className="text-[12px] mb-3" style={{ color: 'var(--fg-muted)' }}>
                  {doctor.title}
                </p>

                <p className="text-[11px] font-500 mb-4 line-clamp-2" style={{ color: 'var(--fg-subtle)' }}>
                  {doctor.crm}
                </p>

                {/* Education */}
                <div className="space-y-1 mb-4" aria-label="Formação">
                  {doctor.education.slice(0, 2).map((edu) => (
                    <div key={edu} className="flex items-start gap-1.5">
                      <GraduationCap
                        size={11}
                        className="mt-0.5 flex-shrink-0 text-indigo-400"
                        aria-hidden="true"
                      />
                      <span className="text-[11px] leading-tight" style={{ color: 'var(--fg-muted)' }}>
                        {edu}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Available days */}
                <div className="flex flex-wrap gap-1 mb-5" aria-label="Dias disponíveis">
                  {doctor.availableDays.map((day) => (
                    <span
                      key={day}
                      className="px-2 py-0.5 rounded-lg text-[10px] font-600"
                      style={{
                        background: 'rgba(79,70,229,0.08)',
                        color: 'rgba(129,140,248,0.9)',
                      }}
                    >
                      {day}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className="group/btn w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border text-[13px] font-600 transition-all duration-200 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white"
                  style={{
                    borderColor: 'var(--border-strong)',
                    color: 'var(--fg)',
                  }}
                  aria-label={`Agendar com ${doctor.name}`}
                >
                  <Calendar size={14} aria-hidden="true" />
                  Agendar Consulta
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
