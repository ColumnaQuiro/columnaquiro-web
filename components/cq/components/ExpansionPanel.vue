<template>
  <div>
    <div class="space-y-4">
      <div class="bg-brand-light-white rounded">
        <div
          role="button"
          class="p-4 flex items-center justify-between cursor-pointer w-full"
          :aria-expanded="expanded"
          :aria-controls="faqId"
          @click="togglePanel"
        >
          <h3 class="text-base font-medium">
            {{ title }}
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              :class="{'hidden': expanded, 'inline': !expanded}"
              d="M19 9l-7 7-7-7"
            />
            <path
              :class="{'hidden': !expanded, 'inline': expanded}"
              d="M5 15l7-7 7 7"
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
              <div v-html="answer" />
            </slot>
          </div>
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
