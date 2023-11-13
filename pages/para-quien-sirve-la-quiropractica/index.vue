<template>
  <div>
    <cq-layout-section class="bg-brand-light-secondary">
      <h1 class="section-title">
        {{ t('paraQuienSirveLaQuiropractica.title') }}
      </h1>
      <div class="text-base" v-html="t('paraQuienSirveLaQuiropractica.description')" />
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

useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(t('paraQuienSirveLaQuiropractica.seo.title'), t('paraQuienSirveLaQuiropractica.seo.description'))
</script>
