<script setup lang="ts">
import { computed } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { findCategoryPage } from '@/data/category-pages'
import { useSeo } from '@/composables/useSeo'
import { breadcrumbJsonLd } from '@/utils/schema'
import { CATEGORY_HUB } from '@/utils/site-routes'
import CtaBanner from '@/components/ui/CtaBanner.vue'
import PageHero from '@/components/ui/PageHero.vue'

const route = useRoute()
const { locale, t } = useAppI18n()
const page = computed(() => findCategoryPage(route.params.category as string))
const content = computed(() => (page.value ? page.value[locale.value] : undefined))

const seoTitle = computed(() => {
  if (!content.value) return 'ColumnaQuiro'
  if (content.value.seoTitle) return `${content.value.seoTitle} | ColumnaQuiro`
  return locale.value === 'es'
    ? `Quiropráctica para ${content.value.title} | ColumnaQuiro`
    : `Chiropractic for ${content.value.title} | ColumnaQuiro`
})
const seoDescription = computed(() => content.value?.description ?? content.value?.intro[0] ?? '')
useSeo({ title: seoTitle, description: seoDescription })

useHead({
  script: [
    {
      type: 'application/ld+json',
      key: 'breadcrumbs',
      innerHTML: () =>
        JSON.stringify(
          breadcrumbJsonLd(locale.value, [
            { name: t('nav.paraTodos'), path: CATEGORY_HUB[locale.value] },
            { name: content.value?.title ?? '', path: route.path },
          ]),
        ),
    },
  ],
})
</script>

<template>
  <PageHero
    v-if="content && page"
    :eyebrow="t('nav.paraTodos')"
    :title="content.title"
    :body="content.intro[0]"
    :image="page.heroImage"
    :image-alt="content.title"
  />

  <section v-if="content" class="mx-auto max-w-3xl px-6 py-24">
    <div class="space-y-4 text-body/80">
      <p v-for="(paragraph, i) in content.intro.slice(1)" :key="i" v-html="paragraph" />
    </div>

    <ul v-if="content.list" class="mt-6 space-y-3">
      <li v-for="item in content.list" :key="item.lead" class="text-body/80">
        <span class="font-semibold text-forest">{{ item.lead }}</span> <span v-html="item.text" />
      </li>
    </ul>

    <div v-if="content.extra" class="mt-6 space-y-4 text-body/80">
      <p v-for="(paragraph, i) in content.extra" :key="i" v-html="paragraph" />
    </div>

    <template v-for="section in content.sections" :key="section.heading">
      <h2 class="mt-10 text-xl font-semibold text-forest">{{ section.heading }}</h2>
      <div v-if="section.paragraphs" class="mt-4 space-y-4 text-body/80">
        <p v-for="(paragraph, i) in section.paragraphs" :key="i" v-html="paragraph" />
      </div>
      <ul v-if="section.items" class="mt-4 list-disc space-y-1 pl-5 text-body/80">
        <li v-for="item in section.items" :key="item">{{ item }}</li>
      </ul>
    </template>

    <template v-if="content.redFlags?.length">
      <h2 class="mt-10 text-xl font-semibold text-forest">
        {{ locale === 'es' ? 'Cuándo ir antes al médico' : 'When to see a doctor first' }}
      </h2>
      <ul class="mt-4 list-disc space-y-1 pl-5 text-body/80">
        <li v-for="flag in content.redFlags" :key="flag">{{ flag }}</li>
      </ul>
    </template>

    <template v-if="content.related?.length">
      <h2 class="mt-10 text-xl font-semibold text-forest">
        {{ locale === 'es' ? 'Para saber más' : 'Read more' }}
      </h2>
      <ul class="mt-4 space-y-2">
        <li v-for="link in content.related" :key="link.href">
          <NuxtLink :to="link.href" class="font-semibold text-gold-dark underline">{{ link.label }}</NuxtLink>
        </li>
      </ul>
    </template>

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
