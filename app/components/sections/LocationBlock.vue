<script setup lang="ts">
import { computed, ref } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { clinic, schedule, transit } from '@/data/clinic'
import { pathFor } from '@/utils/site-routes'

// Name, address, hours and how to get here, on the page itself. The home page
// never said where the clinic was above the footer; the competitors that rank
// in the map pack all do. The map is a click-to-load frame: an embedded Google
// map costs a few hundred KB of script, and most visitors only want the
// address and the "Cómo llegar" link, which opens the Maps app directly.
const { locale, t } = useAppI18n()

const content = {
  es: {
    title: 'Dónde estamos',
    hours: 'Horario',
    directions: 'Cómo llegar',
    call: 'Llamar',
    showMap: 'Ver mapa',
    mapTitle: 'Mapa de ColumnaQuiro en València',
    from: '¿Vienes de',
    russafa: 'Russafa',
    eixample: "L'Eixample",
  },
  en: {
    title: 'Where we are',
    hours: 'Opening hours',
    directions: 'Get directions',
    call: 'Call',
    showMap: 'Show map',
    mapTitle: 'Map of ColumnaQuiro in Valencia',
    from: 'Coming from',
    russafa: 'Russafa',
    eixample: "L'Eixample",
  },
}
const c = computed(() => content[locale.value])
const telHref = `tel:+34${clinic.phone.replace(/\s/g, '')}`
const mapOpen = ref(false)
const mapSrc =
  'https://www.google.com/maps?q=Carrer+dels+Vivons+29,+46006+Val%C3%A8ncia&output=embed&z=16'
</script>

<template>
  <section class="bg-tan px-6 py-20">
    <div class="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-[1fr_1fr_1.2fr] md:items-start">
      <div>
        <h2 class="section-title">{{ c.title }}</h2>
        <p class="mt-4 text-body">
          Carrer dels Vivons, 29, bajo izq.<br />
          L'Eixample (Russafa), 46006 València
        </p>
        <p class="mt-2 text-sm text-slate">{{ transit[locale] }}</p>
        <p class="mt-2 text-sm text-slate">
          {{ c.from }}
          <NuxtLink :to="pathFor('russafa', locale)" class="font-medium text-forest underline">{{ c.russafa }}</NuxtLink>
          ·
          <NuxtLink :to="pathFor('eixample', locale)" class="font-medium text-forest underline">{{ c.eixample }}</NuxtLink>?
        </p>
        <div class="mt-5 flex flex-wrap gap-2">
          <a
            :href="clinic.mapsUrl"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center rounded-xl bg-forest px-5 py-2.5 text-sm font-medium text-white hover:bg-forest-light"
            >{{ c.directions }}</a
          >
          <a
            :href="telHref"
            class="inline-flex items-center rounded-xl border border-forest px-5 py-2.5 text-sm font-medium text-forest hover:bg-forest hover:text-white"
            >{{ c.call }} · {{ clinic.phone }}</a
          >
        </div>
      </div>

      <div>
        <h3 class="text-base font-semibold text-forest">{{ c.hours }}</h3>
        <dl class="mt-3 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-sm text-body">
          <template v-for="row in schedule" :key="row.dayKey">
            <dt class="font-medium text-forest">{{ t(`footer.days.${row.dayKey}`) }}</dt>
            <dd>{{ row.hours ?? t('footer.closed') }}</dd>
          </template>
        </dl>
      </div>

      <div class="relative min-h-[220px] overflow-hidden rounded-2xl bg-taupe-dark">
        <iframe
          v-if="mapOpen"
          :src="mapSrc"
          :title="c.mapTitle"
          class="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
        <button
          v-else
          type="button"
          class="absolute inset-0 flex h-full w-full items-center justify-center bg-[repeating-linear-gradient(45deg,#e7e1dc_0_10px,#ede7e2_10px_20px)]"
          @click="mapOpen = true"
        >
          <span class="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-forest shadow-md">{{ c.showMap }}</span>
        </button>
      </div>
    </div>
  </section>
</template>
