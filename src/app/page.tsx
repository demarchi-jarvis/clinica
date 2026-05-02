import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import StatsSection from '@/components/sections/StatsSection'
import HowItWorks from '@/components/sections/HowItWorks'
import SpecialtyGrid from '@/components/sections/SpecialtyGrid'
import DoctorCards from '@/components/sections/DoctorCards'
import Testimonials from '@/components/sections/Testimonials'
import Privacy from '@/components/sections/Privacy'
import Location from '@/components/sections/Location'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export const metadata: Metadata = {
  title: 'OmniHealth — A Melhor Clínica de Vassouras e Região',
  description:
    'OmniHealth é a clínica multidisciplinar referência em Vassouras e região. 35+ especialidades médicas, equipe especializada, tecnologia avançada. Agende sua consulta: (24) 2471-0000.',
  alternates: { canonical: 'https://omnihealth.com.br' },
}

const clinicJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'OmniHealth — Clínica Multidisciplinar Vassouras',
  description: 'A melhor clínica multidisciplinar de Vassouras e região com 35+ especialidades médicas',
  url: 'https://omnihealth.com.br',
  telephone: '+55-24-2471-0000',
  email: 'contato@omnihealth.com.br',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Expedicionário Oswaldo de Almeida Ramos, 250',
    addressLocality: 'Vassouras',
    addressRegion: 'RJ',
    postalCode: '27700-000',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -22.4039,
    longitude: -43.6644,
  },
  areaServed: [
    'Vassouras', 'Paraíba do Sul', 'Três Rios', 'Valença',
    'Mendes', 'Paty do Alferes', 'Miguel Pereira', 'Barra do Piraí',
  ],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '13:00' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '1847',
    bestRating: '5',
  },
  medicalSpecialty: [
    'Cardiology', 'Neurology', 'Oncology', 'Orthopedics',
    'Gynecology', 'Pediatrics', 'Dermatology', 'Psychiatry',
    'Physiotherapy', 'Gastroenterology',
  ],
  hasMap: 'https://maps.google.com/?q=Vassouras+RJ',
  priceRange: '$$',
  currenciesAccepted: 'BRL',
  paymentAccepted: 'Cash, Credit Card, Health Insurance',
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd) }} />

      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-indigo-600 focus:text-white focus:text-sm focus:font-600"
        >
          Pular para o conteúdo principal
        </a>

        {/* 1. Hero */}
        <Hero />

        {/* 2. Marquee ticker */}
        <Marquee />

        {/* 3. Numbers */}
        <StatsSection />

        {/* 4. How it works */}
        <HowItWorks />

        {/* 5. Specialties */}
        <SpecialtyGrid />

        {/* 6. Doctor cards */}
        <DoctorCards />

        {/* 7. Testimonials */}
        <Testimonials />

        {/* 8. Privacy */}
        <Privacy />

        {/* 9. Location */}
        <Location />

        {/* 10. Final CTA */}
        <section className="py-20" aria-label="Chamada para agendamento">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="rounded-3xl p-10 sm:p-14 relative overflow-hidden noise"
              style={{
                background: 'linear-gradient(135deg, rgba(79,70,229,0.14) 0%, rgba(6,182,212,0.08) 50%, rgba(16,185,129,0.10) 100%)',
                border: '1px solid rgba(79,70,229,0.20)',
              }}
            >
              <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-20"
                style={{ background: 'radial-gradient(circle, #4f46e5, transparent)' }} aria-hidden="true" />
              <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full blur-3xl opacity-15"
                style={{ background: 'radial-gradient(circle, #10b981, transparent)' }} aria-hidden="true" />

              <div className="relative z-10">
                <p className="text-[11px] font-700 uppercase tracking-[0.2em] mb-4" style={{ color: 'rgba(129,140,248,0.8)' }}>
                  Vassouras e Região
                </p>
                <h2 className="text-[32px] sm:text-[42px] font-900 tracking-tight mb-5 leading-[1.05]" style={{ color: 'var(--fg)' }}>
                  Pronto para cuidar da{' '}
                  <span className="gradient-text">sua saúde?</span>
                </h2>
                <p className="text-[16px] mb-8 max-w-lg mx-auto leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                  Agende sua consulta hoje mesmo. Atendemos Vassouras, Paraíba do Sul, Três Rios, Valença e toda a região sul-fluminense.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="tel:+552424710000"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-700 text-[15px] transition-all duration-200"
                    style={{ background: 'linear-gradient(135deg, #4f46e5, #06b6d4)', boxShadow: '0 8px 32px rgba(79,70,229,0.40)' }}
                  >
                    Ligar: (24) 2471-0000
                  </a>
                  <a
                    href="https://wa.me/5524999990000?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-700 text-[15px] transition-all duration-200 border hover:bg-emerald-500/8"
                    style={{ color: 'var(--fg)', borderColor: 'var(--border-strong)', background: 'var(--bg)' }}
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating WhatsApp */}
      <WhatsAppButton />
    </>
  )
}
