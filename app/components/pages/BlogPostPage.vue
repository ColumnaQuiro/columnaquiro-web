<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { getPostBySlug, loadPostHtml } from '@/utils/blog'
import { useSeo } from '@/composables/useSeo'
import { SITE_URL } from '@/utils/seo'
import { CLINIC_ID, breadcrumbJsonLd, credentialLine, personId, personJsonLd, practitioners, practitionerKeyFor } from '@/utils/schema'
import { pathFor, withTrailingSlash } from '@/utils/site-routes'
import CtaBanner from '@/components/ui/CtaBanner.vue'
import BlogOfferCard from '@/components/ui/BlogOfferCard.vue'
import { symptomForPost } from '@/utils/blog-symptom'
import { smallestAtLeast, srcsetFor } from '@/utils/images'

const route = useRoute()
const { locale, t } = useAppI18n()
const post = computed(() => getPostBySlug(locale.value, route.params.slug as string))
// The body is fetched per post (see utils/blog.ts). During prerender this
// resolves before the HTML is written, so the article is in the static page.
const { data: html } = await useAsyncData(
  () => `post-html-${locale.value}-${route.params.slug}`,
  () => loadPostHtml(locale.value, route.params.slug as string),
)

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
const authorKey = computed(() => (post.value ? practitionerKeyFor(post.value.author) : undefined))
const reviewerKey = computed(() => (post.value?.reviewedBy ? practitionerKeyFor(post.value.reviewedBy) : undefined))
const authorPhoto = computed(() =>
  authorKey.value ? smallestAtLeast(practitioners[authorKey.value].photo, 112) : '/assets/images/logo-quiro.png',
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
              author: authorKey.value
                ? personJsonLd(authorKey.value, locale.value)
                : { '@type': 'Person', name: post.value.author },
              ...(reviewerKey.value ? { reviewedBy: { '@id': personId(reviewerKey.value) } } : {}),
              publisher: { '@id': CLINIC_ID },
              mainEntityOfPage: postUrl.value,
            }),
          },
          {
            key: 'blog-breadcrumbs',
            type: 'application/ld+json',
            innerHTML: JSON.stringify(
              breadcrumbJsonLd(locale.value, [
                { name: t('nav.blog'), path: pathFor('blog', locale.value) },
                { name: post.value.title, path: route.path },
              ]),
            ),
          },
        ]
      : [],
})

// The offer card goes in after the second section (the third <h2> opens the
// third). A post with fewer sections gets the card at the end of the body
// instead, before the closing banner.
const parts = computed(() => {
  const body = html.value ?? ''
  let index = -1
  for (let n = 0; n < 3; n++) {
    index = body.indexOf('<h2', index + 1)
    if (index === -1) break
  }
  return index === -1 ? [body, ''] : [body.slice(0, index), body.slice(index)]
})

const symptomSlug = computed(() => (post.value ? symptomForPost(post.value.slug, post.value.title) : undefined))

// Posts about conditions we do not treat get the quieter offer card.
const GENTLE_POSTS = new Set([
  'esclerosis-multiple-agresiva', 'aggressive-multiple-sclerosis',
  'hipocondria-esclerosis-multiple', 'hypochondria-multiple-sclerosis',
  'conmocion-cerebral', 'concussion',
  'importancia-gateo-bebes', 'importance-crawling-infants',
  'flujo-marron-dolor-de-espalda-baja', 'brown-discharge-and-lower-back-pain',
])
const gentleOffer = computed(() => (post.value ? GENTLE_POSTS.has(post.value.slug) : false))

// Credentials shown under the byline. Health content is judged on who wrote
// it; a name alone says nothing, and the bio page is one click too far for
// most readers.
const languagesNote = {
  'lea-guido': { es: 'atiende en español, inglés y francés', en: 'consults in English, Spanish and French' },
  'jordana-aguar': undefined,
} as const
const authorInfo = computed(() => {
  const key = authorKey.value
  if (!key) return undefined
  const note = languagesNote[key]?.[locale.value]
  return { text: [credentialLine(key, locale.value), note].filter(Boolean).join(' · '), routeKey: key }
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
    <nav class="flex items-center gap-2 text-sm text-body/60">
      <NuxtLink :to="locale === 'es' ? '/blog/' : '/en/blog/'" class="inline-flex min-h-11 items-center hover:text-forest">{{
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
    <p v-if="post.updated && post.updated !== post.date" class="mt-2 text-sm text-slate">
      {{ locale === 'es' ? 'Actualizado el' : 'Updated' }} {{ formatDate(post.updated) }}
    </p>
    <h1 class="mt-4 text-3xl font-semibold text-forest sm:text-4xl">{{ post.title }}</h1>
    <div class="mt-4 flex items-center gap-2">
      <img :src="authorPhoto" alt="" width="32" height="32" class="h-8 w-8 rounded-full object-cover" />
      <NuxtLink
        v-if="authorInfo"
        :to="withTrailingSlash(pathFor(authorInfo.routeKey, locale))"
        class="inline-flex min-h-11 items-center text-sm font-medium text-forest underline-offset-2 hover:underline"
        >{{ post.author }}</NuxtLink
      >
      <span v-else class="text-sm font-medium text-forest">{{ post.author }}</span>
    </div>
    <p v-if="reviewerKey" class="text-sm text-slate">
      {{ locale === 'es' ? 'Revisado por' : 'Reviewed by' }}
      <NuxtLink :to="withTrailingSlash(pathFor(reviewerKey, locale))" class="font-medium text-forest underline">{{
        practitioners[reviewerKey].name
      }}</NuxtLink
      ><template v-if="post.reviewed"> · {{ formatDate(post.reviewed) }}</template>
    </p>

    <!-- Fixed ratio and intrinsic size so the cover reserves its box before it
         loads; covers come in several shapes, and an unsized one shifted the
         whole article down when it arrived. -->
    <img
      :src="post.cover"
      :srcset="srcsetFor(post.cover)"
      sizes="(min-width: 816px) 720px, calc(100vw - 48px)"
      alt=""
      width="1200"
      height="800"
      fetchpriority="high"
      class="mt-8 aspect-[3/2] w-full rounded-3xl object-cover"
    />

    <div class="prose mt-10" v-html="parts[0]" />
    <BlogOfferCard :symptom-slug="symptomSlug" :gentle="gentleOffer" />
    <div v-if="parts[1]" class="prose" v-html="parts[1]" />

    <div class="mt-12 flex items-center gap-4 rounded-2xl border border-forest/10 bg-white p-5">
      <img :src="authorPhoto" alt="" width="56" height="56" loading="lazy" class="h-14 w-14 shrink-0 rounded-full object-cover" />
      <div>
        <NuxtLink
          v-if="authorInfo"
          :to="withTrailingSlash(pathFor(authorInfo.routeKey, locale))"
          class="font-semibold text-forest underline-offset-2 hover:underline"
          >{{ post.author }}</NuxtLink
        >
        <span v-else class="font-semibold text-forest">{{ post.author }}</span>
        <p v-if="authorInfo" class="mt-0.5 text-sm text-slate">{{ authorInfo.text }}</p>
      </div>
    </div>

    <NuxtLink
      :to="locale === 'es' ? '/blog/' : '/en/blog/'"
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
/* Price and comparison tables: scroll inside their own box on a phone
   instead of widening the page. */
.prose :deep(table) {
  display: block;
  max-width: 100%;
  overflow-x: auto;
  margin-top: 1.25rem;
  border-collapse: collapse;
  font-size: 0.9rem;
}
.prose :deep(th),
.prose :deep(td) {
  border-bottom: 1px solid color-mix(in srgb, var(--color-forest) 15%, transparent);
  padding: 0.5rem 0.75rem;
  text-align: left;
  vertical-align: top;
}
.prose :deep(th) {
  color: var(--color-forest);
  font-weight: 600;
}
</style>
