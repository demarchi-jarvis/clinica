export interface Specialty {
  id: string
  slug: string
  name: string
  shortDescription: string
  fullDescription: string
  category: SpecialtyCategory
  icon: string
  color: string
  featured: boolean
  procedures?: string[]
}

export type SpecialtyCategory =
  | 'cirurgia'
  | 'clinica'
  | 'preventiva'
  | 'reabilitacao'
  | 'ocupacional'

export interface CategoryMeta {
  id: SpecialtyCategory
  label: string
  description: string
  color: string
  accentColor: string
}

export interface Doctor {
  id: string
  slug: string
  name: string
  title: string
  specialty: string
  specialtySlug: string
  crm: string
  bio: string
  imageUrl: string
  experience: number
  education: string[]
  awards?: string[]
  availableDays: string[]
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface StatItem {
  value: string
  label: string
  suffix?: string
}
