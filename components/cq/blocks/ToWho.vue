<template>
  <v-row class="to-who pt-10">
    <v-col
      v-for="item in items"
      :key="rt(item.key)"
      cols="12"
      md="6"
      lg="4"
    >
      <v-card
        :flat="true"
        :to="localePath(`/para-quien-sirve-la-quiropractica/${rt(item.urlParam)}`)"
        class="h-full"
        :hover="true"
      >
        <v-card-text>
          <NuxtImg :src="`${STATICS_CDN}website/home/${rt(item.key)}.webp`" class="w-full max-h-[200px] object-cover" />
          <div class="py-4 px-4">
            <div class="text-lg font-medium text-center">
              {{ rt(item.title) }}
            </div>
            <div class="text-base text-center">
              {{ rt(item.description) }}
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { STATICS_CDN } from '~/constants/urls'

interface Item {
  key: string
  title: string
  description: string
  urlParam: string
}

const localePath = useLocaleRoute()
const { tm, rt } = useI18n()
const items: Item[] = tm('general.toWho.items')
</script>
<style lang="scss">
.to-who {
  .v-card-text {
    padding: 0;
  }
}
</style>
