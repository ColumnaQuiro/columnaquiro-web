<template>
  <div>
    <home-intro />
    <home-your-center-title />
    <home-pains />
    <lazy-cq-blocks-testimonials />
    <lazy-home-mission />
    <lazy-home-how-care-your-back />
    <lazy-home-faqs />
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
  link: [
    {
      rel: 'preload',
      href: 'https://res.cloudinary.com/dqrtj7gca/image/upload/f_auto,q_auto/v1/website/home/header_video_poster',
      as: 'image'
    }
  ],
  script: [
    {
      src: 'https://widgets.sociablekit.com/google-reviews/widget.js',
      defer: true,
      tagPosition: 'bodyClose'
    }
  ]
})
</script>
