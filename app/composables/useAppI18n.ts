import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Locale } from '@/utils/site-routes'

export function useAppI18n() {
  const i18n = useI18n()
  const locale = computed<Locale>(() => i18n.locale.value as Locale)
  return { t: i18n.t, locale }
}
