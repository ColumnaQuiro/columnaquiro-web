<script setup lang="ts">
import { useAppI18n } from '@/composables/useAppI18n'

const { locale } = useAppI18n()

useHead({
  script: [{ src: 'https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js', defer: true }],
})

const content = {
  es: {
    text: 'Este sitio web utiliza cookies propias y de terceros para mantener la sesión, ofrecerle una mejor experiencia de usuario y obtener datos estadísticos de navegación de los usuarios.',
    policyLink: 'Política de cookies',
    accept: 'Aceptar las cookies',
    customize: 'Personalizar las cookies',
    prefsTitle: 'Configuración de cookies',
    essentialLabel: 'Cookies para el funcionamiento de la web',
    essentialDesc:
      'Estas cookies son esenciales para el correcto funcionamiento del sitio web, sin estas cookies el sitio web puede no funcionar correctamente.',
    analyticsLabel: 'Cookies de Google Analytics',
    analyticsDesc:
      'Se utilizan para generar un identificador de usuario único, utilizado para hacer recuento de cuántas veces visita el sitio un usuario, así como la fecha de la primera y la última vez que visitó la web.',
    save: 'Guardar configuración',
    policyPath: '/politica-de-cookies',
  },
  en: {
    text: 'This website uses its own and third-party cookies to maintain your session, offer you a better user experience, and gather navigation statistics.',
    policyLink: 'Cookie policy',
    accept: 'Accept cookies',
    customize: 'Customize cookies',
    prefsTitle: 'Cookie settings',
    essentialLabel: 'Cookies for the website to function',
    essentialDesc:
      'These cookies are essential for the website to work correctly; without them the site may not function properly.',
    analyticsLabel: 'Google Analytics cookies',
    analyticsDesc:
      'Used to generate a unique user identifier, to count how many times a user visits the site, and the date of their first and last visit.',
    save: 'Save settings',
    policyPath: '/en/cookies-policy',
  },
}

const c = computed(() => content[locale.value])
</script>

<template>
  <div fs-cc="banner" class="fixed inset-x-0 bottom-0 z-[100] hidden">
    <div class="mx-auto max-w-2xl p-4">
      <div class="rounded-2xl bg-white p-6 shadow-lg">
        <p class="text-sm text-slate">
          {{ c.text }}
          <NuxtLink :to="c.policyPath" target="_blank" class="font-semibold text-gold-dark underline">{{
            c.policyLink
          }}</NuxtLink>
        </p>
        <div class="mt-4 flex flex-wrap gap-3">
          <a fs-cc="allow" href="#" role="button" class="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-dark hover:bg-gold-dark hover:text-white">{{
            c.accept
          }}</a>
          <a fs-cc="open-preferences" href="#" role="button" class="rounded-full border border-forest/20 px-5 py-2.5 text-sm font-semibold text-forest hover:bg-cream">{{
            c.customize
          }}</a>
        </div>
      </div>
    </div>
  </div>

  <div fs-cc="preferences" class="fixed inset-0 z-[110] hidden items-center justify-center bg-forest/40 p-4">
    <div class="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-lg">
      <a fs-cc="close" href="#" role="button" aria-label="Close" class="absolute right-4 top-4 text-2xl text-slate hover:text-forest">×</a>
      <h2 class="text-lg font-bold text-forest">{{ c.prefsTitle }}</h2>
      <p class="mt-3 text-sm text-slate">
        {{ c.text }}
        <NuxtLink :to="c.policyPath" target="_blank" class="font-semibold text-gold-dark underline">{{
          c.policyLink
        }}</NuxtLink>
      </p>

      <form class="mt-6 space-y-4">
        <div class="rounded-xl bg-cream p-4">
          <p class="font-semibold text-forest">{{ c.essentialLabel }}</p>
          <p class="mt-1 text-sm text-slate">{{ c.essentialDesc }}</p>
        </div>
        <label class="flex cursor-pointer items-start gap-3 rounded-xl bg-cream p-4">
          <input type="checkbox" fs-cc-checkbox="analytics" class="mt-1 h-4 w-4 shrink-0 accent-gold-dark" />
          <span>
            <span class="block font-semibold text-forest">{{ c.analyticsLabel }}</span>
            <span class="mt-1 block text-sm text-slate">{{ c.analyticsDesc }}</span>
          </span>
        </label>
      </form>

      <div class="mt-6 flex flex-wrap gap-3">
        <a fs-cc="allow" href="#" role="button" class="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-dark hover:bg-gold-dark hover:text-white">{{
          c.accept
        }}</a>
        <a fs-cc="submit" href="#" role="button" class="rounded-full border border-forest/20 px-5 py-2.5 text-sm font-semibold text-forest hover:bg-cream">{{
          c.save
        }}</a>
      </div>
    </div>
  </div>
</template>
