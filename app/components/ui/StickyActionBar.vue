<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useNavigation } from '@/composables/useNavigation'
import { useStickyBar } from '@/composables/useStickyBar'
import { clinic, socialLinks } from '@/data/clinic'
import SocialIcon from '@/components/ui/SocialIcon.vue'

// Phone-only bar with the three ways to get an appointment. 83% of visitors
// and 92% of bookings are on phones, and until now the only persistent
// control on a phone was the WhatsApp bubble; the "Reservar" button lived in
// the hero and in a collapsed menu. The bar slides in once the hero's own
// buttons have scrolled away, so the first screen is not shouting twice.
const { locale } = useAppI18n()
const { reservaLink } = useNavigation()
const { shown } = useStickyBar()

const labels = {
  es: { book: 'Reservar', call: 'Llamar', whatsapp: 'WhatsApp' },
  en: { book: 'Book', call: 'Call', whatsapp: 'WhatsApp' },
}
const l = computed(() => labels[locale.value])

const telHref = `tel:+34${clinic.phone.replace(/\s/g, '')}`
const whatsappHref = socialLinks.find((link) => link.label === 'WhatsApp')?.href ?? ''

const pastHero = ref(false)
function onScroll() {
  pastHero.value = window.scrollY > 480
}
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <Transition name="sticky-bar">
    <div
      v-if="shown && pastHero"
      data-cta="sticky"
      class="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1.6fr_1fr_1fr] gap-2 border-t border-forest/10 bg-white px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2.5 shadow-[0_-6px_20px_rgba(0,0,0,0.08)] md:hidden"
    >
      <NuxtLink
        :to="reservaLink.to"
        class="flex items-center justify-center gap-1.5 rounded-xl bg-gold px-3 py-3 text-sm font-semibold text-gold-dark"
      >
        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
        {{ l.book }}
      </NuxtLink>
      <a
        :href="telHref"
        class="flex items-center justify-center gap-1.5 rounded-xl border border-forest px-3 py-3 text-sm font-semibold text-forest"
      >
        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
        {{ l.call }}
      </a>
      <a
        :href="whatsappHref"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center gap-1.5 rounded-xl bg-[#25d366] px-3 py-3 text-sm font-semibold text-white"
      >
        <SocialIcon name="WhatsApp" size-class="h-4 w-4" />
        {{ l.whatsapp }}
      </a>
    </div>
  </Transition>
</template>

<style scoped>
.sticky-bar-enter-active,
.sticky-bar-leave-active {
  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}
.sticky-bar-enter-from,
.sticky-bar-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
@media (prefers-reduced-motion: reduce) {
  .sticky-bar-enter-active,
  .sticky-bar-leave-active {
    transition: none;
  }
}
</style>
