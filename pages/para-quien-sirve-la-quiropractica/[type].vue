<template>
  <div>
    <para-quien-sirve-la-quiropractica-intro v-if="personType" :person-type="personType" class="bg-brand-light-tertiary" />
    <cq-blocks-order-appointment-section />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { typeOfPersonLocales, typeOfPersonToKey } from '~/constants/typeOfPersonMapping'
import { useSEO } from '~/composables/seo'
import type { UrlEnPersonType, UrlEsPersonType } from '~/types/Person'

const route = useRoute()
const { t, locale } = useI18n()
const useSeo = useSEO()
const type = route.params.type as string
const personType: string | undefined = typeOfPersonToKey.get(type)
const personTitle = t(`chiropracticForWhom.types.personTitle.${personType}`)

if (personType) {
  route.meta.nuxtI18n = {
    en: { type: locale.value === 'en' ? type : typeOfPersonLocales.en[type as UrlEsPersonType] },
    es: { type: locale.value === 'es' ? type : typeOfPersonLocales.es[type as UrlEnPersonType] }
  }
}

const head = useLocaleHead({
  identifierAttribute: 'id',
  addSeoAttributes: true
})
useHead({
  link: head.value.link,
  meta: head.value.meta
})
useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(t('chiropracticForWhom.types.seo.title', { personTitle }), t(`chiropracticForWhom.types.seo.description.${personType}`))
</script>
