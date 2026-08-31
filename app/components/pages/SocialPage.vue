<script setup lang="ts">
import { clinic, socialLinks } from '@/data/clinic'
import { pathFor } from '@/utils/site-routes'
import SocialIcon from '@/components/ui/SocialIcon.vue'
import CookieConsent from '@/components/ui/CookieConsent.vue'
import { useSeo } from '@/composables/useSeo'

useSeo({
  title: 'ColumnaQuiro | Enlaces',
  description:
    'Reserva tu primera visita, contáctanos o conoce nuestro centro quiropráctico en Valencia.',
})

// Overrides the site-wide body padding reserved for AppHeader (this page
// skips the default layout), scoped to this component's lifetime.
useHead({
  style: [{ innerHTML: 'body{padding-top:0 !important}' }],
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

const links = [
  {
    label: 'Reserva tu primera visita',
    to: pathFor('reserva-cita', 'es'),
    icon: 'calendar' as const,
  },
  {
    label: 'Contáctanos',
    to: pathFor('contacto', 'es'),
    icon: 'chat' as const,
  },
  {
    label: 'Conócenos mejor',
    to: pathFor('centro', 'es'),
    icon: 'heart' as const,
  },
]
</script>

<template>
  <div class="flex min-h-screen flex-col items-center bg-forest px-6 py-16 text-center">
    <img
      src="/assets/images/logo-quiro-white.png"
      alt="ColumnaQuiro"
      width="120"
      height="52"
      class="h-12 w-auto"
    />
    <h1 class="mt-6 text-2xl font-semibold text-white">ColumnaQuiro</h1>
    <p class="mt-2 text-sm text-cream/70">Tu Centro Quiropráctico en Valencia</p>

    <div class="mt-10 flex w-full max-w-sm flex-col gap-4">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 text-left shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-colors hover:bg-gold/20"
      >
        <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-dark">
          <svg
            v-if="link.icon === 'calendar'"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            class="h-5 w-5"
          >
            <rect x="3.75" y="5.25" width="16.5" height="15" rx="2.25" />
            <path d="M3.75 9.75h16.5M8.25 3v3.75M15.75 3v3.75" stroke-linecap="round" />
          </svg>
          <svg
            v-else-if="link.icon === 'chat'"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            class="h-5 w-5"
          >
            <path
              d="M4 5.25h16v10.5H8.5L4 19.5V5.25Z"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            v-else
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            class="h-5 w-5"
          >
            <path
              d="M12 20.25c-.3 0-.6-.1-.85-.3C7.4 16.9 4 13.8 4 10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 3.8-3.4 6.9-7.15 9.95-.25.2-.55.3-.85.3Z"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span class="text-base font-medium text-forest">{{ link.label }}</span>
      </NuxtLink>
    </div>

    <div class="mt-10 flex items-center gap-4">
      <a
        v-for="social in socialLinks"
        :key="social.label"
        :href="social.href"
        target="_blank"
        rel="noopener"
        :aria-label="social.label"
        class="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <SocialIcon :name="social.label as 'Instagram' | 'Facebook' | 'WhatsApp'" />
      </a>
    </div>

    <p class="mt-12 text-xs text-cream/50">{{ clinic.address }}</p>
  </div>
  <CookieConsent />
</template>
