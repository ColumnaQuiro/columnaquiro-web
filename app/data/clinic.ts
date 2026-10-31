import { synced } from './google-reviews-sync'

export const clinic = {
  name: 'ColumnaQuiro',
  address: 'Carrer dels Vivons, 29, Bajo Izquierdo, 46006 València',
  email: 'hola@columnaquiro.com',
  phone: '744 73 53 63',
  // Always link this, never build a tel: href from `phone`: a template that did
  // (with a double-escaped regex) shipped `tel:744 73 53 63` in the footer.
  phoneHref: 'tel:+34744735363',
  mapsUrl: 'https://maps.app.goo.gl/NQEAbzbbg75xxjKU6',
}

// Shown in the hero, the reviews block and the booking page. Normally read
// from `reviews.generated.json`, which the weekly Google reviews sync keeps
// current (see README). The literals are the fallback when that file is
// missing: read from the Google Business Profile listing (the mapsUrl above)
// on 25 Oct 2026. It is a trust signal on every main page, and a stale "159"
// reads worse than a round "150+", which is the whole reason for the sync.
export const googleRating = {
  value: synced?.rating ?? 4.9,
  count: synced?.count ?? 159,
  // The listing, for "see all reviews" and the badge.
  url: 'https://maps.app.goo.gl/NQEAbzbbg75xxjKU6',
  // Opens Google's review dialog for the listing straight away, signed-in
  // visitor permitting, instead of landing on the profile and leaving the
  // patient to find the button. The Place ID is the listing's (it is also the
  // GBP_PLACE_ID the reviews sync uses).
  writeReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJTdAqy2xJYA0RzzX3L8LwfwQ',
}

// How patients are told to get here. Supplied by the clinic.
export const transit = {
  es: 'Metro Xàtiva · Parking del Mercado de Ruzafa',
  en: 'Metro Xàtiva · Mercado de Ruzafa car park',
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
