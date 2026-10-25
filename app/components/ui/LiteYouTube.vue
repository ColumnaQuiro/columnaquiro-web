<script setup lang="ts">
import { computed, ref } from 'vue'

// Click-to-play stand-in for a YouTube embed. The real player is ~990 KB of
// script and frames (measured on /oferta-primera-visita, the page with the
// most paid traffic) and it loaded for every visitor whether or not they
// pressed play. This renders the video's own poster image and a play button,
// and only swaps in the iframe -- with autoplay, so the tap still starts the
// video -- once someone asks for it.
const props = defineProps<{ videoId: string; title: string }>()

const playing = ref(false)
const poster = computed(() => `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`)
const embed = computed(
  () => `https://www.youtube-nocookie.com/embed/${props.videoId}?autoplay=1&rel=0`,
)
</script>

<template>
  <div class="relative aspect-video overflow-hidden bg-forest">
    <iframe
      v-if="playing"
      class="absolute inset-0 h-full w-full"
      :src="embed"
      :title="title"
      allow="autoplay; encrypted-media; picture-in-picture"
      allowfullscreen
    />
    <button
      v-else
      type="button"
      class="group absolute inset-0 flex h-full w-full items-center justify-center"
      :aria-label="`Reproducir: ${title}`"
      @click="playing = true"
    >
      <img
        :src="poster"
        alt=""
        loading="lazy"
        decoding="async"
        width="480"
        height="360"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <span
        class="relative flex h-16 w-16 items-center justify-center rounded-full bg-gold text-gold-dark shadow-lg transition-transform group-hover:scale-105 motion-reduce:transition-none"
      >
        <svg viewBox="0 0 24 24" class="ml-1 h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  </div>
</template>
