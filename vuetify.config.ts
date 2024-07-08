import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    primary: '#77ACA2',
    secondary: '#7F9A9D',
    tertiary: '#E6D8B6',
    quaternary: '#E7CFBC',
    whiteBranded: '#FFF4EC',
    blackBranded: '#031926',
    blue: '#468189',
    'on-background': '#474747',
    'on-whiteBranded': '#474747',
    'on-surface': '#474747',
    'on-quaternary': '#474747'
  }
}

export default defineVuetifyConfiguration({
  defaults: {
    global: {
      ripple: false,
      VLayout: {
        top: '100px'
      }
    },
    VExpansionPanel: {
      elevation: 0
    }
  },
  icons: {
    defaultSet: 'mdi-svg'
  },
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme
    }
  }
})
