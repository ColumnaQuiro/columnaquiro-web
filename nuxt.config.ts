// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

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
    'nuxt-gtag',
    '@nuxt/content',
    'nuxt-simple-sitemap',
    'vuetify-nuxt-module',
    '@nuxt/image'
  ],
  sitemap: {
    exclude: [
      'aviso-legal',
      'politica-de-cookies',
      'politica-de-privacidad',
      'terminos-y-condiciones'
    ]
  },
  build: {
    transpile: [/vue-i18n/]
  },
  css: ['~/assets/scss/main.scss'],
  vite: {
    optimizeDeps: {
      exclude: [
        'fsevents'
      ]
    },
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js'
      }
    },
    plugins: [
      VueI18nVitePlugin({
        strictMessage: false,
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
        ]
      })
    ]
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
  }
})
