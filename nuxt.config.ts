// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  nitro: {
    preset: 'netlify'
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
    'nuxt-simple-sitemap',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config =>
        config.plugins?.push(vuetify({
          styles: { configFile: 'assets/scss/settings.scss' }
        })) as any
      )
    }
  ],
  runtimeConfig: {
    public: {
      gtmId: 'GTM-NTMKRQV'
    }
  }
})
