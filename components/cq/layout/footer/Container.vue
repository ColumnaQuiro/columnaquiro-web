<template>
  <footer class="footer">
    <div class="!container p-0 md:pb-4 md:pt-16">
      <div class="flex flex-col md:flex-row justify-between md:items-end">
        <cq-layout-footer-company-details class="md:pb-0 pb-4" />
        <cq-layout-footer-timetable />
      </div>
      <cq-layout-footer-copyright class="mt-8" />
    </div>
  </footer>
</template>
<script setup lang="ts">
</script>
<style lang="scss">
.footer {
  display: block !important;
  background: url('https://statics.columnaquiro.com/website/shapes/footer-shape.webp') !important;
  background-size: cover !important;
  @apply pt-10;
  @apply md:pt-0;
}
</style>
