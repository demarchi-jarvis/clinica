import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://omnihealth.com.br'),
  title: {
    default: 'OmniHealth — A Melhor Clínica de Vassouras e Região',
    template: '%s | OmniHealth Vassouras',
  },
  description:
    'OmniHealth é a clínica multidisciplinar referência em Vassouras e região com mais de 35 especialidades médicas, equipe especializada e tecnologia avançada. Agende sua consulta.',
  keywords: [
    'clínica Vassouras', 'médico Vassouras', 'especialidades médicas Vassouras',
    'clínica região sul fluminense', 'saúde Vassouras RJ',
    'consulta médica Vassouras', 'OmniHealth Vassouras',
    'cardiologista Vassouras', 'ortopedista Vassouras',
    'ginecologista Vassouras', 'pediatra Vassouras',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://omnihealth.com.br',
    siteName: 'OmniHealth Vassouras',
    title: 'OmniHealth — A Melhor Clínica de Vassouras e Região',
    description: 'Cuidado integrado com 35+ especialidades em Vassouras e região.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'OmniHealth Vassouras' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OmniHealth — A Melhor Clínica de Vassouras e Região',
    description: 'Cuidado integrado com 35+ especialidades em Vassouras e região.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://omnihealth.com.br' },
}

const themeScript = `(function(){try{var t=localStorage.getItem('omnihealth-theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.classList.toggle('dark',(t||p)==='dark')}catch(e){document.documentElement.classList.add('dark')}})()`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${figtree.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col" style={{ fontFamily: 'var(--font-figtree), system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
