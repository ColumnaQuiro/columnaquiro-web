<template>
  <cq-layout-section>
    <BlogHero />
    <BlogList :data="posts" />
    <BlogPagination
      v-if="totalPages > 1"
      class="mt-8"
      :current-page="getPageNumber()"
      :total-pages="totalPages"
      :next-page="getPageNumber() < totalPages"
      base-url="/blog/"
      page-url="/blog/page/"
    />
  </cq-layout-section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const { params } = useRoute()
const useSeo = useSEO()
const blogCountLimit = 8

const getPageNumber = () => {
  return Number(params.number)
}
const totalPages = computed(() => totalPosts.value / blogCountLimit)
const { data: totalPosts } = await useAsyncData('articles', () => queryCollection(`blog${locale.value.toUpperCase()}`).count())
const { data: posts } = await useAsyncData('blog', () => queryCollection(`blog${locale.value.toUpperCase()}`).skip(blogCountLimit * (getPageNumber() - 1)).limit(blogCountLimit).all())

useSeo.setI18nTags()
useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(t('blog.seo.title'), t('blog.seo.description'))
</script>
