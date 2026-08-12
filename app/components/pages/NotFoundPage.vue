<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

useHead({
  title: () => t('common.notFoundTitle'),
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
</script>

<template>
  <section class="mx-auto max-w-[calc(1280px+3rem)] px-6 py-24 text-center">
    <h1 class="text-4xl font-semibold text-forest">{{ t('common.notFoundTitle') }}</h1>
    <NuxtLink :to="locale === 'es' ? '/' : '/en'" class="mt-4 inline-block text-gold-dark underline">
      {{ t('common.notFoundLink') }}
    </NuxtLink>
  </section>
</template>
