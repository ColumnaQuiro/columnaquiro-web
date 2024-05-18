<template>
  <div>
    <sintomas-what-is :symptom="`${symptom}`" />
    <lazy-sintomas-symptoms :symptom="`${symptom}`" />
    <lazy-cq-blocks-order-appointment-section
      :title="t(`symptoms.${symptom}.appointmentSection.title`)"
      :description="t(`symptoms.${symptom}.appointmentSection.description`)"
    />
    <lazy-sintomas-types :symptom="`${symptom}`" />
    <lazy-sintomas-chiropractic-benefits :symptom="`${symptom}`" />
    <lazy-cq-blocks-sections-faqs :title="t(`symptoms.${symptom}.faqs.title`)" :faqs=" tm(`symptoms.${symptom}.faqs.items`)" />
    <lazy-cq-blocks-order-appointment-section
      :title="t(`symptoms.${symptom}.appointmentSection.title`)"
      :description="t(`symptoms.${symptom}.appointmentSection.description`)"
    />
  </div>
</template>

<script setup lang="ts">

import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { symptomsI18n } from '~/constants/symptomsI18n'
import { useSEO } from '~/composables/seo'

const { params } = useRoute()
const { symptom } = params

const { t, tm } = useI18n()
const setI18nParams = useSetI18nParams()
const useSeo = useSEO()

setI18nParams({
  en: { symptom: symptomsI18n[symptom as keyof typeof symptomsI18n].en },
  es: { symptom: symptomsI18n[symptom as keyof typeof symptomsI18n].es }
})
useSeo.setI18nTags()
useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(t(`symptoms.${symptom}.seo.title`), t(`symptoms.${symptom}.seo.description`))

</script>
