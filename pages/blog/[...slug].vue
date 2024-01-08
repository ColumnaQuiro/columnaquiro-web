<template>
  <cq-layout-section class="article">
    <ContentRenderer :value="data">
      <h1 class="mb-4">{{ data.headline }}</h1>
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
</script>
<style lang="scss">
.article {
  strong {
    @apply font-medium;
  }
  p {
    @apply mt-2 mb-4;

    a {
      @apply underline text-brand-secondary;
    }
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
    @apply md:max-w-[400px] mb-6;
  }
}
</style>
