<template>
  <div>
    <cq-layout-section class="bg-brand-light-secondary">
      <h1 class="section-title">
        {{ t('chiropracticForWhom.title') }}
      </h1>
      <div class="text-base" v-html="t('chiropracticForWhom.description')" />
      <cq-blocks-to-who />
    </cq-layout-section>
    <cq-blocks-order-appointment-section />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/seo'

const { t } = useI18n()
const useSeo = useSEO()

useSeo.setI18nTags()
useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(t('chiropracticForWhom.seo.title'), t('chiropracticForWhom.seo.description'))
</script>
