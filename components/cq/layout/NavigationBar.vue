<template>
  <v-app-bar class="navigation-bar" flat>
    <v-container class="d-flex align-center">
      <nuxt-link to="/">
        <v-img src="https://dummyimage.com/80/8d5b4c/ffffff" :width="50" alt="ColumnaQuiro" />
      </nuxt-link>
      <v-spacer />
      <nav>
        <cq-components-button
          v-for="item in $tm('navigationBar.links')"
          :key="$rt(item.text)"
          :to="$rt(item.to)"
          class="mr-4"
        >
          {{ $rt(item.text) }}
        </cq-components-button>
      </nav>
    </v-container>
  </v-app-bar>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.navigation-bar {
  -webkit-box-shadow: 0 -5px 13px 0 rgba(71,71,71,0.47);
  -moz-box-shadow: 0 -5px 13px 0 rgba(71,71,71,0.47);
  box-shadow: 0 -5px 13px 0 rgba(71,71,71,0.47);
}
</style>
