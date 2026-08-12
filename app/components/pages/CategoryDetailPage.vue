<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { findCategoryPage } from '@/data/category-pages'
import { useSeo } from '@/composables/useSeo'
import { SITE_URL } from '@/utils/seo'
import CtaBanner from '@/components/ui/CtaBanner.vue'

const route = useRoute()
const { locale, t } = useAppI18n()
const page = computed(() => findCategoryPage(route.params.category as string))
const content = computed(() => (page.value ? page.value[locale.value] : undefined))

const seoTitle = computed(() =>
  content.value
    ? locale.value === 'es'
      ? `Quiropráctica para ${content.value.title} | ColumnaQuiro`
      : `Chiropractic for ${content.value.title} | ColumnaQuiro`
    : 'ColumnaQuiro',
)
const seoDescription = computed(() => content.value?.intro[0] ?? '')
useSeo({ title: seoTitle, description: seoDescription })

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: () =>
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}${locale.value === 'es' ? '/' : '/en'}` },
            {
              '@type': 'ListItem',
              position: 2,
              name: t('nav.paraTodos'),
              item: `${SITE_URL}${locale.value === 'es' ? '/para-quien-sirve-la-quiropractica' : '/en/who-is-chiropractic-for'}`,
            },
            { '@type': 'ListItem', position: 3, name: content.value?.title ?? '', item: `${SITE_URL}${route.path}` },
          ],
        }),
    },
  ],
})
</script>

<template>
  <section v-if="content" class="mx-auto max-w-3xl px-6 py-24">
    <p class="text-sm font-semibold uppercase tracking-wide text-gold-dark">
      {{ t('nav.paraTodos') }}
    </p>
    <h1 class="mt-4 text-4xl font-semibold text-forest sm:text-5xl">{{ content.title }}</h1>

    <div class="mt-8 space-y-4 text-body/80">
      <p v-for="(paragraph, i) in content.intro" :key="i">{{ paragraph }}</p>
    </div>

    <ul v-if="content.list" class="mt-6 space-y-3">
      <li v-for="item in content.list" :key="item.lead" class="text-body/80">
        <span class="font-semibold text-forest">{{ item.lead }}</span> {{ item.text }}
      </li>
    </ul>

    <div v-if="content.extra" class="mt-6 space-y-4 text-body/80">
      <p v-for="(paragraph, i) in content.extra" :key="i">{{ paragraph }}</p>
    </div>

    <h2 class="mt-16 text-2xl font-semibold text-forest">{{ t('common.sintomasAsociados') }}</h2>
    <div class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
      <div
        v-for="symptom in content.symptoms"
        :key="symptom.label"
        class="rounded-2xl bg-white p-4 text-center shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
      >
        <img :src="symptom.image" :alt="symptom.label" class="mx-auto h-12 w-12 object-contain" />
        <p class="mt-3 text-sm font-medium text-forest">{{ symptom.label }}</p>
      </div>
    </div>
  </section>

  <CtaBanner />
</template>
