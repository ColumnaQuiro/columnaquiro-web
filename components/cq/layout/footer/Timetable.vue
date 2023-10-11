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

const { tm, rt } = useI18n()

const timetableItems = tm('general.layout.footer.timetable')
</script>
