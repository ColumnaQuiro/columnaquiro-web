<template>
  <cq-layout-section class="article">
    <ContentRenderer :value="data">
      <h1 class="mb-4">
        {{ data.headline }}
      </h1>
      <div class="mb-6">
        {{ $formatDate(data.date) }}
      </div>
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>
  </cq-layout-section>
</template>
<script setup>
import { useSEO } from '~/composables/seo'

const { $formatDate } = useNuxtApp()
const localePath = useLocalePath()
const useSeo = useSEO()
const { params } = useRoute()
const { data } = await useAsyncData(localePath('/blog'), async () => {
  return await queryContent(`${localePath('/blog')}/${params.slug}`).findOne()
})

useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(data.value.title, data.value.description)
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://columnaquiro.com${localePath(data.value._path)}`
        },
        headline: data.value.headline,
        description: data.value.articleDescription ?? data.value.description,
        image: {
          '@type': 'ImageObject',
          url:
              data.value.cover,
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
        datePublished: data.value.date,
        dateModified: data.value.date
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
