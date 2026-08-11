import { computed } from 'vue'
import { pathFor } from '@/utils/site-routes'
import { useAppI18n } from '@/composables/useAppI18n'

export function useNavigation() {
  const { t, locale } = useAppI18n()

  const paraTiDropdown = computed(() => ({
    label: t('nav.paraTi'),
    links: [
      { label: t('nav.queEs'), to: pathFor('que-es', locale.value) },
      { label: t('nav.comoFunciona'), to: pathFor('como-funciona', locale.value) },
      { label: t('nav.faq'), to: pathFor('faq', locale.value) },
    ],
  }))

  const sobreNosotrosDropdown = computed(() => ({
    label: t('nav.sobreNosotros'),
    links: [
      { label: t('nav.equipo'), to: pathFor('equipo', locale.value) },
      { label: t('nav.centro'), to: pathFor('centro', locale.value) },
      { label: t('nav.contacto'), to: pathFor('contacto', locale.value) },
    ],
  }))

  const paraTodosLink = computed(() => ({
    label: t('nav.paraTodos'),
    to: pathFor('para-todos', locale.value),
  }))

  const blogLink = computed(() => ({ label: t('nav.blog'), to: pathFor('blog', locale.value) }))

  const reservaLink = computed(() => ({
    label: t('nav.reserva'),
    to: pathFor('reserva-cita', locale.value),
  }))

  return { paraTiDropdown, sobreNosotrosDropdown, paraTodosLink, blogLink, reservaLink }
}
