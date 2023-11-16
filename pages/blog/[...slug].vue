<template>
  <cq-layout-section class="article">
    <ContentDoc head>
      <template #not-found>
        <h2>Blog slug ({{ $route.params.slug }}) not found</h2>
      </template>
    </ContentDoc>
  </cq-layout-section>
</template>
<script setup>
</script>
<style lang="scss">
.article {
  p {
    @apply mt-4;
  }
  img {
    @apply md:max-w-[500px];
  }
}
</style>
