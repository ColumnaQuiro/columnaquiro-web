import { createI18n } from 'vue-i18n'
import es from '@/i18n/locales/es'
import en from '@/i18n/locales/en'

function resolveLocale(path: string): 'es' | 'en' {
  return path === '/en' || path.startsWith('/en/') ? 'en' : 'es'
}

export default defineNuxtPlugin((nuxtApp) => {
  // Created fresh per app instance (once per SSR request) rather than as a
  // module-level singleton, since Nitro prerenders routes concurrently in the
  // same process — a shared mutable locale ref would race across requests.
  const route = useRoute()
  const i18n = createI18n({
    legacy: false,
    locale: resolveLocale(route.path),
    fallbackLocale: 'es',
    messages: { es, en },
  })

  nuxtApp.vueApp.use(i18n)

  if (import.meta.client) {
    watch(
      () => route.path,
      (path) => {
        i18n.global.locale.value = resolveLocale(path)
      },
    )
  }
})
