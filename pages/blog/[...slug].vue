<template>
  <cq-layout-section>
    <ContentDoc head>
      <template #not-found>
        <h2>Blog slug ({{ $route.params.slug }}) not found</h2>
      </template>
    </ContentDoc>
  </cq-layout-section>
</template>
<script setup>
useSetSEOTags()
</script>
