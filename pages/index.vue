<template>
  <div>
    <home-header-video />
    <home-your-center-title />
    <lazy-home-mission />
    <lazy-home-offer />
    <lazy-cq-blocks-testimonials />
    <lazy-home-how-care-your-back />
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
useHead({
  script: [
    {
      src: 'https://widgets.sociablekit.com/google-reviews/widget.js',
      defer: true
    }
  ]
})
</script>
