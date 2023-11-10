<template>
  <div>
    <div class="text-lg font-medium text-center pb-4">
      {{ t('general.timetable.title') }}
    </div>
    <div class="flex flex-row justify-center align-bottom text-start flex-wrap">
      <div v-for="timetable in timetableItems" :key="rt(timetable.day)" class="mr-4">
        <div class="text-base font-medium">
          {{ rt(timetable.day) }}
        </div>
        <div class="text-base">
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
