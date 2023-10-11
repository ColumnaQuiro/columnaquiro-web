<template>
  <div>
    <div class="space-y-4">
      <div class="bg-brand-light-secondary rounded">
        <button
          type="button"
          class="p-4 flex items-center justify-between cursor-pointer w-full"
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
        </button>
        <div
          class="transition-height overflow-hidden"
          :class="{'h-0': !expanded, 'h-auto p-4': expanded}"
        >
          <div class="text-base mt-4">
            <slot name="answer">
              {{ answer }}
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: String
  answer: String
}

defineProps<Props>()

const expanded = ref(false)

const togglePanel = () => {
  expanded.value = !expanded.value
}
</script>
