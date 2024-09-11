<template>
  <cq-layout-section>
    <cq-blocks-sections-paragraph-with-image
      provider="cloudinary"
      image="website/home/preguntas-frecuentes.webp"
      :image-alt="title"
      :image-width="450"
      image-position="left"
    >
      <template #text>
        <h2 class="section-title pb-10">
          {{ title }}
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
      </template>
    </cq-blocks-sections-paragraph-with-image>
  </cq-layout-section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { PropType } from 'vue'
import { useSEO } from '~/composables/seo'
import type { FAQ } from '~/types/Faq'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  faqs: {
    type: Array as PropType<FAQ[]>,
    required: true
  }
})

const { rt } = useI18n()
const useSeo = useSEO()

const faqsSchema = [
  ...props.faqs.map(faq => ({
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
