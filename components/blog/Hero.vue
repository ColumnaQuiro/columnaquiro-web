<template>
  <h1 class="section-title !pb-0 text-center md:text-left">
    {{ t('blog.hero.title') }}
  </h1>
  <p class="text-center md:text-left" v-html="t('blog.hero.body')" />
</template>
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
