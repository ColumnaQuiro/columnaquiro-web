<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'
import { getBlogPosts } from '@/utils/blog'

const { locale } = useAppI18n()
const posts = computed(() => getBlogPosts(locale.value))

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
  <section class="mx-auto max-w-6xl px-6 py-24 text-center">
    <h1 class="text-4xl font-semibold text-forest sm:text-5xl">{{ heading }}</h1>
    <p class="mx-auto mt-4 max-w-2xl text-lg text-body/80">{{ intro }}</p>
  </section>

  <section class="mx-auto max-w-6xl px-6 pb-24">
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="post in posts"
        :key="post.slug"
        :to="`${locale === 'es' ? '/blog' : '/en/blog'}/${post.slug}`"
        class="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-shadow hover:shadow-md"
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
  </section>
</template>
