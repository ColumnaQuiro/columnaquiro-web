<template>
  <div>
    <div>
      Redirecting to Belvo universal link
    </div>
    <button @click="goToUniversalLink">
      click to go with open
    </button>
    <button @click="goToUniversalLinkReplace">
      click to go with replace
    </button>
  </div>
</template>

<script setup lang="ts">

const goToUniversalLink = () => {
  window.open('https://wa.me/645967420', '_self')
}
const goToUniversalLinkReplace = () => {
  window.location.replace('https://wa.me/645967420')
}
onMounted(() => {
  window.setTimeout(() => window.open('https://wa.me/645967420', '_self'), 6000)
})
</script>
