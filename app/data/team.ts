export interface TeamMember {
  name: string
  role: string
  bio: string
  photo: string
  linkedin: string
}

export const team: Record<'es' | 'en', TeamMember[]> = {
  es: [
    {
      name: 'Léa Guido',
      role: 'Doctora en Quiropráctica',
      bio: 'Lea es una quiropráctica comprometida con el bienestar de sus pacientes, ofreciendo un enfoque personalizado para aliviar dolencias y mejorar la calidad de vida de forma natural.',
      photo: '/assets/images/team-lea.avif',
      linkedin: 'https://es.linkedin.com/in/lea-guido-a70b4a1bb',
    },
  ],
  en: [
    {
      name: 'Léa Guido',
      role: 'Doctor of Chiropractic',
      bio: 'Léa is a chiropractor committed to the well-being of her patients, offering a personalized approach to relieve ailments and improve quality of life naturally.',
      photo: '/assets/images/team-lea.avif',
      linkedin: 'https://es.linkedin.com/in/lea-guido-a70b4a1bb',
    },
  ],
}
