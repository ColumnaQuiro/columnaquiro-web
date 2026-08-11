<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { getPostBySlug } from '@/utils/blog'
import { useSeo } from '@/composables/useSeo'
import { SITE_URL } from '@/utils/seo'
import CtaBanner from '@/components/ui/CtaBanner.vue'

const route = useRoute()
const { locale, t } = useAppI18n()
const post = computed(() => getPostBySlug(locale.value, route.params.slug as string))

useSeo({
  title: computed(() => (post.value ? `${post.value.title} | ColumnaQuiro` : 'ColumnaQuiro')),
  description: computed(() => post.value?.excerpt ?? ''),
  image: computed(() => (post.value ? `${SITE_URL}${post.value.cover}` : undefined)),
  type: 'article',
})

useHead({
  script: () =>
    post.value
      ? [
          {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.value.title,
              description: post.value.excerpt,
              image: `${SITE_URL}${post.value.cover}`,
              datePublished: post.value.date,
              author: { '@type': 'Person', name: post.value.author },
              publisher: {
                '@type': 'Organization',
                name: 'ColumnaQuiro',
                logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/images/logo-quiro.png` },
              },
              mainEntityOfPage: `${SITE_URL}${route.path}`,
            }),
          },
        ]
      : [],
})

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(locale.value === 'es' ? 'es-ES' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <article v-if="post" class="mx-auto max-w-3xl px-6 py-24">
    <p class="text-sm uppercase tracking-wide text-gold-dark">{{ formatDate(post.date) }}</p>
    <h1 class="mt-4 text-3xl font-semibold text-forest sm:text-4xl">{{ post.title }}</h1>
    <div class="mt-4 flex items-center gap-2">
      <img
        src="/assets/images/team-lea.avif"
        :alt="post.author"
        class="h-8 w-8 rounded-full object-cover"
      />
      <span class="text-sm font-medium text-forest">{{ post.author }}</span>
    </div>

    <img :src="post.cover" :alt="post.title" class="mt-8 w-full rounded-3xl" />

    <div class="prose mt-10" v-html="post.html" />

    <NuxtLink
      :to="locale === 'es' ? '/blog' : '/en/blog'"
      class="mt-12 inline-block text-sm font-semibold text-gold-dark underline"
    >
      {{ t('common.volverBlog') }}
    </NuxtLink>
  </article>

  <CtaBanner />
</template>

<style scoped>
.prose :deep(h2) {
  margin-top: 2.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-forest);
}
.prose :deep(p) {
  margin-top: 0.75rem;
  color: var(--color-body);
  opacity: 0.85;
}
.prose :deep(strong) {
  color: var(--color-forest);
}
.prose :deep(ul),
.prose :deep(ol) {
  margin-top: 0.75rem;
  padding-left: 1.25rem;
}
.prose :deep(li) {
  margin-top: 0.25rem;
}
</style>
