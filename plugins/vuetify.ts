import { createVuetify } from 'vuetify'
import { createI18n } from 'vue-i18n'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
// import '@mdi/font/css/materialdesignicons.css'

import 'assets/scss/main.scss'

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    primary: '#8D5B4C',
    secondary: '#69A297',
    tertiary: '#F2B880',
    quaternary: '#E7CFBC',
    whiteBranded: '#FFF4EC',
    blackBranded: '#474747',
    'on-background': '#474747',
    'on-whiteBranded': '#474747',
    'on-surface': '#474747',
    'on-quaternary': '#474747'
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const messages = {
    es: {
      $vuetify: {
        dataIterator: {
          rowsPerPageText: 'Items per page:',
          pageText: '{0}-{1} of {2}'
        }
      }
    },
    sv: {
      $vuetify: {
        dataIterator: {
          rowsPerPageText: 'Element per sida:',
          pageText: '{0}-{1} av {2}'
        }
      }
    }
  }
  const i18n = createI18n({
    legacy: false,
    locale: 'es',
    fallbackLocale: 'es',
    messages
  })
  const vuetify = createVuetify({
    defaults: {
      global: {
        ripple: false,
        VLayout: {
          top: '100px'
        }
      }
    },
    locale: {
      adapter: createVueI18nAdapter({ i18n, useI18n })
    },
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
