<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { clinic, socialLinks, schedule, symptoms, legalLinks } from '@/data/clinic'
import { pathFor, SYMPTOM_SLUG_PAIRS as symptomSlugPairs } from '@/utils/site-routes'
import SocialIcon from '@/components/ui/SocialIcon.vue'

const { t, locale } = useAppI18n()
const year = new Date().getFullYear()
const symptomsList = computed(() => symptoms[locale.value])
</script>

<template>
  <footer class="bg-forest text-cream">
    <div class="mx-auto max-w-[calc(1280px+3.75rem)] px-[30px] pb-[15px] pt-[50px]">
      <NuxtLink :to="locale === 'es' ? '/' : '/en'" class="inline-flex items-center">
        <img
          src="/assets/images/logo-quiro-footer.avif"
          alt="ColumnaQuiro"
          width="96"
          height="44"
          class="w-24"
        />
      </NuxtLink>

      <div class="mt-10 flex flex-col gap-10 sm:flex-row sm:justify-between">
        <div>
          <h3 class="text-base font-medium text-gold-light">{{ t('footer.tagline') }}</h3>
          <div class="mt-4 flex flex-col text-sm text-sage">
            <a :href="clinic.mapsUrl" target="_blank" rel="noopener" class="flex min-h-11 items-center hover:text-white">{{
              clinic.address
            }}</a>
            <a :href="`mailto:${clinic.email}`" class="flex min-h-11 items-center hover:text-white">{{ clinic.email }}</a>
            <a :href="clinic.phoneHref" class="flex min-h-11 items-center hover:text-white">{{
              clinic.phone
            }}</a>
          </div>
          <NuxtLink :to="pathFor('resenas', locale)" class="mt-2 inline-flex min-h-11 items-center text-sm text-sage underline hover:text-white">{{
            t('footer.resenas')
          }}</NuxtLink>
          <div class="mt-3 flex gap-1">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener"
              :aria-label="social.label"
              class="flex h-11 w-11 items-center justify-center text-sage hover:text-white"
            >
              <SocialIcon :name="social.label as 'Instagram' | 'Facebook' | 'WhatsApp'" />
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-base font-medium text-gold-light">{{ t('footer.sintomas') }}</h3>
          <div class="mt-4 flex flex-col text-sm text-sage">
            <NuxtLink
              v-for="symptom in symptomsList"
              :key="symptom.slugEs"
              :to="`${locale === 'es' ? '/sintomas' : '/en/symptoms'}/${
                locale === 'es'
                  ? symptom.slugEs
                  : symptomSlugPairs.find((p) => p.es === symptom.slugEs)?.en
              }`"
              class="flex min-h-11 items-center hover:text-white md:min-h-8"
            >
              {{ symptom.label }}
            </NuxtLink>
          </div>
        </div>

        <div>
          <h3 class="text-base font-medium text-gold-light">{{ t('footer.horarios') }}</h3>
          <div class="mt-4 space-y-2 text-sm text-sage">
            <div v-for="item in schedule" :key="item.dayKey" class="flex justify-between gap-4">
              <span>{{ t(`footer.days.${item.dayKey}`) }}:</span>
              <span class="text-right">{{ item.hours ?? t('footer.closed') }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 border-t border-cream/15 pt-4">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <p class="text-sm text-sage">{{ clinic.name }} © {{ year }}</p>
          <div class="flex flex-wrap items-center gap-x-4 text-sm text-white">
            <NuxtLink
              v-for="link in legalLinks"
              :key="link.key"
              :to="pathFor(link.routeKey, locale)"
              class="inline-flex min-h-11 items-center hover:text-gold"
            >
              {{ t(`footer.legal.${link.key}`) }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
