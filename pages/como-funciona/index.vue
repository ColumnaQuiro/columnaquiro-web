<template>
  <div>
    <como-funciona-primera-visita-header />
    <lazy-como-funciona-how-it-works />
    <lazy-como-funciona-camino-al-bienestar />
    <lazy-cq-blocks-sections-faqs :title="t('howItWorks.faqs.title')" :faqs="tm('howItWorks.faqs.items')" />
    <lazy-cq-blocks-order-appointment-section />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/seo'

const { t, tm } = useI18n()
const useSeo = useSEO()

useSeo.setI18nTags()
useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(t('howItWorks.seo.title'), t('howItWorks.seo.description'))
</script>
