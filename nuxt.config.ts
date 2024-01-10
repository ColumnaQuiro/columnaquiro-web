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
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400..700&display=swap' },
        { rel: 'preconnect', href: 'https://maxcdn.bootstrapcdn.com' },
        { rel: 'preconnect', href: 'https://statics.columnaquiro.com' }
      ]
    }
  },
  css: ['~/assets/scss/main.scss'],
  vite: {
    optimizeDeps: {
      exclude: [
        'fsevents'
      ]
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
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  nitro: {
    preset: 'netlify-static',
    prerender: {
      crawlLinks: false,
      routes: ['/sitemap.xml', '/robots.txt']
    }
  },
  modules: [
    '@nuxtjs/i18n',
    'nuxt-gtag',
    '@nuxt/content',
    'nuxt-simple-sitemap',
    'vuetify-nuxt-module',
    '@nuxt/image',
    '@nuxtjs/robots'
  ],
  image: {
    providers: {
      s3: {
        provider: '~/providers/aws-s3.ts',
        options: {
          baseURL: 'https://statics.columnaquiro.com/'
        }
      }
    }
  },
  sitemap: {
    autoI18n: false,
    autoAlternativeLangPrefixes: false,
    exclude: [
      'aviso-legal',
      'politica-de-cookies',
      'politica-de-privacidad',
      'en/cookies-policy',
      'en/privacy-policy',
      'en/legal-notice',
      '/para-quien-sirve-la-quiropractica/disabled-people',
      '/para-quien-sirve-la-quiropractica/kids',
      '/para-quien-sirve-la-quiropractica/elder-people',
      '/para-quien-sirve-la-quiropractica/pregnant-women',
      '/para-quien-sirve-la-quiropractica/athletes',
      '/para-quien-sirve-la-quiropractica/workers',
      '/en/who-is-chiropractic-for/personas-mayores',
      '/en/who-is-chiropractic-for/discapacidades-motoras-intelectuales',
      '/en/who-is-chiropractic-for/bebes-y-ninos',
      '/en/who-is-chiropractic-for/embarazadas',
      '/en/who-is-chiropractic-for/deportistas',
      '/en/who-is-chiropractic-for/trabajadores',
      '/en/who-is-chiropractic-for/who-is-chiropractic-for'
    ]
  },
  robots: {
    rules: {
      UserAgent: '*',
      Disallow: [
        '/aviso-legal',
        '/politica-de-cookies',
        '/politica-de-privacidad',
        '/en/lega-notice',
        '/en/privacy-policy',
        '/en/cookies-policy'
      ],
      Sitemap: 'https://columnaquiro.com/sitemap_index.xml'
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
      },
      rehypePlugins: {
        // remove the no-follow in the external links
        'rehype-external-links': false
      }
    }
  }
})
