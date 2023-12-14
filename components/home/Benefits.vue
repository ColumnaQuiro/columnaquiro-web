<template>
  <cq-layout-section>
    <h2 class="section-title">
      Beneficios de la quiropráctica
    </h2>
    <cq-blocks-sections-paragraph-with-image
      :text="t('home.interferencesSchema.description')"
      image="website/home/benefits.webp"
      :image-width="500"
      image-position="left"
    >
      <template #text>
        <div class="w-full md:max-w-[400px]">
          <div v-for="benefit in benefits" :key="benefit.text">
            <h3 class="text-base">
              {{ benefit.text }}
            </h3>
          </div>
        </div>
      </template>
    </cq-blocks-sections-paragraph-with-image>
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const benefits = [
  {
    text: 'dolor de cabeza'
  },
  {
    text: 'Dolor de espalda'
  },
  {
    text: 'Problemas digestivos'
  },
  {
    text: 'Problemas de sueño'
  },
  {
    text: 'Ansiedad, depresion'
  },
  {
    text: 'Problemas de mandibula'
  },
  {
    text: 'Problemas de aparato reproductivo'
  },
  {
    text: 'Problemas de visión y oído'
  }
]
</script>
