<template>
  <div class="text-white">
    <h3 class="text-base font-medium pb-4">
      {{ t('general.timetable.title') }}
    </h3>
    <div class="flex flex-col justify-center lg:text-start">
      <div v-for="timetable in timetableItems" :key="rt(timetable.day)" class="flex justify-between mb-4">
        <div class="text-sm font-medium lg:pr-10">
          {{ rt(timetable.day) }}
        </div>
        <div class="text-sm text-luxury-yellow">
          {{ rt(timetable.schedule) }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { TimetableItems } from '~/types/TimeTable'

const { tm, rt, t } = useI18n()

const timetableItems: TimetableItems[] = tm('general.timetable.items')
</script>
