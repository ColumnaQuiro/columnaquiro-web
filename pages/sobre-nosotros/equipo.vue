<template>
  <div>
    <nuestro-equipo-people />
  </div>
</template>

<script setup lang="ts">
import { useSEO } from '~/composables/seo'

const { t } = useI18n()
const useSeo = useSEO()

useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(t('team.seo.title'), t('team.seo.description'))
</script>
