<template>
  <ul class="blog-list grid lg:grid-cols-2 gap-4 text-brand-black pt-10">
    <li
      v-for="article in data"
      :key="article._path"
      class="blog-list__item relative rounded-md m-0 overflow-hidden"
    >
      <NuxtLink :to="article._path">
        <div class="wrapper">
          <header class="flex">
            <NuxtImg :src="article.cover" class="rounded object-cover w-[150px] h-[150px] md:w-[180px] md:h-[180px]" :alt="article.headline" loading="lazy" />
            <div class="pl-5">
              <h2
                class="blog-list__item-title lg:text-2xl md:text-xl text-lg font-medium mb-1 group-hover:text-brand-secondary"
              >
                {{ article.headline }}
              </h2>
              <client-only>
                <p class="text-sm leading-sm mb-4 text-brand-black/75 dark:text-brand-black/75">
                  {{ $formatDate(article.date) }}
                </p>
              </client-only>
            </div>
          </header>
        </div>
      </NuxtLink>
    </li>
  </ul>
  <p v-if="data.length === 0" class="w-full md:w-7/12 text-h3 leading-h3 font-bold dark:text-white">
    {{ message }}
  </p>
</template>

<script setup>
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

const { $formatDate } = useNuxtApp()
</script>
<style lang="scss" scoped>
.blog-list {
  &__item {
    &:hover {
      .blog-list__item-title {
        @apply underline;
      }
    }
  }
}
</style>
