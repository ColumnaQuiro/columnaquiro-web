<template>
  <cq-layout-section class="article">
    <ContentRenderer :value="data" />
  </cq-layout-section>
</template>
<script setup>
import { useSEO } from '~/composables/seo'

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
  p {
    @apply mt-2 mb-4;
  }
  ul {
    @apply list-disc mb-4;
    list-style: disc;
  }
  img {
    @apply md:max-w-[500px];
  }
}
</style>
