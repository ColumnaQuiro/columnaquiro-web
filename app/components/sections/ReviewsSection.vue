<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { googleRating } from '@/data/clinic'
import { reviews } from '@/data/reviews'
import RatingBadge from '@/components/ui/RatingBadge.vue'
import { pathFor } from '@/utils/site-routes'

const props = withDefaults(defineProps<{ title: string; limit?: number }>(), { limit: 6 })
const { locale } = useAppI18n()

const copy = {
  es: { all: 'Ver todas las reseñas en Google', write: 'Déjanos una reseña', from: 'Reseña en Google', page: 'Más reseñas de pacientes' },
  en: { all: 'See all reviews on Google', write: 'Leave us a review', from: 'Google review', page: 'More patient reviews' },
}
const c = computed(() => copy[locale.value])
const reviewsTotal = reviews.length

// The page's own language first, then the rest, up to `limit`.
const shown = computed(() =>
  [...reviews].sort((a, b) => Number(b.lang === locale.value) - Number(a.lang === locale.value)).slice(0, props.limit),
)
</script>

<template>
  <section class="bg-gray-light px-6 py-20">
    <div class="mx-auto max-w-[1280px]">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <h2 class="section-title">{{ title }}</h2>
        <RatingBadge />
      </div>
      <ul class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="(review, i) in shown"
          :key="`${review.name}-${i}`"
          :lang="review.lang"
          class="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
        >
          <p class="text-body">“{{ review.text }}”</p>
          <p class="mt-4 text-sm text-slate">
            <span class="font-semibold text-forest">{{ review.name }}</span> · {{ c.from }}
          </p>
        </li>
      </ul>
      <div class="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
        <a :href="googleRating.url" target="_blank" rel="noopener" class="text-forest underline">{{ c.all }}</a>
        <a :href="googleRating.writeReviewUrl" target="_blank" rel="noopener" class="text-gold-dark underline">{{ c.write }}</a>
        <NuxtLink v-if="props.limit < reviewsTotal" :to="pathFor('resenas', locale)" class="text-forest underline">{{ c.page }}</NuxtLink>
      </div>
    </div>
  </section>
</template>
