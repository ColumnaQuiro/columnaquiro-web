<template>
  <div>
    <para-quien-sirve-la-quiropractica-intro :personType="personType"/>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const personType: string | string [] = route.params.type
</script>
