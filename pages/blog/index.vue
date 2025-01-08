<template>
  <cq-layout-section>
    <ContentQuery
      v-slot="{ data }"
      :path="localePath('/blog')"
      :only="['headline', 'description', 'date', 'tags', '_path', 'image', 'cover']"
      :sort="{
        date: -1
      }"
      :limit="blogCountLimit"
    >
      <BlogList :data="data" />
    </ContentQuery>
    <BlogPagination
      v-if="numberOfPosts > 1"
      class="mt-8"
      :current-page="1"
      :total-pages="numberOfPosts"
      :next-page="numberOfPosts > 1"
      base-url="/blog/"
      page-url="/blog/page/"
    />
  </cq-layout-section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const localePath = useLocalePath()
const useSeo = useSEO()
const blogCountLimit = 8
const { data: numberOfPosts } = await useAsyncData('content-/blog', async () => {
  const _posts = await queryContent(localePath('/blog')).only('headline').find()
  return Math.ceil(_posts.length / blogCountLimit)
})

useSeo.setI18nTags()
useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(t('blog.seo.title'), t('blog.seo.description'))
</script>
