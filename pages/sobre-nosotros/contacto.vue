<template>
  <div>
    <h1 class="section-title pb-4">
      {{ t('contacto.title') }}
    </h1>
    <h2 class="text-2xl text-center">
      {{ t('contacto.subtitle') }}
    </h2>
    <contacto-form />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/seo'

const { t } = useI18n()

useSEO().setSeoTags(t('contacto.seo.title'), t('contacto.seo.description'))
</script>
