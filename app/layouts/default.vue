<script setup lang="ts">
import { computed } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import CookieConsent from '@/components/ui/CookieConsent.vue'
import LocaleSuggestBar from '@/components/ui/LocaleSuggestBar.vue'
import StickyActionBar from '@/components/ui/StickyActionBar.vue'
import { useStickyBar } from '@/composables/useStickyBar'
import { useAppI18n } from '@/composables/useAppI18n'
import { siteGraphJsonLd } from '@/utils/schema'

const { shown: stickyBarShown } = useStickyBar()

const { locale } = useAppI18n()

useHead({
  // Read by main.css to lift the QuiroFlow chat bubble above the sticky bar
  // on a phone. The bubble is added to <body> by its own script, outside this
  // layout, so a class here is the one thing it can be placed by.
  bodyAttrs: { class: computed(() => (stickyBarShown.value ? 'has-sticky-bar' : '')) },
  script: [
    {
      key: 'site-graph',
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify(siteGraphJsonLd(locale.value)),
    },
  ],
})
</script>

<template>
  <div class="flex min-h-screen flex-col bg-cream" :class="{ 'pb-20 md:pb-0': stickyBarShown }">
    <AppHeader />
    <LocaleSuggestBar />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
    <StickyActionBar />
    <CookieConsent />
  </div>
</template>
