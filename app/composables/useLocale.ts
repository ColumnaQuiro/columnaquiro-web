import { computed } from 'vue'
import type { Locale } from '@/utils/site-routes'
import { LOCALE_CHOICE_STORAGE_KEY, resolveLocalizedPaths, withTrailingSlash } from '@/utils/site-routes'
import { useAppI18n } from '@/composables/useAppI18n'

export function useLocale() {
  const { locale } = useAppI18n()
  const route = useRoute()

  const otherLocale = computed<Locale>(() => (locale.value === 'es' ? 'en' : 'es'))

  function pathForLocale(target: Locale): string | undefined {
    const path = resolveLocalizedPaths(route.path)?.[target]
    return path ? withTrailingSlash(path) : undefined
  }

  function switchTo(target: Locale) {
    const path = pathForLocale(target) ?? (target === 'es' ? '/' : '/en/')
    if (import.meta.client) localStorage.setItem(LOCALE_CHOICE_STORAGE_KEY, '1')
    navigateTo(path)
  }

  return { locale, otherLocale, pathForLocale, switchTo }
}
