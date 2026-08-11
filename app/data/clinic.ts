export const clinic = {
  name: 'ColumnaQuiro',
  address: "Carrer dels Vivons, 29, L'Eixample, 46006 València, Valencia",
  email: 'hola@columnaquiro.com',
  phone: '744 73 53 63',
  mapsUrl: 'https://maps.app.goo.gl/NQEAbzbbg75xxjKU6',
}

export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/columnaquiro/' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100089673685339' },
  { label: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=34744752928' },
]

export interface ScheduleRow {
  dayKey: 'lunes' | 'martes' | 'miercoles' | 'jueves' | 'viernes' | 'finde'
  hours: string | null
}

export const schedule: ScheduleRow[] = [
  { dayKey: 'lunes', hours: null },
  { dayKey: 'martes', hours: '09:00 - 13:00 | 15:00 - 20:00' },
  { dayKey: 'miercoles', hours: '09:00 - 13:00 | 15:00 - 20:00' },
  { dayKey: 'jueves', hours: '09:00 - 13:00 | 15:00 - 20:00' },
  { dayKey: 'viernes', hours: null },
  { dayKey: 'finde', hours: null },
]

export interface FooterSymptom {
  label: string
  slugEs: string
}

export const symptoms: { es: FooterSymptom[]; en: FooterSymptom[] } = {
  es: [
    { label: 'Escoliosis', slugEs: 'escoliosis' },
    { label: 'Ciática', slugEs: 'ciatica' },
    { label: 'Fibromialgia', slugEs: 'fibromialgia' },
    { label: 'Lumbalgia', slugEs: 'lumbalgia' },
    { label: 'Hernia discal', slugEs: 'hernia-discal' },
    { label: 'Dolor de cuello', slugEs: 'dolor-de-cuello' },
    { label: 'Estrés y depresión', slugEs: 'estres-y-depresion' },
    { label: 'Síndrome del túnel carpiano', slugEs: 'sindrome-del-tunel-carpiano' },
    { label: 'Dolor de cervicales y cabeza', slugEs: 'dolor-de-cervicales-y-cabeza' },
  ],
  en: [
    { label: 'Scoliosis', slugEs: 'escoliosis' },
    { label: 'Sciatica', slugEs: 'ciatica' },
    { label: 'Fibromyalgia', slugEs: 'fibromialgia' },
    { label: 'Lower back pain', slugEs: 'lumbalgia' },
    { label: 'Herniated disc', slugEs: 'hernia-discal' },
    { label: 'Neck pain', slugEs: 'dolor-de-cuello' },
    { label: 'Stress and depression', slugEs: 'estres-y-depresion' },
    { label: 'Carpal tunnel syndrome', slugEs: 'sindrome-del-tunel-carpiano' },
    { label: 'Neck and head pain', slugEs: 'dolor-de-cervicales-y-cabeza' },
  ],
}

export const legalLinks = [
  { key: 'privacidad', routeKey: 'privacidad' },
  { key: 'aviso', routeKey: 'aviso-legal' },
  { key: 'cookies', routeKey: 'cookies' },
]
