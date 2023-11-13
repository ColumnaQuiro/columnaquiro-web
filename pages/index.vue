<template>
  <div>
    <home-header-video />
    <home-mission />
    <home-interferences-schema />
    <lazy-home-exclusive-focus />
    <lazy-cq-blocks-testimonials />
    <lazy-home-quiro-logos />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/seo'

const { t } = useI18n()
const useSeo = useSEO()

useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(t('home.seo.title'), t('home.seo.description'))
</script>
