<template>
  <div>
    <para-quien-sirve-la-quiropractica-intro :person-type="personType" />
    <cq-blocks-order-appointment-section />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSeoMeta, useTagTitle } from '@unhead/vue'
import { typeOfPersonToKey } from '~/constants/typeOfPersonMapping'
import { STATICS_CDN } from '~/constants/urls'

const route = useRoute()
const { t } = useI18n({ inheritLocale: true, useScope: 'local' })
const personType: string | undefined = typeOfPersonToKey.get(route.params.type as string)
const personTitle = t(`personTitle.${personType}`)

useTagTitle(t('seo.title', { personTitle }))
useSeoMeta({
  description: t(`seo.description.${personType}`),
  ogDescription: t(`seo.description.${personType}`),
  ogTitle: t('seo.title'),
  ogImage: `${STATICS_CDN}website/seo/og-image.png`,
  twitterCard: 'summary_large_image'
})

</script>
<i18n>
{
  "es": {
    "seo": {
      "title": "La quiropráctica es para tí - {personTitle} - ColumnaQuiro",
      "description": {
        "disabled": "La quiropráctica mejora la movilidad, equilibrio y coordinación en personas con discapacidades. También mejora el desarrollo en trastornos neuroconductuales.",
        "kids": "Preven disfunciones en el sistema nervioso de tu bebé: cómo un sistema nervioso óptimo mejora su desarrollo sensorial y motor, coordinación, equilibrio y sentidos.",
        "elder": "Mejora tu movilidad, equilibrio y calidad de vida en la tercera edad con la Quiropráctica: disfruta de un estilo de vida y saludable gracias a su enfoque.",
        "pregnant": "Optimiza tu salud durante y después del embarazo con la quiropráctica. Prepara tu cuerpo para los cambios físicos, químicos y emocionales del embarazo.",
        "workers": "Mejora tu rendimiento laboral con Quiropraxia: los ajustes quiropáticos afectan positivamente a la toma de decisiones, cognición... reduciendo ausencias por salud.",
        "sport": "Mejora el rendimiento deportivo con quiropráctica. Los ajustes regulares aumentan la fuerza, el tiempo de reacción, la movilidad, el equilibrio y la recuperación."
      }
    },
    "personTitle": {
      "disabled": "Discapacidades",
      "kids": "Bebes / Niños",
      "elder": "Personas mayores",
      "pregnant": "Embarazadas",
      "workers": "Trabajadores",
      "sport": "Deportistas"
    }
  }
}
</i18n>
