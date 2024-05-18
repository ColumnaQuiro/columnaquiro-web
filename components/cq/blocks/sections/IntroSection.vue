<template>
  <div>
    <cq-layout-section class="intro-section">
      <h1 class="relative text-white z-10 text-center">
        {{ title }}
      </h1>
      <div v-if="description" class="relative text-base text-center text-white z-10">
        {{ description }}
      </div>
    </cq-layout-section>
    <div class="intro-section__overlay" />
  </div>
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
  @apply h-[350px] md:h-[350px] bg-no-repeat bg-cover flex flex-col justify-center bg-center;

  &__overlay {
    @apply h-[350px] md:h-[350px] w-screen absolute top-14 lg:top-16 right-0 bottom-0 left-0 bg-black opacity-30;
  }
}
</style>
