// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  site: {
    url: 'https://columnaquiro.com'
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://statics.columnaquiro.com' }
      ]
    }
  },
  modules: [
    '@nuxtjs/i18n',
    'nuxt-gtag',
    '@nuxt/content',
    'nuxt-simple-sitemap',
    'vuetify-nuxt-module',
    '@nuxt/image'
  ],
  sitemap: {
    autoI18n: false,
    autoAlternativeLangPrefixes: false,
    exclude: [
      'aviso-legal',
      'politica-de-cookies',
      'politica-de-privacidad',
      'en/cookies-policy',
      'en/privacy-policy',
      'en/legal-notice'
    ]
  },
  css: ['~/assets/scss/main.scss'],
  vite: {
    optimizeDeps: {
      exclude: [
        'fsevents'
      ]
    }
  },
  i18n: {
    langDir: 'locales',
    lazy: true,
    baseUrl: 'https://columnaquiro.com',
    vueI18n: 'i18n.config.ts',
    detectBrowserLanguage: false,
    defaultLocale: 'es',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        iso: 'en',
        file: 'en.json',
        name: 'English'
      },
      {
        code: 'es',
        iso: 'es',
        file: 'es.json',
        name: 'Spanish'
      }
    ],
    compilation: {
      strictMessage: false
    },
    customRoutes: 'config',
    pages: {
      'que-es-la-quiropractica/index': {
        en: '/what-is-chiropractic'
      },
      'que-es-la-quiropractica/preguntas-frecuentes': {
        en: '/what-is-chiropractic/faqs'
      },
      'como-funciona/index': {
        en: '/how-does-it-work'
      },
      'para-quien-sirve-la-quiropractica/index': {
        en: '/who-is-chiropractic-for'
      },
      'para-quien-sirve-la-quiropractica/[type]': {
        en: '/who-is-chiropractic-for/[type]'
      },
      'sobre-nosotros/centro-quiropractico-valencia': {
        en: '/about-us/chiropractic-valencia'
      },
      'sobre-nosotros/contacto': {
        en: '/about-us/contact'
      },
      'sobre-nosotros/equipo': {
        en: '/about-us/our-team'
      },
      'aviso-legal': {
        en: '/legal-notice'
      },
      'politica-de-cookies': {
        en: '/cookies-policy'
      },
      'politica-de-privacidad': {
        en: '/privacy-policy'
      },
      'reserva-cita-centro-quiropractico-valencia': {
        en: '/book-appointment-chiropractic-valencia'
      }
    }
  },
  vuetify: {
    moduleOptions: {
      importComposables: false,
      styles: { configFile: '/assets/scss/settings.scss' },
      ssrClientHints: {
        viewportSize: true,
        prefersColorSchemeOptions: {},
        reloadOnFirstRequest: true
      }
    }
  },
  gtag: {
    id: 'G-7RZ1YECNKZ',
    config: {
      debug_mode: process.env.NODE_ENV === 'development'
    },
    initialConsent: true
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  nitro: {
    preset: 'netlify-static'
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'material-theme-palenight',
        // Theme used if `html.dark`
        dark: 'github-dark'
      }
    },
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5
      }
    }
  },
  sourcemap: {
    server: false,
    client: false
  },
  experimental: {
    inlineSSRStyles: false
  },
  runtimeConfig: {
    googleMapsApiKey: ''
  }
})
