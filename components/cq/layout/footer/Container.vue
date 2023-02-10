<template>
  <v-footer class="footer !bg-brand-white">
    <div class="!container p-0 md:pb-4 md:pt-10">
      <div class="flex flex-col md:flex-row justify-between">
        <cq-layout-footer-company-details class="md:pb-0 pb-4"/>
      </div>
      <v-divider color="#ffffff" class="my-4" />
      <cq-layout-footer-copyright />
    </div>
  </v-footer>
</template>
<script setup lang="ts">
</script>
<style lang="scss">
.footer {
  display: block !important;
}
</style>
