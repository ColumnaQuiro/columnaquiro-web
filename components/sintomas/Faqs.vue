<template>
  <cq-layout-section>
    <h2 class="text-3xl pb-3">
      {{ t(`symptoms.${symptom}.faqs.title`) }}
    </h2>
    <div>
      <cq-components-expansion-panel
        v-for="faq in faqs"
        :key="faq.title"
        :title="rt(faq.title)"
        :answer="rt(faq.body)"
        class="mb-4"
      />
    </div>
  </cq-layout-section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSEO } from '~/composables/seo'
import type { FAQ } from '~/types/Faq'

const props = defineProps({
  symptom: {
    type: String,
    required: true
  }
})

const { t, tm, rt } = useI18n()
const faqs: FAQ[] = tm(`symptoms.${props.symptom}.faqs.items`)
const useSeo = useSEO()
const faqsSchema = [
  ...faqs.map(faq => ({
    '@type': 'Question',
    name: rt(faq.title),
    acceptedAnswer: {
      '@type': 'Answer',
      text: rt(faq.body)
    }
  }))
]
useSeo.setSchemaOrgTag({
  type: 'FAQPage',
  customProps: {
    mainEntity: faqsSchema
  }
})
</script>
