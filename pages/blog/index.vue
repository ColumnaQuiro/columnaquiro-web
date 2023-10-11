<template>
  <cq-layout-section>
    <BlogHero />
    <ContentQuery
      v-slot="{ data }"
      path="/blog"
      :only="['headline', 'description', 'date', 'tags', '_path', 'image', 'cover']"
      :sort="{
        date: -1
      }"
      :limit="blogCountLimit"
    >
      <BlogList :data="data" />
    </ContentQuery>
    <BlogPagination
      v-if="data > 1"
      class="mt-8"
      :current-page="1"
      :total-pages="data"
      :next-page="data > 1"
      base-url="/blog/"
      page-url="/blog/page/"
    />
  </cq-layout-section>
</template>

<script setup>
// Find the number of blogs present
import { useI18n } from 'vue-i18n'

const blogCountLimit = 6
const { data } = await useAsyncData('content-/blog', async () => {
  const _posts = await queryContent('/blog').only('headline').find()
  return Math.ceil(_posts.length / blogCountLimit)
})

const { t } = useI18n()

useSetSEOTags(t('blog.seo.title'), t('blog.seo.description'))
</script>
