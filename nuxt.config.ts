// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0'
    }
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/scss/main.scss'
  ],
  nitro: {
    preset: 'netlify'
  },
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
    }
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
    '@nuxtjs/i18n',
    'nuxt-simple-sitemap',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config =>
        config.plugins?.push(vuetify({
          styles: { configFile: 'assets/scss/settings.scss' }
        })) as any
      )
    }
  ],
  sourcemap: {
    server: false,
    client: false
  },
  runtimeConfig: {
    public: {
      gtmId: 'GTM-NTMKRQV'
    }
  }
})
