import { createVuetify } from 'vuetify'
import 'assets/scss/main.scss'

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    primary: '#8D5B4C',
    secondary: '#69A297',
    tertiary: '#F2B880',
    whiteBranded: '#FFF4EC',
    blackBranded: '#474747',
    'on-background': '#474747',
    'on-whiteBranded': '#474747'
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    defaults: {
      global: {
        ripple: false
      }
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
