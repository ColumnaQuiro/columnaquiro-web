<script setup lang="ts">
import { computed } from 'vue'
import SocialIcon from '@/components/ui/SocialIcon.vue'
import { socialLinks } from '@/data/clinic'
import { useAppI18n } from '@/composables/useAppI18n'

const { locale } = useAppI18n()

// Same number as the footer and contact page -- sourced from clinic.ts so
// there is one place to change it.
const href = socialLinks.find((link) => link.label === 'WhatsApp')?.href ?? ''

const label = computed(() =>
  locale.value === 'es' ? 'Escríbenos por WhatsApp' : 'Message us on WhatsApp',
)
</script>

<template>
  <!--
    z-40 keeps this above page content but below the header (z-50) and the
    cookie banner (z-[100]), so a full-width consent banner covers it rather
    than the button floating on top of the consent choice.
  -->
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="label"
    :title="label"
    class="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128c7e] motion-reduce:transition-none motion-reduce:hover:scale-100 sm:bottom-6 sm:right-6"
  >
    <SocialIcon name="WhatsApp" size-class="h-7 w-7" />
  </a>
</template>
