<template>
  <div>
    <que-es-la-quiropractica-intro />
    <lazy-que-es-la-quiropractica-nervous-system />
    <lazy-que-es-la-quiropractica-interferences />
    <lazy-home-science class="bg-brand-tertiary" />
    <cq-blocks-order-appointment-section />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/seo'

const { t } = useI18n()
const useSeo = useSEO()

useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(t('whatIsChiropractic.seo.title'), t('whatIsChiropractic.seo.description'))
</script>
