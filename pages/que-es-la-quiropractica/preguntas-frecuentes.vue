<template>
  <cq-layout-section>
    <div v-for="section in sections" :key="section.title" class="mb-14">
      <h2 class="text-3xl pb-3">
        {{ rt(section.title) }}
      </h2>
      <div class="text-base pb-6">
        {{ rt(section.body) }}
      </div>
      <div>
        <cq-components-expansion-panel
          v-for="faq in section.faqs"
          :key="faq.title"
          :title="rt(faq.title)"
          class="mb-3"
        >
          <template #answer>
            <div v-html="rt(faq.body)" />
          </template>
        </cq-components-expansion-panel>
      </div>
    </div>
  </cq-layout-section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSetSEOTags } from '~/composables/seo'

const { t, tm, rt } = useI18n()
const sections = tm('faqs.sections')

useSetSEOTags(t('faqs.seo.title'), t('faqs.seo.description'))
</script>
