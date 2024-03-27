<template>
  <div>
    <home-intro />
    <home-your-center-title />
    <lazy-home-pains />
    <lazy-cq-blocks-testimonials />
    <lazy-home-mission />
    <lazy-home-how-care-your-back />
    <lazy-home-why-choose-us />
    <lazy-cq-blocks-sections-faqs :title="t('home.faqs.title')" :faqs="tm('home.faqs.items')" />
    <lazy-home-quiro-logos />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/seo'

const { t, tm } = useI18n()
const useSeo = useSEO()

useSeo.setI18nTags()
useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(t('home.seo.title'), t('home.seo.description'))
useHead({
  script: [
    {
      src: 'https://widgets.sociablekit.com/google-reviews/widget.js',
      defer: true,
      tagPosition: 'bodyClose'
    }
  ]
})
</script>
