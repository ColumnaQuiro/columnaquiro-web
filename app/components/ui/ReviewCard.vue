<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import type { Review } from '@/data/reviews'

// One patient review laid out the way Google shows it on the listing: the
// reviewer's initial in a coloured circle, their name, when they wrote it,
// the stars, the text, and where it was published. Familiar shape, so a
// visitor reads it as a real Google review rather than as marketing copy.
// Still plain text, no review markup (see reviews.ts for why).
const props = defineProps<{ review: Review }>()
const { locale } = useAppI18n()

const copy = {
  es: { on: 'Reseña en Google', stars: (n: number) => `${n} de 5 estrellas` },
  en: { on: 'Review on Google', stars: (n: number) => `${n} out of 5 stars` },
}
const c = computed(() => copy[locale.value])

// Google picks the avatar colour per account; we pick one per name, so the
// same reviewer always gets the same circle and a grid never shows a row of
// identical ones. All from the site palette, all readable with white text.
const AVATAR_COLOURS = ['bg-forest', 'bg-sage-dark', 'bg-gold-light', 'bg-gold-dark', 'bg-forest-light']
const avatarClass = computed(() => {
  let hash = 0
  for (const ch of props.review.name) hash = (hash * 31 + ch.codePointAt(0)!) >>> 0
  return AVATAR_COLOURS[hash % AVATAR_COLOURS.length]
})
const initial = computed(() => [...props.review.name.trim()][0]?.toLocaleUpperCase(locale.value) ?? '')

// "octubre de 2026" / "October 2026": Google shows relative dates, but those
// go stale in a static build; month and year stay true until the next sync.
const when = computed(() => {
  if (!props.review.date) return ''
  const d = new Date(`${props.review.date}T00:00:00Z`)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString(locale.value === 'es' ? 'es-ES' : 'en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' })
})

const stars = computed(() => (props.review.rating ? Math.max(0, Math.min(5, Math.round(props.review.rating))) : 0))
</script>

<template>
  <article :lang="review.lang" class="flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
    <header class="flex items-center gap-3">
      <span
        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base font-semibold text-white"
        :class="avatarClass"
        aria-hidden="true"
        >{{ initial }}</span
      >
      <div class="min-w-0">
        <p class="truncate font-semibold text-forest">{{ review.name }}</p>
        <p v-if="when" class="text-xs text-slate">{{ when }}</p>
      </div>
    </header>

    <p v-if="stars" class="mt-3 flex gap-0.5 text-[#fbbc04]" role="img" :aria-label="c.stars(stars)">
      <svg v-for="n in 5" :key="n" viewBox="0 0 20 20" class="h-4 w-4" :class="n > stars ? 'text-taupe-dark' : ''" fill="currentColor" aria-hidden="true">
        <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
      </svg>
    </p>

    <p class="mt-3 grow text-body">{{ review.text }}</p>

    <footer class="mt-4 flex items-center gap-2 text-xs text-slate">
      <svg viewBox="0 0 48 48" class="h-4 w-4 shrink-0" aria-hidden="true">
        <path fill="#ea4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
        <path fill="#4285f4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
        <path fill="#fbbc05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
        <path fill="#34a853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
      </svg>
      {{ c.on }}
    </footer>
  </article>
</template>
