<template>
  <div>
    <home-intro />
    <home-solution />
    <lazy-home-quiro-logos />
    <lazy-home-your-body />
    <lazy-home-lea />
    <lazy-home-situation-identification />
    <lazy-home-holistic-vision />
    <lazy-home-video-testimonials />
    <lazy-cq-blocks-testimonials />
    <lazy-home-how-care-your-back />
    <lazy-home-why-choose-us />
    <lazy-cq-blocks-sections-faqs :title="t('home.faqs.title')" :faqs="tm('home.faqs.items')" />
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
