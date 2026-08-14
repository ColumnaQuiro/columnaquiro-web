export type Locale = 'es' | 'en'

// Netlify serves every prerendered route as a directory (page/index.html) and
// 301-redirects the no-slash form to the trailing-slash form. Canonical URLs
// and the sitemap must point at the real (trailing-slash) URL, not the one
// that just redirects — otherwise crawlers see a self-canonical mismatch.
export function withTrailingSlash(path: string): string {
  return path === '/' || path.endsWith('/') ? path : `${path}/`
}

// Pages embedding the PracticeHub booking widget — it only initializes
// reliably on a real page load, not a client-side SPA transition.
export const BOOKING_WIDGET_PATHS = [
  '/reserva-cita',
  '/en/book-appointment',
  '/promocion-especial-primera-visita-quiropractica',
  '/promocion-especial-primera-visita-quiropractica-con-natacha',
]

export interface PagePair {
  key: string
  es: string
  en: string
}

export const PAGES: PagePair[] = [
  { key: 'home', es: '/', en: '/en' },
  { key: 'que-es', es: '/que-es-la-quiropractica', en: '/en/what-is-chiropractic' },
  { key: 'como-funciona', es: '/como-funciona', en: '/en/how-does-it-work' },
  {
    key: 'faq',
    es: '/que-es-la-quiropractica/preguntas-frecuentes',
    en: '/en/what-is-chiropractic/faqs',
  },
  { key: 'para-todos', es: '/para-quien-sirve-la-quiropractica', en: '/en/who-is-chiropractic-for' },
  { key: 'equipo', es: '/sobre-nosotros/equipo', en: '/en/about-us/our-team' },
  {
    key: 'centro',
    es: '/sobre-nosotros/centro-quiropractico-valencia',
    en: '/en/about-us/chiropractic-valencia',
  },
  { key: 'contacto', es: '/sobre-nosotros/contacto', en: '/en/about-us/contact' },
  {
    key: 'lea-guido',
    es: '/sobre-nosotros/equipo/lea-guido',
    en: '/en/about-us/our-team/lea-guido',
  },
  { key: 'blog', es: '/blog', en: '/en/blog' },
  { key: 'reserva-cita', es: '/reserva-cita', en: '/en/book-appointment' },
  { key: 'privacidad', es: '/politica-de-privacidad', en: '/en/privacy-policy' },
  { key: 'aviso-legal', es: '/aviso-legal', en: '/en/legal-notice' },
  { key: 'cookies', es: '/politica-de-cookies', en: '/en/cookies-policy' },
]

export const CATEGORY_HUB = { es: '/para-quien-sirve-la-quiropractica', en: '/en/who-is-chiropractic-for' }

export const CATEGORIES: { slugEs: string; slugEn: string }[] = [
  { slugEs: 'trabajadores', slugEn: 'workers' },
  { slugEs: 'bebes-y-ninos', slugEn: 'kids' },
  { slugEs: 'embarazadas', slugEn: 'pregnant-women' },
  { slugEs: 'deportistas', slugEn: 'athletes' },
  { slugEs: 'personas-mayores', slugEn: 'elder-people' },
  { slugEs: 'discapacidades-motoras-intelectuales', slugEn: 'disabled-people' },
]

export const BLOG_HUB = { es: '/blog', en: '/en/blog' }

// Real production slugs differ per locale (not a shared slug), so each post's
// ES/EN pair is tracked explicitly here rather than assumed identical.
export const BLOG_SLUG_PAIRS: { es: string; en: string | null }[] = [
  { es: '10-beneficios-visitar-quiropractico-regularmente', en: '10-benefits-of-visiting-chiropractor-regularly' },
  { es: 'trabajas-en-oficina-10-micro-estiramientos-avalados', en: '10-chiropractor-backed-micro-stretches-you-can-do-on-your-desk' },
  { es: '3-historias-reales-de-pacientes-que-mejoraron-su-vida', en: '3-real-stories-of-patients-who-improved-their-lives' },
  { es: 'escoliosis-adolescencia', en: 'adolescent-scoliosis' },
  { es: 'esclerosis-multiple-agresiva', en: 'aggressive-multiple-sclerosis' },
  { es: 'articulacion-sacroiliaca-inflamada-sintomas-y-soluciones', en: 'solutions-for-inflamed-sacroiliac-joint' },
  { es: 'dolor-de-espalda', en: 'back-pain' },
  { es: 'los-mejores-quiropracticos-valencia', en: 'best-chiropractors-in-valencia' },
  { es: 'lactancia-y-quiropractica', en: 'breastfeeding-and-chiropractic' },
  { es: 'flujo-marron-dolor-de-espalda-baja', en: 'brown-discharge-and-lower-back-pain' },
  { es: 'puede-la-cervical-afectar-el-oido-descubre-como-y-por-que', en: 'can-the-cervical-affect-the-ear' },
  { es: 'tunel-carpiano-causas-y-soluciones', en: 'carpal-tunnel-causes-and-solutions' },
  { es: 'protusion-discal-cervical', en: 'cervical-disc-protrusion' },
  { es: 'lordosis-cervical', en: 'cervical-lordosis' },
  { es: 'migrana-cervical-que-es-y-como-aliviarla', en: 'cervical-migraine' },
  { es: 'rectificacion-de-cervicales-sintomas-y-tratamiento-quiropractico', en: 'cervical-rectification-symptoms-and-chiropractic-care' },
  { es: 'quiropractica-para-vertigo-solucion-natural-y-efectiva', en: 'chiropractic-for-vertigo' },
  { es: 'pros-y-contras-de-la-quiropractica', en: 'chiropractic-in-valencia-benefits-considerations' },
  { es: 'quiropractica-clave-para-la-escoliosis', en: 'chiropractic-key-to-fighting-scoliosis' },
  { es: 'preparacion-quiropractica-para-la-maraton-de-valencia', en: 'chiropractic-preparation-for-the-valencia-marathon-how-to-avoid-injuries' },
  { es: 'ciatica-en-el-embarazo', en: 'sciatica-in-pregnancy' },
  { es: 'dolor-en-el-coxis-al-sentarse-y-levantarse-soluciones-efectivas', en: 'coccyx-pain-when-sitting-and-standing-up' },
  { es: 'como-eliminar-pitidos-en-los-oidos-con-quiropractica', en: 'how-to-eliminate-ringing-in-the-ears-with-chiropractic' },
  { es: 'como-mejorar-tu-capacidad-de-adaptacion', en: 'how-to-improve-your-ability-to-adapt' },
  { es: 'como-seleccionar-la-mochila-perfecta-para-tus-hijo', en: 'select-the-perfect-backpack-for-your-child' },
  { es: 'guia-completa-para-tratar-el-dolor-de-cabeza-por-cervicales', en: 'complete-guide-to-treating-cervical-headache' },
  { es: 'conmocion-cerebral', en: 'concussion' },
  { es: 'contractura-en-el-cuello-causas-sintomas-y-soluciones', en: 'neck-contracture' },
  { es: 'contracturas-musculares-lumbares', en: 'lumbar-muscle-contractures' },
  { es: 'coxalgia-que-es-sintomas-y-beneficios-de-la-quiropractica', en: 'coxalgia' },
  { es: 'coxartrosis-sintomas-y-beneficios-de-la-quiropractica', en: 'coxarthrosis-symptoms-and-benefits-of-chiropractic' },
  { es: 'cranio-fascial-dynamics', en: 'fascial-dynamics' },
  { es: 'cuanto-cuesta-un-quiropractico', en: 'how-much-does-a-chiropractor-cost' },
  { es: 'deshidratacion-discales-sintomas-y-soluciones-quiropracticas', en: 'disc-dehydration-symptoms-and-chiropractic-solutions' },
  { es: 'diferencias-entre-artritis-y-artrosis', en: 'differences-between-arthritis-and-osteoarthritis' },
  { es: 'diferencias-entre-osteopata-y-quirpractico', en: 'difference-chiropractors-vs-osteopaths' },
  { es: 'dolor-de-cadera-y-piernas', en: 'hip-and-leg-pain-what-it-is-and-how-to-treat-it' },
  { es: 'dolor-de-espalda-media', en: 'right-middle-back-pain' },
  { es: 'dormir-boca-abajo-riesgos-y-beneficios', en: 'sleeping-on-your-stomach-risks' },
  { es: 'es-bueno-crujirse-la-espalda', en: 'is-it-good-to-crunch-your-back' },
  { es: 'es-bueno-crujirse-los-dedos-descubre-la-verdad-aqui', en: null },
  { es: 'es-bueno-el-calor-para-las-hernias-discales', en: 'is-heat-good-for-herniated-discs' },
  { es: 'es-malo-que-te-crujan-los-huesos-descubre-la-verdad', en: 'is-it-bad-to-have-your-bones-crunching' },
  { es: 'gonalgia', en: 'gonalgia-understanding-knee-pain' },
  { es: 'hipocondria-esclerosis-multiple', en: 'hypochondria-multiple-sclerosis' },
  { es: 'importancia-gateo-bebes', en: 'importance-crawling-infants' },
  { es: 'respiracion-nasal-vs-respiracion-bucal', en: 'nasal-breathing-vs-mouth-breathing' },
  { es: 'pinzamiento-nervio-trapecio', en: 'trapezius-nerve-grip' },
  { es: 'por-que-me-duele-la-cadera-si-soy-joven', en: 'why-does-my-hip-hurt-if-im-young' },
  { es: 'punto-gatillo-en-la-espalda-sintomas-y-solucion-quiropractica', en: 'solutions-trigger-point-on-the-back' },
  { es: 'que-hace-un-quiropractico-beneficios-y-tecnicas', en: 'what-does-a-chiropractor-do' },
  { es: 'russafira', en: 'russafira' },
  { es: 'tengo-escoliosis-y-me-cuesta-respirar', en: 'scoliosis-hard-to-breathe' },
  { es: 'tecnica-webster-optimizando-la-alineacion-pelvica-durante-el-embarazo', en: 'webster-technique' },
  { es: 'valencia-se-endereza-por-que-la-quiropractica-gana-terreno-frente-al-dolor-de-espalda', en: 'valencia-se-endereza-por-que-la-quiropractica-gana-terreno-frente-al-dolor-de-espalda' },
]

export const SYMPTOM_HUB = { es: '/sintomas', en: '/en/symptoms' }

export const SYMPTOM_SLUG_PAIRS: { es: string; en: string }[] = [
  { es: 'artrosis', en: 'osteoarthritis' },
  { es: 'deficit-de-atencion', en: 'attention-deficit' },
  { es: 'espectro-autistico', en: 'autistic-spectrum' },
  { es: 'dolor-de-espalda', en: 'back-pain' },
  { es: 'bajo-rendimiento', en: 'low-performance' },
  { es: 'braquicefalia', en: 'brachycephaly' },
  { es: 'sindrome-del-tunel-carpiano', en: 'carpal-tunnel-syndrome' },
  { es: 'ciatica', en: 'sciatica' },
  { es: 'colicos', en: 'colic' },
  { es: 'estrenimiento', en: 'constipation' },
  { es: 'dislexia', en: 'dyslexia' },
  { es: 'dolor-de-cervicales-y-cabeza', en: 'neck-and-headache-pain' },
  { es: 'dolor-de-cuello', en: 'neck-pain' },
  { es: 'escoliosis', en: 'scoliosis' },
  { es: 'estres-y-depresion', en: 'stress-and-depression' },
  { es: 'fibromialgia', en: 'fibromyalgia' },
  { es: 'hernia-discal', en: 'herniated-disc' },
  { es: 'lumbalgia', en: 'low-back-pain' },
  { es: 'retraso-motor', en: 'motor-delay' },
  { es: 'reflujo', en: 'reflux' },
]

export function pathFor(key: string, locale: Locale): string {
  return PAGES.find((p) => p.key === key)?.[locale] ?? '/'
}

export function resolveLocalizedPaths(path: string): { es: string; en: string } | null {
  for (const page of PAGES) {
    if (page.es === path || page.en === path) return { es: page.es, en: page.en }
  }

  for (const category of CATEGORIES) {
    const esPath = `${CATEGORY_HUB.es}/${category.slugEs}`
    const enPath = `${CATEGORY_HUB.en}/${category.slugEn}`
    if (esPath === path || enPath === path) return { es: esPath, en: enPath }
  }

  if (path.startsWith(`${BLOG_HUB.es}/`)) {
    const slug = path.slice(`${BLOG_HUB.es}/`.length)
    const pair = BLOG_SLUG_PAIRS.find((p) => p.es === slug)
    if (pair?.en) return { es: `${BLOG_HUB.es}/${pair.es}`, en: `${BLOG_HUB.en}/${pair.en}` }
    return null
  }
  if (path.startsWith(`${BLOG_HUB.en}/`)) {
    const slug = path.slice(`${BLOG_HUB.en}/`.length)
    const pair = BLOG_SLUG_PAIRS.find((p) => p.en === slug)
    if (pair) return { es: `${BLOG_HUB.es}/${pair.es}`, en: `${BLOG_HUB.en}/${pair.en}` }
    return null
  }

  if (path.startsWith(`${SYMPTOM_HUB.es}/`)) {
    const slug = path.slice(`${SYMPTOM_HUB.es}/`.length)
    const pair = SYMPTOM_SLUG_PAIRS.find((p) => p.es === slug)
    if (pair) return { es: `${SYMPTOM_HUB.es}/${pair.es}`, en: `${SYMPTOM_HUB.en}/${pair.en}` }
    return null
  }
  if (path.startsWith(`${SYMPTOM_HUB.en}/`)) {
    const slug = path.slice(`${SYMPTOM_HUB.en}/`.length)
    const pair = SYMPTOM_SLUG_PAIRS.find((p) => p.en === slug)
    if (pair) return { es: `${SYMPTOM_HUB.es}/${pair.es}`, en: `${SYMPTOM_HUB.en}/${pair.en}` }
    return null
  }

  return null
}
