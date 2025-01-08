<template>
  <ul class="blog-list grid lg:grid-cols-2 gap-4 text-brand-black pt-10">
    <li
      v-for="article in data"
      :key="article._path"
      class="blog-list__item relative rounded-md m-0 overflow-hidden"
    >
      <a :href="localePath(article._path)">
        <div class="wrapper">
          <div class="flex flex-col md:flex-row gap-2 md:gap-5">
            <img
              :src="article.cover"
              class="rounded object-cover  md:min-w-[180px] md:min-h-[180px] md:max-w-[180px] md:max-h-[180px]"
              :alt="article.headline"
              loading="lazy"
            >
            <div>
              <h2
                class="blog-list__item-title text-lg leading-6 font-medium group-hover:text-brand-secondary pb-2"
              >
                {{ article.headline }}
              </h2>
              <client-only>
                <p class="text-sm leading-sm text-brand-black/75 dark:text-brand-black/75">
                  {{ date.formatDateInSpanish(article.date) }}
                </p>
              </client-only>
            </div>
          </div>
        </div>
      </a>
    </li>
  </ul>
  <p v-if="data.length === 0" class="w-full md:w-7/12 text-h3 leading-h3 font-bold dark:text-white">
    {{ message }}
  </p>
</template>

<script setup>
import { useLocalePath } from '#i18n'
import { useDate } from '~/composables/date'

defineProps({
  data: {
    type: Array,
    required: true
  },
  message: {
    type: String,
    default: 'There are no posts right now, but stay tuned for newer releases in the future.'
  }
})

const date = useDate()
const localePath = useLocalePath()
</script>
<style lang="scss" scoped>
.blog-list {
  &__item {
    @apply mb-4;

    &-title {
      @apply text-brand-black;
    }

    &:hover {
      .blog-list__item-title {
        @apply underline;
      }
    }
  }
}
</style>
