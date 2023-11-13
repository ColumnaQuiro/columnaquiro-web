<template>
  <div>
    <nuestro-centro-intro />
    <nuestro-centro-waiting-room />
    <nuestro-centro-first-visit-room />
    <nuestro-centro-adjustment-room />
    <nuestro-centro-library-room />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/seo'

const { t } = useI18n()
const useSeo = useSEO()

useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(t('nuestroCentro.seo.title'), t('nuestroCentro.seo.description'))
</script>

<style scoped>

</style>
