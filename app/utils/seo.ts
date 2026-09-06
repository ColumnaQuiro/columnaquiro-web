export const SITE_URL = 'https://columnaquiro.com'
export const SITE_NAME = 'ColumnaQuiro'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/home-hero.jpg`

export const clinicSchema = {
  name: 'ColumnaQuiro',
  legalName: 'ColumnaQuiro S.L.',
  telephone: '+34744735363',
  email: 'hola@columnaquiro.com',
  streetAddress: "Carrer dels Vivons, 29, Bajo Izquierdo, L'Eixample",
  addressLocality: 'Valencia',
  postalCode: '46006',
  addressRegion: 'Valencia',
  addressCountry: 'ES',
  // Taken from the clinic's own Google Business Profile listing (the `@lat,lng`
  // in mapsUrl below). Cross-checked against OpenStreetMap's geocode of
  // 29 Carrer dels Vivons, 46006, which agrees to within ~5 m.
  latitude: 39.460101,
  longitude: -0.371892,
  mapsUrl: 'https://maps.app.goo.gl/NQEAbzbbg75xxjKU6',
  sameAs: [
    'https://www.instagram.com/columnaquiro/',
    'https://www.facebook.com/profile.php?id=100089673685339',
  ],
  openingHours: ['Tu 09:00-13:00', 'Tu 15:00-20:00', 'We 09:00-13:00', 'We 15:00-20:00', 'Th 09:00-13:00', 'Th 15:00-20:00'],
}
