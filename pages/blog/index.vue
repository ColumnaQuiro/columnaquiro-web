<template>
  <cq-layout-section>
    <BlogHero />
    <BlogList :data="posts" />
    <BlogPagination
      v-if="totalPages > 1"
      class="mt-8"
      :current-page="1"
      :total-pages="totalPages"
      :next-page="totalPages > 1"
      base-url="/blog/"
      page-url="/blog/page/"
    />
  </cq-layout-section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const useSeo = useSEO()
const blogCountLimit = 8

const { data: totalPosts } = await useAsyncData('articles', () => queryCollection(`blog${locale.value.toUpperCase()}`).count())
const { data: posts } = await useAsyncData('blog', () => queryCollection(`blog${locale.value.toUpperCase()}`).limit(blogCountLimit).all())
const totalPages = computed(() => totalPosts.value / blogCountLimit)

useSeo.setI18nTags()
useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(t('blog.seo.title'), t('blog.seo.description'))
</script>
