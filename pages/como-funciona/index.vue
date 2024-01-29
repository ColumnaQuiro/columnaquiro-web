<template>
  <div>
    <como-funciona-primera-visita-header />
    <como-funciona-primera-visita-intro />
    <como-funciona-how-it-works />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/seo'

const { t } = useI18n()
const useSeo = useSEO()

useSeo.setI18nTags()
useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(t('howItWorks.seo.title'), t('howItWorks.seo.description'))
</script>
