<template>
  <cq-layout-section class="article">
    <h1 class="mb-4">
      {{ page.meta.headline }}
    </h1>
    <div class="mb-6">
      {{ $formatDate(page.meta.date) }}
    </div>
    <ContentRenderer v-if="page" :value="page"/>
  </cq-layout-section>
</template>
<script setup>
import { useSEO } from '~/composables/seo'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const { $formatDate } = useNuxtApp()
const localePath = useLocaleRoute()
const useSeo = useSEO()
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection(`blog${locale.value.toUpperCase()}`).path(route.path).first()
})

useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(page.value.seo.title, page.value.seo.description)

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://columnaquiro.com${localePath(page.value.path)}`
        },
        headline: page.value.meta.headline,
        description: page.value.meta.articleDescription ?? page.value.seo.description,
        image: {
          '@type': 'ImageObject',
          url: page.value.meta.cover,
          width: '',
          height: ''
        },
        author: {
          '@type': 'Organization',
          name: 'columnaquiro'
        },
        publisher: {
          '@type': 'Organization',
          name: 'columnaquiro',
          logo: {
            '@type': 'ImageObject',
            url: 'https://statics.columnaquiro.com/logo/logo-color.webp?width=90',
            width: '',
            height: ''
          }
        },
        datePublished: page.value.meta.date,
        dateModified: page.value.meta.modifiedDate || page.value.meta.date
      }
    }
  ]
})
</script>
<style lang="scss">
.article {
  strong {
    @apply font-medium;
  }

  ul {
    @apply list-disc mb-3;
  }

  ol {
    @apply list-decimal mb-3 pl-4;

    li::marker {
      @apply font-medium;
    }
  }

  img {
    @apply md:max-w-[500px] md:max-h-[500px] mb-6;
  }
}
</style>
