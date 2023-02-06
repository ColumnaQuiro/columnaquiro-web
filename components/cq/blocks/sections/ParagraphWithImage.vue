<template>
  <v-row class="paragraph-with-image" no-gutters justify="space-between">
    <v-col cols="12" lg="7" md="7">
      <slot name="text">
        <div class="text-body-1" v-html="text" />
      </slot>
    </v-col>
    <v-col cols="12" lg="4" md="4" align-self="end">
      <slot name="image">
        <v-img :src="image" width="100%" />
      </slot>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
interface Props {
  text: string,
  image: string
}

defineProps<Props>()
</script>
<style lang="scss">
.paragraph-with-image {
  li {
    margin-left: 16px !important;
  }
}
</style>
