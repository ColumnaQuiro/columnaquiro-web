<template>
  <div>
    <h1 class="section-title pb-4">
      {{ t('contact.title') }}
    </h1>
    <h2 class="text-2xl text-center">
      {{ t('contact.subtitle') }}
    </h2>
    <contacto-form />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/seo'

const { t } = useI18n()
const useSeo = useSEO()

useSeo.setI18nTags()
useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(t('contact.seo.title'), t('contact.seo.description'))
</script>
