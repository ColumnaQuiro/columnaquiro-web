<template>
  <div>
    <como-funciona-primera-visita-intro />
    <como-funciona-how-it-works />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSetSEOTags } from '~/composables/seo'

const { t } = useI18n()

useSetSEOTags(t('comoFunciona.seo.title'), t('comoFunciona.seo.description'))
</script>
