<template>
  <div>
    <que-es-la-quiropractica-intro />
    <lazy-que-es-la-quiropractica-nervous-system />
    <lazy-que-es-la-quiropractica-interferences />
    <lazy-home-science class="bg-brand-tertiary" />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSetSEOTags } from '~/composables/seo'

const { t } = useI18n()

useSetSEOTags(t('queEsLaQuiropractica.seo.title'), t('queEsLaQuiropractica.seo.description'))
</script>
