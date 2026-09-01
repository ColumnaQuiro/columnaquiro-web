export interface TeamMember {
  name: string
  role: string
  bio: string
  photo: string
  bioPath: string
  linkedin?: string
}

export const team: Record<'es' | 'en', TeamMember[]> = {
  es: [
    {
      name: 'Léa Guido',
      role: 'Doctora en Quiropráctica',
      bio: 'Lea es una quiropráctica comprometida con el bienestar de sus pacientes, ofreciendo un enfoque personalizado para aliviar dolencias y mejorar la calidad de vida de forma natural.',
      photo: '/assets/images/team-lea.avif',
      bioPath: '/sobre-nosotros/equipo/lea-guido',
      linkedin: 'https://es.linkedin.com/in/lea-guido-a70b4a1bb',
    },
    {
      name: 'Jordana Aguar',
      role: 'Doctora en Quiropráctica',
      bio: 'Jordana es quiropráctica especializada en el cuidado materno-infantil, combinando distintas técnicas para acompañar a cada paciente y su familia hacia un equilibrio y bienestar duradero.',
      photo: '/assets/images/team-jordana.jpg',
      bioPath: '/sobre-nosotros/equipo/jordana-aguar',
    },
  ],
  en: [
    {
      name: 'Léa Guido',
      role: 'Doctor of Chiropractic',
      bio: 'Léa is a chiropractor committed to the well-being of her patients, offering a personalized approach to relieve ailments and improve quality of life naturally.',
      photo: '/assets/images/team-lea.avif',
      bioPath: '/en/about-us/our-team/lea-guido',
      linkedin: 'https://es.linkedin.com/in/lea-guido-a70b4a1bb',
    },
    {
      name: 'Jordana Aguar',
      role: 'Doctor of Chiropractic',
      bio: 'Jordana is a chiropractor specialized in maternal and infant care, combining different techniques to guide each patient and their family toward lasting balance and well-being.',
      photo: '/assets/images/team-jordana.jpg',
      bioPath: '/en/about-us/our-team/jordana-aguar',
    },
  ],
}
