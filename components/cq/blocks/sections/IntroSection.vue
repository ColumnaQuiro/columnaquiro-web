<template>
  <cq-layout-section class="intro-section">
    <h1 class="section-title text-white">
      {{ title }}
    </h1>
    <div v-if="description" class="text-base text-white">
      {{ description }}
    </div>
  </cq-layout-section>
</template>
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  backgroundImageUrl: {
    type: String,
    required: true
  }
})

const backgroundImageCss = `url("${props.backgroundImageUrl}")`

</script>
<style lang="scss" scoped>
.intro-section {
  background: v-bind(backgroundImageCss);
  @apply h-[500px] bg-no-repeat bg-cover flex flex-col justify-center;
}
</style>
