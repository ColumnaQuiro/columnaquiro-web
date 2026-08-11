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
    <div class="mx-auto max-w-6xl px-6 py-16">
      <NuxtLink :to="locale === 'es' ? '/' : '/en'" class="inline-flex items-center">
        <img src="/assets/images/logo-quiro-white.png" alt="ColumnaQuiro" class="w-24" />
      </NuxtLink>

      <div class="mt-10 grid gap-10 sm:grid-cols-3">
        <div>
          <h3 class="text-sm font-semibold text-gold-dark">{{ t('footer.tagline') }}</h3>
          <div class="mt-4 flex flex-col gap-2 text-sm text-cream/90">
            <a :href="clinic.mapsUrl" target="_blank" rel="noopener" class="hover:text-white">{{
              clinic.address
            }}</a>
            <a :href="`mailto:${clinic.email}`" class="hover:text-white">{{ clinic.email }}</a>
            <a :href="`tel:${clinic.phone.replace(/\\s/g, '')}`" class="hover:text-white">{{
              clinic.phone
            }}</a>
          </div>
          <div class="mt-5 flex gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener"
              :aria-label="social.label"
              class="text-cream/90 hover:text-white"
            >
              <SocialIcon :name="social.label as 'Instagram' | 'Facebook' | 'WhatsApp'" />
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-gold-dark">{{ t('footer.sintomas') }}</h3>
          <div class="mt-4 flex flex-col gap-2 text-sm text-cream/90">
            <NuxtLink
              v-for="symptom in symptomsList"
              :key="symptom.slugEs"
              :to="`${locale === 'es' ? '/sintomas' : '/en/symptoms'}/${
                locale === 'es'
                  ? symptom.slugEs
                  : symptomSlugPairs.find((p) => p.es === symptom.slugEs)?.en
              }`"
              class="hover:text-white"
            >
              {{ symptom.label }}
            </NuxtLink>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-gold-dark">{{ t('footer.horarios') }}</h3>
          <div class="mt-4 space-y-2 text-sm text-cream/90">
            <div v-for="item in schedule" :key="item.dayKey" class="flex justify-between gap-4">
              <span>{{ t(`footer.days.${item.dayKey}`) }}:</span>
              <span class="text-right">{{ item.hours ?? t('footer.closed') }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 border-t border-cream/15 pt-6 text-center text-xs text-cream/70">
        <p>{{ clinic.name }} © {{ year }}</p>
        <div class="mt-2 flex flex-wrap items-center justify-center gap-4">
          <NuxtLink
            v-for="link in legalLinks"
            :key="link.key"
            :to="pathFor(link.routeKey, locale)"
            class="hover:text-white"
          >
            {{ t(`footer.legal.${link.key}`) }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
