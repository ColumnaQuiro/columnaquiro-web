<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  faqs: { q: string; a: string }[]
}>()

const openFaq = ref<number | null>(null)
</script>

<template>
  <div class="space-y-3">
    <div v-for="(faq, i) in faqs" :key="faq.q" class="rounded-2xl bg-cream p-6">
      <button
        type="button"
        class="flex w-full cursor-pointer items-center justify-between gap-4 text-left font-bold text-forest"
        @click="openFaq = openFaq === i ? null : i"
      >
        {{ faq.q }}
        <span
          class="faq-icon flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-forest/30 text-forest transition-transform duration-300"
          :class="{ 'rotate-45': openFaq === i }"
          >+</span
        >
      </button>
      <div
        class="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out"
        :style="{ gridTemplateRows: openFaq === i ? '1fr' : '0fr' }"
      >
        <p
          class="min-h-0 whitespace-pre-line text-sm text-slate"
          :class="{ 'pt-3': openFaq === i }"
          v-html="faq.a"
        />
      </div>
    </div>
  </div>
</template>
