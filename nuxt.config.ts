// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0'
    }
  },
  nitro: {
    preset: 'netlify'
  },
  css: [
    'vuetify/styles',
    '~/assets/scss/main.scss',
    '@mdi/font/css/materialdesignicons.css'
  ],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.esm-bundler.js'
      }
    },
    ssr: {
      noExternal: ['vuetify']
    },
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
        ]
      })
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  sitemap: {
    hostname: 'https://columnaquiro.com',
    exclude: [
      'aviso-legal',
      'politica-de-cookies',
      'politica-de-privacidad',
      'terminos-y-condiciones'
    ]
  },
  modules: [
    'nuxt-delay-hydration',
    'nuxt-simple-sitemap',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config =>
        config.plugins?.push(vuetify({
          autoImport: true,
          styles: { configFile: 'assets/scss/vuetify.scss' }
        })) as any
      )
    }
  ],
  runtimeConfig: {
    public: {
      gtmId: 'GTM-NTMKRQV'
    }
  },
  delayHydration: {
    mode: 'manual',
    idleCallbackTimeout: 1000,
    postIdleTimeout: { desktop: 1000, mobile: 2000 },
    debug: process.env.NODE_ENV === 'development'
  },
  sourcemap: {
    server: false,
    client: false
  }
})
