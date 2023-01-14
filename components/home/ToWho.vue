<template>
  <cq-layout-section>
    <v-row no-gutters justify="center">
      <v-col cols="12" lg="8" md="10">
        <cq-fonts-h3>
          {{ $t('home.toWho.title') }}
        </cq-fonts-h3>
        <div class="text-h6 text-center">
          {{ $t('home.toWho.description') }}
        </div>
      </v-col>
    </v-row>
    <v-row class="pt-10">
      <v-col
        v-for="item in items"
        :key="$rt(item.key)"
        cols="6"
        lg="4"
      >
        <v-card
          flat
          :to="`para-quien-sirve-la-quiropractica/${item.key}`"
          color="whiteBranded"
          class="pa-4"
        >
          <v-card-title>
            <v-img src="https://dummyimage.com/80/8d5b4c/ffffff" width="80" class="mx-auto" />
          </v-card-title>
          <v-card-text class="pt-4">
            <div class="text-h6 text-center pb-4">
              {{ $rt(item.title) }}
            </div>
            <div class="text-body-1 text-center">
              {{ $rt(item.description) }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </cq-layout-section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()
const items = tm('home.toWho.items')
</script>
