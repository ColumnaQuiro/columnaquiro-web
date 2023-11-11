<template>
  <v-row class="pt-10">
    <v-col
      v-for="item in items"
      :key="rt(item.key)"
      cols="12"
      md="6"
      lg="4"
    >
      <v-card
        :flat="true"
        :to="`para-quien-sirve-la-quiropractica/${keyToTypeOfPerson.get(rt(item.key))}`"
        class="pa-2 h-full"
      >
        <v-card-title class="!flex justify-center py-3">
          <v-avatar size="large">
            <NuxtImg :src="`${STATICS_CDN}website/home/${rt(item.key)}.webp`" width="100%" class="mx-auto" />
          </v-avatar>
        </v-card-title>
        <v-card-text class="pa-4 !pt-4">
          <div class="text-lg font-medium text-center pb-4">
            {{ rt(item.title) }}
          </div>
          <div class="text-base text-center">
            {{ rt(item.description) }}
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { keyToTypeOfPerson } from '~/constants/typeOfPersonMapping'
import { STATICS_CDN } from '~/constants/urls'

interface Item {
  key: string
  title: string
  description: string
}

const { tm, rt } = useI18n()
const items: Item[] = tm('general.toWho.items')
</script>
