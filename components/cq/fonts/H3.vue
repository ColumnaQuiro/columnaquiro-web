<template>
  <h3
    :class="[
      'text-md-h3 text-h4 pb-lg-12 pb-md-10 pb-8',
      {'text-center': centered}
    ]"
  >
    <slot />
  </h3>
</template>
<script setup lang="ts">
interface Props {
  /**
   * Whether the text is centered
   */
  centered?: boolean
}

withDefaults(defineProps<Props>(), {
  centered: true
})
</script>
