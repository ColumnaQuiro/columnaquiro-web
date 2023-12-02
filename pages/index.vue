<template>
  <div>
    <home-header-video />
    <home-your-center-title />
    <lazy-home-mission />
    <home-offer />
    <lazy-home-how-care-your-back />
    <lazy-cq-blocks-testimonials />
    <lazy-home-quiro-logos />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/seo'

const { t } = useI18n()
const useSeo = useSEO()

useSeo.setI18nTags()
useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(t('home.seo.title'), t('home.seo.description'))
</script>
