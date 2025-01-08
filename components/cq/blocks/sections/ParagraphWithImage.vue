<template>
  <div :style="cssVars" class="paragraph-with-image flex flex-col lg:flex-row lg:justify-center gap-10">
    <div
      :class="{
        'lg:order-first': isImagePositionRight,
        'lg:order-last': isImagePositionLeft,
        'order-last': mobileImagePosition === 'first'
      }"
    >
      <slot name="text">
        <p
          class="text-base"
          :class="{
            'w-full': !textNarrow,
            'md:max-w-[400px]': textNarrow
          }"
          v-html="text"
        />
      </slot>
    </div>
    <div>
      <slot name="image">
        <div class="paragraph-with-image__container">
          <NuxtImg
            :src="image"
            class="paragraph-with-image__image"
            :alt="imageAlt"
            :preload="preload"
            :provider="provider"
          />
        </div>
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">

import { computed, type PropType } from 'vue'

type ImagePosition = 'left' | 'right'
type MobileImagePosition = 'first' | 'last'

const props = defineProps({
  text: {
    type: String,
    default: ''
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
  mobileImagePosition: {
    type: String as PropType<MobileImagePosition>,
    default: 'last'
  },
  imageAlt: {
    type: String,
    default: ''
  },
  textNarrow: {
    type: Boolean,
    default: false
  },
  preload: {
    type: Boolean,
    default: false
  },
  provider: {
    type: String as PropType<'s3'|'cloudinary'>,
    default: 's3'
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

  &__container {
    @apply w-full;
    @apply lg:w-max;
  }

  &__image {
    @apply w-full mx-auto;
    @apply md:w-[var(--width)] lg:mx-0 lg:mt-0;
  }
}
</style>
