import { SITE_NAME, SITE_URL, clinicSchema } from '@/utils/seo'
import { pathFor, withTrailingSlash, type Locale } from '@/utils/site-routes'

// Stable @ids so every JSON-LD block on the site points at the same clinic,
// website and people instead of restating them as anonymous copies. They
// never change with the locale: the Spanish URL is the identifier.
export const CLINIC_ID = `${SITE_URL}/#clinic`
export const WEBSITE_ID = `${SITE_URL}/#website`

export type PractitionerKey = 'lea-guido' | 'jordana-aguar'

interface Practitioner {
  name: string
  photo: string
  college: string
  graduated: number
  // ISO codes; only what the practitioner's own bio states.
  languages?: string[]
  sameAs: string[]
}

export const practitioners: Record<PractitionerKey, Practitioner> = {
  'lea-guido': {
    name: 'Léa Guido',
    photo: '/assets/images/team-lea.avif',
    college: 'Barcelona College of Chiropractic',
    graduated: 2021,
    languages: ['es', 'en', 'fr'],
    sameAs: ['https://es.linkedin.com/in/lea-guido-a70b4a1bb'],
  },
  'jordana-aguar': {
    name: 'Jordana Aguar',
    photo: '/assets/images/team-jordana.jpg',
    college: 'McTimoney College of Chiropractic',
    graduated: 2026,
    sameAs: [],
  },
}

export function practitionerKeyFor(name: string): PractitionerKey | undefined {
  return (Object.keys(practitioners) as PractitionerKey[]).find((key) => practitioners[key].name === name)
}

// "Doctora en Quiropráctica" reads as a PhD in Spanish, and chiropractic is
// not a regulated profession in Spain, so the title says what the degree is:
// a chiropractor who graduated from a named college in a named year.
export function credentialLine(key: PractitionerKey, locale: Locale): string {
  const p = practitioners[key]
  return locale === 'es'
    ? `Quiropráctica · ${key === 'lea-guido' ? 'diplomada' : 'graduada'} por el ${p.college} (${p.graduated})`
    : `Chiropractor · graduate of the ${p.college} (${p.graduated})`
}

export const personId = (key: PractitionerKey) => `${SITE_URL}${withTrailingSlash(pathFor(key, 'es'))}#person`

export function personJsonLd(key: PractitionerKey, locale: Locale) {
  const p = practitioners[key]
  return {
    '@type': 'Person',
    '@id': personId(key),
    name: p.name,
    url: `${SITE_URL}${withTrailingSlash(pathFor(key, locale))}`,
    image: `${SITE_URL}${p.photo}`,
    jobTitle: locale === 'es' ? 'Quiropráctica' : 'Chiropractor',
    alumniOf: { '@type': 'CollegeOrUniversity', name: p.college },
    memberOf: { '@type': 'Organization', name: 'Asociación Española de Quiropráctica (AEQ)' },
    ...(p.languages ? { knowsLanguage: p.languages } : {}),
    ...(p.sameAs.length ? { sameAs: p.sameAs } : {}),
    worksFor: { '@id': CLINIC_ID },
  }
}

// The site-wide graph emitted by the default layout. `Chiropractic` is a
// MedicineSystem value in schema.org, not a business type, so the clinic is a
// MedicalBusiness: the LocalBusiness subtype that carries address, geo and
// opening hours. (MedicalClinic would overclaim for an unregulated profession.)
export function siteGraphJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalBusiness',
        '@id': CLINIC_ID,
        name: clinicSchema.name,
        legalName: clinicSchema.legalName,
        description:
          locale === 'es'
            ? 'Centro quiropráctico en Russafa / L\'Eixample, València. Primera visita 70 € con evaluación completa y primer ajuste.'
            : 'Chiropractic clinic in Russafa / L\'Eixample, Valencia. First visit €70 with a full assessment and first adjustment.',
        url: `${SITE_URL}/`,
        image: `${SITE_URL}/assets/images/home-hero.jpg`,
        logo: `${SITE_URL}/assets/images/logo-quiro.png`,
        telephone: clinicSchema.telephone,
        email: clinicSchema.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: clinicSchema.streetAddress,
          addressLocality: clinicSchema.addressLocality,
          postalCode: clinicSchema.postalCode,
          addressRegion: clinicSchema.addressRegion,
          addressCountry: clinicSchema.addressCountry,
        },
        geo: { '@type': 'GeoCoordinates', latitude: clinicSchema.latitude, longitude: clinicSchema.longitude },
        hasMap: clinicSchema.mapsUrl,
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '13:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'], opens: '15:00', closes: '20:00' },
        ],
        priceRange: locale === 'es' ? 'Primera visita 70 €' : 'First visit €70',
        currenciesAccepted: 'EUR',
        employee: (Object.keys(practitioners) as PractitionerKey[]).map((key) => ({ '@id': personId(key) })),
        sameAs: clinicSchema.sameAs,
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        inLanguage: ['es-ES', 'en-GB'],
        publisher: { '@id': CLINIC_ID },
      },
    ],
  }
}

export interface Crumb {
  name: string
  path: string
}

// Breadcrumbs always start at the home page of the current locale; paths are
// normalised to the trailing-slash form that canonicals use.
export function breadcrumbJsonLd(locale: Locale, crumbs: Crumb[]) {
  const home: Crumb = { name: locale === 'es' ? 'Inicio' : 'Home', path: pathFor('home', locale) }
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [home, ...crumbs].map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${withTrailingSlash(crumb.path)}`,
    })),
  }
}
