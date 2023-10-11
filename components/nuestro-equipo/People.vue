<template>
  <div>
    <cq-layout-section>
      <h1 class="section-title">
        {{ t('equipo.peopleList.title') }}
      </h1>
    </cq-layout-section>
    <cq-layout-section v-for="(person, i) in people" :key="person.name">
      <h2 class="text-3xl">
        {{ rt(person.name) }}
      </h2>
      <div class="text-sm pb-3">
        {{ rt(person.role) }}
      </div>
      <cq-blocks-sections-paragraphWithImage
        :text="rt(person.description)"
        image="https://dummyimage.com/80/8d5b4c/ffffff"
        :image-position=" i % 2 === 0 ? 'right' : 'left'"
        :image-width="400"
      />
    </cq-layout-section>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Person {
  name: string
  description: string
  imagePath: string
  role: string
}

const { t, tm, rt } = useI18n()

const people: Person[] = tm('equipo.peopleList.items')
</script>
