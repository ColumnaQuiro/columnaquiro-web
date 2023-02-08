// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
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
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,require-await
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config =>
        // @ts-ignore
        config.plugins.push(vuetify({
          styles: { configFile: 'assets/scss/settings.scss' }
        }))
      )
    }
  ],
  runtimeConfig: {
    public: {
      gtmId: 'GTM-NTMKRQV'
    }
  }
})
