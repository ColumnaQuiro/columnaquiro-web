import { createI18n } from 'vue-i18n'
import es from '../locales/es.json'

export default defineNuxtPlugin(({ vueApp }) => {
  type ES = typeof es

  const i18n = createI18n<[ES], 'es' >({
    legacy: false,
    globalInjection: true,
    availableLocales: ['es'],
    locale: 'es',
    messages: {
      es
    }
  })

  vueApp.use(i18n)
})
