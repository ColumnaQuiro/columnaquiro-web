import { computed } from 'vue'
import { pathFor } from '@/utils/site-routes'
import { useAppI18n } from '@/composables/useAppI18n'

export function useNavigation() {
  const { t, locale } = useAppI18n()

  const paraTiDropdown = computed(() => ({
    label: t('nav.paraTi'),
    links: [
      {
        label: t('nav.queEs'),
        description: t('nav.queEsDesc'),
        icon: 'info',
        to: pathFor('que-es', locale.value),
      },
      {
        label: t('nav.comoFunciona'),
        description: t('nav.comoFuncionaDesc'),
        icon: 'steps',
        to: pathFor('como-funciona', locale.value),
      },
      {
        label: t('nav.faq'),
        description: t('nav.faqDesc'),
        icon: 'question',
        to: pathFor('faq', locale.value),
      },
    ],
  }))

  const sobreNosotrosDropdown = computed(() => ({
    label: t('nav.sobreNosotros'),
    links: [
      {
        label: t('nav.equipo'),
        description: t('nav.equipoDesc'),
        icon: 'team',
        to: pathFor('equipo', locale.value),
      },
      {
        label: t('nav.centro'),
        description: t('nav.centroDesc'),
        icon: 'home',
        to: pathFor('centro', locale.value),
      },
      {
        label: t('nav.contacto'),
        description: t('nav.contactoDesc'),
        icon: 'send',
        to: pathFor('contacto', locale.value),
      },
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
