<template>
  <footer class="footer bg-luxury-black">
    <div class="!container p-0 md:pb-4 md:pt-20">
      <NuxtImg
        src="logo/logo-color.webp"
        provider="s3"
        :width="100"
        alt="ColumnaQuiro"
        class="md:mx-0 mx-auto"
        loading="lazy"
      />
      <div class="flex flex-col md:flex-row justify-between pt-10">
        <cq-layout-footer-company-details class="md:pb-0 pb-8" />
        <cq-layout-footer-symptoms class="md:pb-0 pb-8" />
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
  @apply pt-12;
  @apply md:pt-0;
}
</style>
