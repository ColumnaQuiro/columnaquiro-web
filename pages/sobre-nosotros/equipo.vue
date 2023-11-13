<template>
  <div>
    <nuestro-equipo-people />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/seo'

const { t } = useI18n()
const useSeo = useSEO()

useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(t('equipo.seo.title'), t('equipo.seo.description'))
</script>
