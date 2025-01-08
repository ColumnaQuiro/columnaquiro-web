<template>
  <div>
    <div class="space-y-4 border-b border-luxury-yellow">
      <div
        role="button"
        class="p-2 flex items-center justify-between cursor-pointer w-full"
        :aria-expanded="expanded"
        :aria-controls="faqId"
        @click="togglePanel"
      >
        <h3
          class="text-base font-bold"
          :class="{
            'text-brand-primary': expanded
          }"
        >
          {{ title }}
        </h3>
        <svg
          width="8"
          height="17"
          viewBox="0 0 8 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :class="{'hidden': expanded, 'inline': !expanded}"
        >
          <path
            d="M1.05714 15.9551L7 8.8923L1.05714 1.82951"
            stroke="#292F36"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :class="{'hidden': !expanded, 'inline': expanded}"
        >
          <path
            d="M1 1.82777L7.68571 8.10645L14.3714 1.82777"
            stroke="#292F36"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div
        :id="faqId"
        class="transition-height overflow-hidden"
        :class="{'h-0': !expanded, 'h-auto px-4 pb-4': expanded}"
      >
        <div class="text-base mt-4">
          <slot name="answer">
            <p v-html="answer" />
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  title: String
  answer: String
}

const props = defineProps<Props>()
const faqId = props.title.replace(/\s/g, '-').replace(/[?|¿]/g, '').toLowerCase()
const expanded = ref(false)

const togglePanel = () => {
  expanded.value = !expanded.value
}
</script>
