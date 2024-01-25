<template>
  <div class="section relative">
    <NuxtImg
      v-if="shape"
      provider="s3"
      class="absolute opacity-80"
      :class="{
        'inset-y-0 my-auto': isShapeCenter,
        'top-0': isShapeTop,
        'bottom-0': isShapeBottom,
        'left-0': isShapeLeft,
        'right-0': isShapeRight
      }"
      :src="`website/shapes/${shape}.webp`"
      :width="shapeWidth"
      alt="shape"
      loading="lazy"
    />
    <div
      class="container relative"
      :class="{
        'lg:py-16 md:py-10 py-8': !removeInnerSpace
      }"
    >
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">

interface Props {
  shape?: 'shape-white-1' | 'shape-secondary-left' | 'shape-tertiary-right' | 'shape-secondary-light-left' | 'shape-tertiary-light-right'
  shapeWidth?: number
  shapePosition?: 'top-left' | 'top-right' | 'center-left' | 'center-right' | 'bottom-left' | 'bottom-right',
  removeInnerSpace?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  shape: undefined,
  shapeWidth: undefined,
  shapePosition: 'top-left',
  removeInnerSpace: false
})

const isShapeCenter = props.shapePosition.includes('center')
const isShapeTop = props.shapePosition.includes('top')
const isShapeBottom = props.shapePosition.includes('bottom')
const isShapeLeft = props.shapePosition.includes('left')
const isShapeRight = props.shapePosition.includes('right')
</script>
<style lang="scss" scoped>
.section {
}
</style>
