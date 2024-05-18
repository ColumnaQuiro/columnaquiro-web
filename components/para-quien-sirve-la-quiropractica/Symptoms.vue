<template>
  <cq-layout-section>
    <h2 class="section-title">
      {{ t('chiropracticForWhom.types.symptoms.title') }}
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
      <div v-for="item in items" :key="rt(item.title)">
        <h3 class="text-xl pb-2 font-medium">
          {{ rt(item.title) }}
        </h3>
        <NuxtImg
          :src="`website/icons/symptoms/${rt(item.icon)}`"
          class="mx-auto"
          provider="cloudinary"
          loading="lazy"
          height="100"
          :alt="rt(item.title)"
        />
      </div>
    </div>
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Item {
  title: string
  icon: string
}
const props = defineProps({
  personType: {
    type: String,
    required: true
  }
})

const { t, rt, tm } = useI18n()
const items: Item[] = tm(`chiropracticForWhom.types.symptoms.items.${props.personType}`)
</script>
