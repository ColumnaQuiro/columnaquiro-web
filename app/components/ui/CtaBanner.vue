<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useNavigation } from '@/composables/useNavigation'

const { t } = useI18n()
const { reservaLink } = useNavigation()
</script>

<template>
  <section class="bg-beige px-6 py-24 text-center">
    <h2 class="text-4xl font-semibold text-forest">{{ t('cta.heading') }}</h2>
    <p class="mx-auto mt-4 max-w-2xl text-body/80">{{ t('cta.body') }}</p>
    <BaseButton :to="reservaLink.to" class="mt-8">{{ t('cta.button') }}</BaseButton>
  </section>
</template>
