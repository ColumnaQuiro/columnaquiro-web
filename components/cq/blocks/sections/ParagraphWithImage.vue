<template>
  <div class="paragraph-with-image flex flex-col md:flex-row gap-10">
    <div
      class="md:col-span-2"
      :class="{
        'order-0': isImagePositionRight,
        'order-1': isImagePositionLeft
      }"
    >
      <slot name="text">
        <div class="text-base" v-html="text" />
      </slot>
    </div>
    <div class="w-full justify-self-center md:justify-self-end">
      <slot name="image">
        <div class="paragraph-with-image__image">
          <img :src="image" class="w-full mx-auto lg:mx-0 mt-8 lg:mt-0" alt="">
        </div>
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType } from 'vue'
import {imageMeta} from "image-meta";

type ImagePosition = 'left' | 'right'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  imageWidth: {
    type: Number
  },
  imagePosition: {
    type: String as PropType<ImagePosition>,
    default: 'right'
  }
})

const width = `${props.imageWidth}px`
const isImagePositionLeft = props.imagePosition === 'left'
const isImagePositionRight = props.imagePosition === 'right'
</script>
<style lang="scss">
.paragraph-with-image {
  li {
    margin-left: 16px !important;
  }

  &__image {
    width: v-bind(width);
  }
}
</style>
