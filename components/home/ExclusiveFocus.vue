<template>
  <cq-layout-section shape="shape-secondary-light-left" :shape-width="100" shape-position="top-left">
    <h2 class="section-title pb-4">
      {{ t('home.exclusiveFocus.title') }}
    </h2>
    <div class="pb-8" v-html="t('home.exclusiveFocus.intro')" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
      <div
        v-for="specification in specifications"
        :key="rt(specification.id)"
      >
        <NuxtImg
          class="quiro-logos__logo mx-auto mb-4"
          :src="`icons/icon__${rt(specification.id)}.webp`"
          :width="120"
          provider="s3"
          :alt="rt(specification.id)"
          loading="lazy"
        />
        <div class="text-xl mb-2 font-medium">
          {{ rt(specification.title) }}
        </div>

        <div class="text-base">
          {{ rt(specification.body) }}
        </div>
      </div>
    </div>
    <div class="pt-8" v-html="t('home.exclusiveFocus.footer')" />
  </cq-layout-section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Specification {
  id: string
  title: string
  body: string
}

const { t, tm, rt } = useI18n()
const specifications: Specification[] = tm('home.exclusiveFocus.specifications')
</script>
<style lang="scss"></style>
