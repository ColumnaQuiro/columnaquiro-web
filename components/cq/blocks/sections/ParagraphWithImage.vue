<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-10 paragraph-with-image">
    <div class="md:col-span-2">
      <slot name="text">
        <div class="text-base" v-html="text" />
      </slot>
    </div>
    <div class="w-full justify-self-center md:justify-self-end">
      <slot name="image">
        <v-img :src="image" :width="imageWidth" class="mx-auto lg:mx-0 mt-8 lg:mt-0" />
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  text: string,
  image: string,
  imageWidth?: number | string
}

withDefaults(defineProps<Props>(), {
  imageWidth: '100%'
})
</script>
<style lang="scss">
.paragraph-with-image {
  li {
    margin-left: 16px !important;
  }
}
</style>
