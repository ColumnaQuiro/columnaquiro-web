<template>
  <v-footer class="footer bg-whiteBranded">
    <v-container class="pa-0 pb-md-4 pt-md-10">
      <div class="d-flex flex-column flex-md-row justify-space-between">
        <cq-layout-footer-company-details class="pb-md-0 pb-4"/>
        <cq-layout-footer-timetable />
      </div>
      <v-divider color="#ffffff" class="my-4" />
      <cq-layout-footer-copyright />
    </v-container>
  </v-footer>
</template>
<script setup lang="ts">
</script>
<style lang="scss">
.footer {
  display: block !important;
}
</style>
