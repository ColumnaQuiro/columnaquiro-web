<template>
  <div>
    <como-funciona-primera-visita-intro />
    <como-funciona-how-it-works />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/seo'

const { t } = useI18n()

useSEO().setSeoTags(t('comoFunciona.seo.title'), t('comoFunciona.seo.description'))
</script>
