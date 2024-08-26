<template>
  <div>
    Redirecting to Belvo universal link
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  window.setTimeout(() => window.open('https://columnaquiro.com/test', '_self'), 2000)
})
</script>
