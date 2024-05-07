// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
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
        { rel: 'preconnect', href: 'https://statics.columnaquiro.com' },
        { rel: 'preconnect', href: 'https://res.cloudinary.com' },
        { rel: 'preconnect', href: 'https://lh3.googleusercontent.com' }
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
    payloadExtraction: false
  },
  features: {
    inlineStyles: false
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
    preset: 'netlify',
    prerender: {
      crawlLinks: true
    }
  },
  router: {
    options: {
      strict: false
    }
  },
  modules: [
    '@nuxtjs/i18n',
    'nuxt-gtag',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    'vuetify-nuxt-module',
    '@nuxt/image',
    '@nuxtjs/robots'
  ],
  image: {
    formats: {
      webp: {
        quality: 80
      }
    },
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dqrtj7gca/image/upload/'
    },
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
    strictNuxtContentPaths: true,
    exclude: [
      'aviso-legal',
      'politica-de-cookies',
      'politica-de-privacidad',
      'en/cookies-policy',
      'en/privacy-policy',
      'en/legal-notice'
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
        '/en/cookies-policy',
        '/apple-app-site-association',
        '/.well-known/apple-app-site-association'
      ],
      Sitemap: 'https://columnaquiro.com/sitemap.xml'
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
      'sintomas/[symptom]': {
        en: '/symptoms/[symptom]'
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
      'reserva-cita': {
        en: '/book-appointment'
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
    initialConsent: process.env.NODE_ENV !== 'development'
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
