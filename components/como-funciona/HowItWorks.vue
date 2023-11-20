<template>
  <cq-layout-section class="how-it-works" shape="shape-secondary-light-left" :shape-width="200" shape-position="center-left">
    <h2 class="section-title">
      {{ t('howItWorks.steps.title') }}
    </h2>
    <div class="text-lg">
      {{ t('howItWorks.steps.description') }}
    </div>
    <client-only>
      <v-timeline
        align="start"
        class="pt-8"
        :direction="mdAndUp ? 'vertical' : 'vertical'"
        :density="mdAndUp ? 'default' : 'compact'"
      >
        <v-timeline-item
          v-for="item in items"
          :key="rt(item.title)"
          :dot-color="rt(item.color)"
          :icon="rt(item.icon)"
        >
          <v-card variant="outlined" :color="rt(item.color)">
            <v-card-title :class="['text-lg text-brand-black', `bg-${item.color}`]">
              {{ rt(item.title) }}
            </v-card-title>
            <v-card-text>
              <div class="text-base text-brand-black" v-html="rt(item.description)" />
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </client-only>
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useDisplay } from 'vuetify'

interface Item {
  title: string
  color: string
  description: string
  icon: string
}

const { mdAndUp } = useDisplay()
const { tm, rt, t } = useI18n()
const items: Item[] = tm('howItWorks.steps.items')
</script>
<style lang="scss">
.how-it-works {
  li {
    margin-left: 16px !important;
  }
}
</style>
