<template>
  <div class="bullet-item-list flex items-center">
    <div class="flex-shrink-0 text-brand-tertiary w-7 h-7 border-2 border-light-grey rounded-full mr-3 font-semibold text-center">
      {{ index }}
    </div>
    <slot>
      <div v-if="text" class="text-base">
        {{ text }}
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
interface BulletItemListProps {
  text?: string
  index: number
}

defineProps<BulletItemListProps>()
</script>
