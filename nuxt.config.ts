import tailwindcss from '@tailwindcss/vite'
import { SYMPTOM_HUB, SYMPTOM_SLUG_PAIRS, BLOG_HUB, BLOG_SLUG_PAIRS } from './app/utils/site-routes'

const SITE_URL = 'https://columnaquiro.com'

const symptomRoutes = SYMPTOM_SLUG_PAIRS.flatMap((pair) => [
  `${SYMPTOM_HUB.es}/${pair.es}`,
  `${SYMPTOM_HUB.en}/${pair.en}`,
])

const blogRoutes = BLOG_SLUG_PAIRS.flatMap((pair) =>
  pair.en
    ? [`${BLOG_HUB.es}/${pair.es}`, `${BLOG_HUB.en}/${pair.en}`]
    : [`${BLOG_HUB.es}/${pair.es}`],
)

export default defineNuxtConfig({
  compatibilityDate: '2026-08-10',
  ssr: true,
  devtools: { enabled: false },

  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots'],

  site: {
    url: SITE_URL,
    name: 'ColumnaQuiro',
    defaultLocale: 'es',
  },

  sitemap: {
    excludeAppSources: true,
    sources: ['/api/__sitemap__/urls'],
  },

  robots: {
    disallow: ['/admin'],
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        },
      ],
      meta: [{ name: 'theme-color', content: '#0b382c' }],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: [
        '/',
        '/en',
        '/que-es-la-quiropractica',
        '/en/what-is-chiropractic',
        '/como-funciona',
        '/en/how-does-it-work',
        '/que-es-la-quiropractica/preguntas-frecuentes',
        '/en/what-is-chiropractic/faqs',
        '/para-quien-sirve-la-quiropractica',
        '/en/who-is-chiropractic-for',
        '/sobre-nosotros/equipo',
        '/en/about-us/our-team',
        '/sobre-nosotros/centro-quiropractico-valencia',
        '/en/about-us/chiropractic-valencia',
        '/sobre-nosotros/contacto',
        '/en/about-us/contact',
        '/blog',
        '/en/blog',
        '/reserva-cita',
        '/en/book-appointment',
        '/politica-de-privacidad',
        '/en/privacy-policy',
        '/aviso-legal',
        '/en/legal-notice',
        '/politica-de-cookies',
        '/en/cookies-policy',
        '/sobre-nosotros/equipo/lea-guido',
        '/en/about-us/our-team/lea-guido',
        ...symptomRoutes,
        ...blogRoutes,
      ],
    },
  },
})
