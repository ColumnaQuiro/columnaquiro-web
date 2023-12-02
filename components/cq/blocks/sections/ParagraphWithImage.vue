<template>
  <div :style="cssVars" class="paragraph-with-image flex flex-col md:flex-row md:justify-center gap-10">
    <div
      :class="{
        'order-0': isImagePositionRight,
        'order-1': isImagePositionLeft
      }"
    >
      <slot name="text">
        <div
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
        <div class="paragraph-with-image__image">
          <NuxtImg :src="image" class="w-full mx-auto md:mx-0 md:mt-0" :alt="imageAlt" />
        </div>
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">

import type { PropType } from 'vue'

type ImagePosition = 'left' | 'right'

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
  imageAlt: {
    type: String,
    default: ''
  },
  textNarrow: {
    type: Boolean,
    default: false
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
    @apply md:w-[var(--width)];
  }
}
</style>
