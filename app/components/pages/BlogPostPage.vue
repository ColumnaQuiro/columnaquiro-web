<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { getPostBySlug } from '@/utils/blog'
import { useSeo } from '@/composables/useSeo'
import { SITE_URL } from '@/utils/seo'
import { pathFor, withTrailingSlash } from '@/utils/site-routes'
import CtaBanner from '@/components/ui/CtaBanner.vue'
import BlogOfferCard from '@/components/ui/BlogOfferCard.vue'
import { symptomForPost } from '@/utils/blog-symptom'

const route = useRoute()
const { locale, t } = useAppI18n()
const post = computed(() => getPostBySlug(locale.value, route.params.slug as string))

useSeo({
  title: computed(() => (post.value ? `${post.value.title} | ColumnaQuiro` : 'ColumnaQuiro')),
  description: computed(() => post.value?.excerpt ?? ''),
  image: computed(() => (post.value ? `${SITE_URL}${post.value.cover}` : undefined)),
  type: 'article',
})

// Canonical URLs on this site carry a trailing slash (Netlify 301s the
// slashless form), so every URL emitted here has to match or the structured
// data points at a redirect.
const postUrl = computed(() => `${SITE_URL}${withTrailingSlash(route.path)}`)
const blogUrl = computed(() => `${SITE_URL}${withTrailingSlash(pathFor('blog', locale.value))}`)
const authorUrl = computed(
  () => `${SITE_URL}${withTrailingSlash(pathFor('lea-guido', locale.value))}`,
)

useHead({
  script: () =>
    post.value
      ? [
          {
            key: 'blog-posting',
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.value.title,
              description: post.value.excerpt,
              image: `${SITE_URL}${post.value.cover}`,
              datePublished: post.value.date,
              // Falls back to the publish date so the property is always
              // present; refreshed posts set `updated:` in frontmatter.
              dateModified: post.value.updated ?? post.value.date,
              inLanguage: locale.value === 'es' ? 'es-ES' : 'en-GB',
              // Linking the author to their bio page ties the byline to a real
              // credentialed person, which is the signal that matters most on
              // health content.
              author: {
                '@type': 'Person',
                name: post.value.author,
                url: authorUrl.value,
              },
              publisher: {
                '@type': 'Organization',
                name: 'ColumnaQuiro',
                url: SITE_URL,
                logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/images/logo-quiro.png` },
              },
              mainEntityOfPage: postUrl.value,
            }),
          },
          {
            key: 'blog-breadcrumbs',
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: `${SITE_URL}${locale.value === 'es' ? '/' : '/en/'}`,
                },
                { '@type': 'ListItem', position: 2, name: t('nav.blog'), item: blogUrl.value },
                { '@type': 'ListItem', position: 3, name: post.value.title, item: postUrl.value },
              ],
            }),
          },
        ]
      : [],
})

// The offer card goes in after the second section (the third <h2> opens the
// third). A post with fewer sections gets the card at the end of the body
// instead, before the closing banner.
const parts = computed(() => {
  const html = post.value?.html ?? ''
  let index = -1
  for (let n = 0; n < 3; n++) {
    index = html.indexOf('<h2', index + 1)
    if (index === -1) break
  }
  return index === -1 ? [html, ''] : [html.slice(0, index), html.slice(index)]
})

const symptomSlug = computed(() => (post.value ? symptomForPost(post.value.slug, post.value.title) : undefined))

// Credentials shown under the byline. Health content is judged on who wrote
// it; a name alone says nothing, and the bio page is one click too far for
// most readers.
const credentials: Record<string, { es: string; en: string; routeKey: 'lea-guido' | 'jordana-aguar' }> = {
  'Léa Guido': {
    es: 'Doctora en Quiropráctica · Barcelona College of Chiropractic (2021) · atiende en español, inglés y francés',
    en: 'Doctor of Chiropractic · Barcelona College of Chiropractic (2021) · consults in English, Spanish and French',
    routeKey: 'lea-guido',
  },
  'Jordana Aguar': {
    es: 'Doctora en Quiropráctica · ColumnaQuiro, València',
    en: 'Doctor of Chiropractic · ColumnaQuiro, Valencia',
    routeKey: 'jordana-aguar',
  },
}
const authorInfo = computed(() => (post.value ? credentials[post.value.author] : undefined))

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
    <nav class="flex items-center gap-2 text-sm text-body/60">
      <NuxtLink :to="locale === 'es' ? '/blog' : '/en/blog'" class="hover:text-forest">{{
        t('nav.blog')
      }}</NuxtLink>
      <span>›</span>
      <span class="text-body/80">{{ post.title }}</span>
    </nav>
    <p
      class="mt-4 inline-flex w-fit items-center rounded-full bg-badge-mint/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forest"
    >
      {{ formatDate(post.date) }}
    </p>
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

    <div class="prose mt-10" v-html="parts[0]" />
    <BlogOfferCard :symptom-slug="symptomSlug" />
    <div v-if="parts[1]" class="prose" v-html="parts[1]" />

    <div class="mt-12 flex items-center gap-4 rounded-2xl border border-forest/10 bg-white p-5">
      <img src="/assets/images/team-lea.avif" :alt="post.author" class="h-14 w-14 shrink-0 rounded-full object-cover" />
      <div>
        <NuxtLink
          v-if="authorInfo"
          :to="pathFor(authorInfo.routeKey, locale)"
          class="font-semibold text-forest underline-offset-2 hover:underline"
          >{{ post.author }}</NuxtLink
        >
        <span v-else class="font-semibold text-forest">{{ post.author }}</span>
        <p v-if="authorInfo" class="mt-0.5 text-sm text-slate">{{ authorInfo[locale] }}</p>
      </div>
    </div>

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
