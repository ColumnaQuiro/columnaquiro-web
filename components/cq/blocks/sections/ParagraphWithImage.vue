<template>
  <div :style="cssVars" class="paragraph-with-image flex flex-col md:flex-row gap-10">
    <div
      class="lg:col-span-2"
      :class="{
        'order-0': isImagePositionRight,
        'order-1': isImagePositionLeft
      }"
    >
      <slot name="text">
        <div class="text-base" v-html="text" />
      </slot>
    </div>
    <div>
      <slot name="image">
        <div class="paragraph-with-image__image">
          <img :src="image" class="w-full mx-auto md:mx-0 md:mt-0" :alt="imageAlt">
        </div>
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType } from 'vue'

type ImagePosition = 'left' | 'right'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  imageWidth: {
    type: Number,
    required: true
  },
  imagePosition: {
    type: String as PropType<ImagePosition>,
    default: 'right'
  },
  imageAlt: {
    type: String,
    default: ''
  }
})

const cssVars = computed(() => ({
  '--width': `${props.imageWidth}px`
}))
const isImagePositionLeft = props.imagePosition === 'left'
const isImagePositionRight = props.imagePosition === 'right'
</script>
<style lang="scss">
.paragraph-with-image {
  li {
    margin-left: 16px !important;
  }

  &__image {
    @apply w-full;
    @apply lg:w-[var(--width)];
  }
}
</style>
