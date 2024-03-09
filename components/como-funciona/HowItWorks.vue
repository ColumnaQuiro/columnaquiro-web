<template>
  <cq-layout-section class="how-it-works" shape="shape-secondary-light-left" :shape-width="200" shape-position="center-left">
    <h2 class="section-title">
      {{ t('howItWorks.steps.title') }}
    </h2>
    <div class="text-lg pb-8">
      {{ t('howItWorks.steps.description') }}
    </div>
    <div>
      <div
        v-for="(item, i) in items"
        :key="rt(item.title)"
        class="flex flex-col lg:flex-row"
      >
        <div
          :class="[`flex-1 bg-light-background border-dashed h-[116px]`, {
            'lg:border-l rounded-full lg:rounded-l-none lg:rounded-r-full border-l-brand-black':i % 2 !== 0,
            'lg:border-r rounded-full lg:rounded-r-none lg:rounded-l-full border-r-brand-black': i % 2 === 0,
            'lg:order-2': i % 2 !== 0
          }]"
        >
          <div class="flex justify-start lg:justify-between items-center px-2 lg:px-4 py-2 lg:py-0 lg:h-full">
            <div
              :class="[`flex justify-center items-center bg-${rt(item.color)} rounded-full w-[64px] h-[64px] lg:w-[84px] lg:h-[84px]`,
                       {
                         'lg:order-2': i % 2 !== 0
                       }
              ]"
            >
              <div class="text-xl font-medium">
                {{ i + 1 }}
              </div>
            </div>
            <div
              :class="['pl-4 text-lg font-medium', {
                'text-end': i % 2 === 0
              }]"
            >
              <div>
                {{ rt(item.title) }}
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center flex-1">
          <div class="text-base w-fit pt-2 pb-4 px-2 lg:pt-0 lg:pb-0 lg:px-4" v-html="rt(item.description)" />
        </div>
      </div>
    </div>
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Item {
  title: string
  color: string
  description: string
}

const { tm, rt, t } = useI18n()
const items: Item[] = tm('howItWorks.steps.items')
</script>
<style lang="scss">
.how-it-works {
  ul {
    @apply my-0;

    li::marker {
      @apply text-brand-tertiary;
    }
  }
}
</style>
