import { Doctor } from '@/types'

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    slug: 'dr-eduardo-silva',
    name: 'Dr. Eduardo Silva',
    title: 'Cardiologista Intervencionista',
    specialty: 'Cardiologia',
    specialtySlug: 'cardiologia',
    crm: 'CRM-SP 123456',
    bio: 'Especialista em cardiologia intervencionista com mais de 15 anos de experiência em hemodinâmica e eletrofisiologia.',
    imageUrl: '/images/doctors/dr-eduardo.jpg',
    experience: 15,
    education: ['Medicina – USP', 'Residência em Cardiologia – InCor', 'Fellowship em Hemodinâmica – Mayo Clinic'],
    awards: ['Melhor Médico SP 2022', 'Publicações em NEJM e Lancet'],
    availableDays: ['Segunda', 'Quarta', 'Sexta'],
  },
  {
    id: '2',
    slug: 'dra-ana-costa',
    name: 'Dra. Ana Costa',
    title: 'Cirurgiã Plástica',
    specialty: 'Cirurgia Plástica',
    specialtySlug: 'cirurgia-plastica',
    crm: 'CRM-SP 234567',
    bio: 'Especialista em cirurgia plástica reconstrutiva e estética, com foco em técnicas minimamente invasivas.',
    imageUrl: '/images/doctors/dra-ana.jpg',
    experience: 12,
    education: ['Medicina – UNIFESP', 'Residência em Cirurgia Plástica – Hospital das Clínicas', 'Pós-graduação em Estética – Paris'],
    awards: ['Fellow SBCP', 'Board Certified ISAPS'],
    availableDays: ['Terça', 'Quinta'],
  },
  {
    id: '3',
    slug: 'dr-marcos-pereira',
    name: 'Dr. Marcos Pereira',
    title: 'Neurocirurgião',
    specialty: 'Neurocirurgia',
    specialtySlug: 'neurocirurgia',
    crm: 'CRM-SP 345678',
    bio: 'Neurocirurgião com especialização em cirurgia minimamente invasiva da coluna e tumores cerebrais.',
    imageUrl: '/images/doctors/dr-marcos.jpg',
    experience: 18,
    education: ['Medicina – UNICAMP', 'Residência em Neurocirurgia – USP', 'Fellowship – Johns Hopkins'],
    awards: ['Prêmio Excelência SBN 2023'],
    availableDays: ['Segunda', 'Terça', 'Quinta'],
  },
  {
    id: '4',
    slug: 'dra-julia-santos',
    name: 'Dra. Júlia Santos',
    title: 'Oncologista Clínica',
    specialty: 'Oncologia Clínica',
    specialtySlug: 'oncologia-clinica',
    crm: 'CRM-SP 456789',
    bio: 'Oncologista com expertise em imunoterapia e terapias-alvo para tumores sólidos e hematológicos.',
    imageUrl: '/images/doctors/dra-julia.jpg',
    experience: 10,
    education: ['Medicina – PUC-SP', 'Residência em Oncologia – A.C. Camargo', 'Fellowship em Imunoterapia – MD Anderson'],
    awards: ['ASCO Merit Award 2022'],
    availableDays: ['Segunda', 'Quarta', 'Sexta'],
  },
]

export const getDoctorBySlug = (slug: string) =>
  DOCTORS.find(d => d.slug === slug)

export const getDoctorsBySpecialty = (specialtySlug: string) =>
  DOCTORS.filter(d => d.specialtySlug === specialtySlug)
