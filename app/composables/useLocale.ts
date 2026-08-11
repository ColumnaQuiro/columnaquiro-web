import { computed } from 'vue'
import type { Locale } from '@/utils/site-routes'
import { resolveLocalizedPaths } from '@/utils/site-routes'
import { useAppI18n } from '@/composables/useAppI18n'

export function useLocale() {
  const { locale } = useAppI18n()
  const route = useRoute()

  const otherLocale = computed<Locale>(() => (locale.value === 'es' ? 'en' : 'es'))

  function pathForLocale(target: Locale): string | undefined {
    return resolveLocalizedPaths(route.path)?.[target]
  }

  function switchTo(target: Locale) {
    const path = pathForLocale(target)
    if (path) navigateTo(path)
  }

  return { locale, otherLocale, pathForLocale, switchTo }
}
