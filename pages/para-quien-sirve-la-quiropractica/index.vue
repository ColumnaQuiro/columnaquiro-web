<template>
  <div>
    <cq-blocks-sections-intro-section :title="t('chiropracticForWhom.title')" :description="t('chiropracticForWhom.subtitle')" background-image-url="https://res.cloudinary.com/dqrtj7gca/image/upload/f_auto,q_auto/v1/website/para-quien-sirve-la-quiropractica/intro" />
    <cq-layout-section>
      <div class="text-base" v-html="t('chiropracticForWhom.description')" />
      <cq-blocks-to-who />
      <cq-blocks-order-appointment-section />
    </cq-layout-section>
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
