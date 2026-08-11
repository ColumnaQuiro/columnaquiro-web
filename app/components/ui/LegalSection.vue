<script setup lang="ts">
export type LegalPart =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'h3'; text: string }

defineProps<{
  heading: string
  parts: LegalPart[]
}>()
</script>

<template>
  <div>
    <h2 class="text-lg font-semibold text-forest">{{ heading }}</h2>
    <template v-for="(part, i) in parts" :key="i">
      <h3 v-if="part.type === 'h3'" class="mt-4 font-semibold text-forest">{{ part.text }}</h3>
      <ul v-else-if="part.type === 'list'" class="mt-2 list-disc space-y-1 pl-5">
        <li v-for="(item, j) in part.items" :key="j" class="text-body/80" v-html="item" />
      </ul>
      <p v-else class="mt-2 text-body/80" v-html="part.text" />
    </template>
  </div>
</template>
