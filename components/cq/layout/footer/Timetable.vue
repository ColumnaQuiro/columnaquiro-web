<template>
  <div class="md:text-start text-center">
    <div v-for="timetable in timetableItems" :key="rt(timetable.day)">
      <div class="text-lg font-medium">
        {{ rt(timetable.day ) }}
      </div>
      <div class="text-base pl-4">
        {{ rt(timetable.schedule ) }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { tm, rt } = useI18n({ useScope: 'local', inheritLocale: true })

const timetableItems = tm('timetable')
</script>
<i18n>
{
  "es": {
    "timetable": [
      {
        "day": "Lunes",
        "schedule": "10:30-13:00/ 15:00-20:00"
      },
      {
        "day": "Martes",
        "schedule": "10:30-13:00/ 15:00-20:00"
      },
      {
        "day": "Miércoles",
        "schedule": "10:30-13:00/ 15:00-20:00"
      },
      {
        "day": "Jueves",
        "schedule": "10:30-13:00/ 15:00-20:00"
      },
      {
        "day": "Viernes",
        "schedule": "10:30-13:00/ 15:00-20:00"
      }
    ]
  }
}
</i18n>
