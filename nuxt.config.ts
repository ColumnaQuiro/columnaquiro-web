// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  ssr: false,

  site: {
    url: 'https://columnaquiro.com'
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      link: [
        {
          rel: 'preconnect',
          href: 'https://maxcdn.bootstrapcdn.com'
        },
        {
          rel: 'preconnect',
          href: 'https://statics.columnaquiro.com'
        },
        {
          rel: 'preconnect',
          href: 'https://res.cloudinary.com'
        },
        {
          rel: 'preconnect',
          href: 'https://lh3.googleusercontent.com'
        }
      ]
    }
  },

  css: ['~/assets/scss/main.scss'],

  sourcemap: {
    server: false,
    client: true
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
      strict: true
    }
  },

  modules: [
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    'nuxt-gtag',
    '@nuxtjs/sitemap',
    'vuetify-nuxt-module',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxt/scripts',
    'vue3-carousel-nuxt',
    '@nuxt/content',
    '@nuxt/eslint'
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

  fonts: {
    provider: 'google',
    defaults: {
      weights: [300, 400, 500, 600],
      styles: ['normal', 'italic']
    },
    families: [
      {
        name: 'Inter',
        provider: 'google'
      }
    ],
    devtools: false
  },

  sitemap: {
    autoI18n: false,
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
        '/en/legal-notice',
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
      disableVuetifyStyles: true,
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
    preview: {
      api: 'https://api.nuxt.studio'
    },
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark'
          }
        },
        toc: {
          depth: 5,
          searchDepth: 5
        },
        rehypePlugins: {
          // remove the no-follow in the external links
          'rehype-external-links': false
        }
      },
    }
  },

  compatibilityDate: '2025-01-13'
})
