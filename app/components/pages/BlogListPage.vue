<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'
import { getBlogPosts } from '@/utils/blog'

const POSTS_PER_PAGE = 9

const { locale } = useAppI18n()
const posts = computed(() => getBlogPosts(locale.value))

const currentPage = ref(1)
const totalPages = computed(() => Math.max(1, Math.ceil(posts.value.length / POSTS_PER_PAGE)))
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * POSTS_PER_PAGE
  return posts.value.slice(start, start + POSTS_PER_PAGE)
})

watch(locale, () => {
  currentPage.value = 1
})

function goToPage(page: number) {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const heading = computed(() => (locale.value === 'es' ? 'Blog ColumnaQuiro' : 'ColumnaQuiro Blog'))
const intro = computed(() =>
  locale.value === 'es'
    ? 'Este es un espacio exclusivo donde encontrarás las últimas novedades y artículos relacionados con quiropráctica y salud en general.'
    : 'This is a dedicated space where you will find the latest news and articles about chiropractic care and health in general.',
)

const seoText = {
  es: {
    title: 'Blog | ColumnaQuiro',
    description:
      'Artículos y novedades sobre quiropráctica y salud: ciática, dolor de espalda, embarazo, deporte y más.',
  },
  en: {
    title: 'Blog | ColumnaQuiro',
    description:
      'Articles and news about chiropractic care and health: sciatica, back pain, pregnancy, sport, and more.',
  },
}
useSeo({
  title: computed(() => seoText[locale.value].title),
  description: computed(() => seoText[locale.value].description),
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
  <section class="mx-auto max-w-[calc(1280px+3rem)] px-6 py-24 text-center">
    <h1 class="text-4xl font-semibold text-forest sm:text-5xl">{{ heading }}</h1>
    <p class="mx-auto mt-4 max-w-2xl text-lg text-body/80">{{ intro }}</p>
  </section>

  <section class="mx-auto max-w-[calc(1280px+3rem)] px-6 pb-24">
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="post in paginatedPosts"
        :key="post.slug"
        :to="`${locale === 'es' ? '/blog' : '/en/blog'}/${post.slug}`"
        class="flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-shadow hover:shadow-md"
      >
        <img :src="post.cover" :alt="post.title" class="aspect-[16/10] w-full object-cover" />
        <div class="flex flex-1 flex-col p-6">
          <p class="text-xs uppercase tracking-wide text-gold-dark">{{ formatDate(post.date) }}</p>
          <h2 class="mt-2 text-lg font-semibold text-forest">{{ post.title }}</h2>
          <p class="mt-3 flex-1 text-sm text-body/70">{{ post.excerpt }}</p>
          <div class="mt-4 flex items-center gap-2">
            <img
              src="/assets/images/team-lea.avif"
              alt="Léa Guido"
              class="h-8 w-8 rounded-full object-cover"
            />
            <span class="text-sm font-medium text-forest">{{ post.author }}</span>
          </div>
        </div>
      </NuxtLink>
    </div>

    <nav v-if="totalPages > 1" class="mt-12 flex items-center justify-center gap-2">
      <button
        type="button"
        class="rounded-full px-4 py-2 text-sm font-medium text-forest disabled:opacity-30"
        :disabled="currentPage === 1"
        @click="goToPage(currentPage - 1)"
      >
        ←
      </button>
      <button
        v-for="page in totalPages"
        :key="page"
        type="button"
        class="h-10 w-10 rounded-full text-sm font-medium transition-colors"
        :class="page === currentPage ? 'bg-gold text-gold-dark' : 'text-forest hover:bg-cream'"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>
      <button
        type="button"
        class="rounded-full px-4 py-2 text-sm font-medium text-forest disabled:opacity-30"
        :disabled="currentPage === totalPages"
        @click="goToPage(currentPage + 1)"
      >
        →
      </button>
    </nav>
  </section>
</template>
