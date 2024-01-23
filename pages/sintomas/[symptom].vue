<template>
  <div>
    <sintomas-what-is :symptom="`${symptom}`" />
    <sintomas-symptoms :symptom="`${symptom}`" />
    <cq-blocks-order-appointment-section
      :title="t('symptoms.appointmentSection.title')"
      :description="t('symptoms.appointmentSection.description')"
    />
    <sintomas-types :symptom="`${symptom}`" />
    <sintomas-chiropractic-benefits :symptom="`${symptom}`" />
    <sintomas-faqs :symptom="`${symptom}`" />
    <cq-blocks-order-appointment-section
      :title="t('symptoms.appointmentSection.title')"
      :description="t('symptoms.appointmentSection.description')"
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

const { t } = useI18n()
const setI18nParams = useSetI18nParams()
const useSeo = useSEO()

setI18nParams({
  en: { symptom: symptomsI18n[symptom as keyof typeof symptomsI18n].en },
  es: { symptom: symptomsI18n[symptom as keyof typeof symptomsI18n].es }
})
useSeo.setI18nTags()

</script>
