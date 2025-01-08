<template>
  <cq-layout-section class="bg-brand-white">
    <h2 class="section-title text-center">
      {{ t('home.videoTestimonials.title') }}
    </h2>
    <div class="hidden lg:flex lg:flex-row justify-center gap-8 pb-14">
      <div
        v-for="(person, i) in people"
        :key="person.name"
        :class="['flex items-center border-t-2 pt-6 lg:pt-8 lg:w-[400px] cursor-pointer', {
          'border-luxury-green': i === personActive,
          'border-grey': i !== personActive,
        }]"
        @click="personActive = i"
      >
        <div class="pr-4">
          <NuxtImg
            provider="cloudinary"
            :alt="rt(person.name)"
            :src="`website/home/testimonials/${rt(person.avatar)}`"
            :width="60"
            :height="60"
            class="rounded-full"
          />
        </div>
        <div class="text-lg">
          {{ rt(person.name) }}
        </div>
      </div>
    </div>
    <div v-for="(person, i) in people" :key="i" class="hidden lg:flex justify-center">
      <div
        :class="{
          'hidden': i !== personActive
        }"
      >
        <p class="text-base text-center font-italic lg:pb-14 lg:max-w-[640px]">
          "{{ rt(person.testimonial) }}"
        </p>
        <ScriptYouTubePlayer :video-id="rt(person.video)" class="mx-auto" :width="640" trigger="immediate" />
      </div>
    </div>
    <carousel class="md:hidden" :items-to-show="1.1" >
      <slide v-for="person in people" :key="rt(person.name)" class="flex flex-col justify-between pr-4">
        <div
          class="w-full flex items-center border-t-2 pt-6 pb-6 cursor-pointer border-luxury-green"
        >
          <div class="pr-4">
            <NuxtImg
              provider="cloudinary"
              :alt="rt(person.name)"
              :src="`website/home/testimonials/${rt(person.avatar)}`"
              :width="60"
              :height="60"
              class="rounded-full"
            />
          </div>
          <div class="text-lg">
            {{ rt(person.name) }}
          </div>
        </div>
        <p class="text-base text-center font-italic pt-4 pb-10 flex-grow">
          "{{ rt(person.testimonial) }}"
        </p>
        <ScriptYouTubePlayer :video-id="rt(person.video)" class="md:hidden mx-auto" trigger="immediate" />
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </cq-layout-section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

type Person = {
  name: string
  testimonial: string
  video: string
  avatar: string
}

const { t, tm, rt } = useI18n()
const people: Person[] = tm('home.videoTestimonials.people')
const personActive = ref(0)
</script>

<style  scoped>
</style>
