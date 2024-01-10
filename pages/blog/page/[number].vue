<template>
  <cq-layout-section>
    <BlogHero />
    <ContentQuery
      v-slot="{ data }"
      :path="localePath('/blog')"
      :only="['headline', 'description', 'date', 'tags', '_path', 'image', 'cover']"
      :sort="{
        date: -1
      }"
      :skip="blogCountLimit * (getPageNumber() - 1)"
      :limit="blogCountLimit"
    >
      <BlogList :data="data" />
    </ContentQuery>
    <BlogPagination
      v-if="numPages > 1"
      class="mt-8"
      :current-page="getPageNumber()"
      :total-pages="getPageLimit(numPages)"
      :next-page="getPageNumber() < getPageLimit(numPages)"
      base-url="/blog/"
      page-url="/blog/page/"
    />
  </cq-layout-section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const localePath = useLocalePath()
const { params } = useRoute()
const useSeo = useSEO()
const blogCountLimit = 6

const getPageLimit = (totalPosts) => {
  return Math.ceil(totalPosts / blogCountLimit)
}

const getPageNumber = () => {
  return Number(params.number)
}

const { data: numPages } = await useAsyncData('content-/blog', async () => {
  const _posts = await queryContent(localePath('/blog')).only('headline').find()
  return Math.ceil(_posts.length / blogCountLimit)
})

useSeo.setI18nTags()
useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(t('blog.seo.title'), t('blog.seo.description'))
</script>
