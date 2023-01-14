<template>
  <div>
    {{ personType }}
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const personType = route.params.type
</script>
