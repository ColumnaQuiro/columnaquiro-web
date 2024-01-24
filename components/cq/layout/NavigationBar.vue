<template>
  <header
    class="navigation-bar"
    :class="{
      'navigation-bar--with-shadow bg-white': isScrolling || !isIndexUrl,
      'bg-transparent': !isScrolling
    }"
  >
    <div class="w-full">
      <div class="container flex flex-wrap items-center h-14 md:h-16">
        <a :href="localePath('/')" @click="closeBurgerMenu">
          <NuxtImg
            src="logo/logo-color.webp"
            provider="s3"
            :width="90"
            preload
            alt="ColumnaQuiro"
          />
        </a>
        <div class="flex-grow" />
        <nav class="hidden lg:flex h-fit">
          <cq-components-sub-menu-item
            v-for="link in links"
            :key="rt(link.text)"
            :text="rt(link.text)"
            :to="link.to ? rt(link.to) : undefined"
            :sub-menu="link.subMenu"
            :text-color="textColor"
          />
          <cq-components-button
            :to="t('general.layout.navigationBar.appointmentButton.to')"
            variant="flat"
            color="tertiary"
          >
            <v-icon class="mr-2" :icon="mdiCalendar" />{{ t('general.layout.navigationBar.appointmentButton.text') }}
          </cq-components-button>
          <div v-if="!isBlogContentUrl" class="h-8 bg-light-grey w-[1px] ml-4 mr-3" />
          <client-only>
            <cq-layout-language-selector v-if="!isBlogContentUrl" :text-color="textColor" />
          </client-only>
        </nav>
        <div class="flex items-center lg:hidden">
          <cq-components-button
            :href="t('general.layout.navigationBar.appointmentButton.to')"
            variant="flat"
            color="tertiary"
          >
            <v-icon :icon="mdiCalendar" class="mr-2" />{{ t('general.layout.navigationBar.appointmentButton.text') }}
          </cq-components-button>
          <client-only>
            <cq-layout-language-selector
              v-if="!isBlogContentUrl"
              class="ml-4"
              :text-color="textColor"
            />
          </client-only>
          <cq-components-button
            icon
            variant="plain"
            :color="isScrolling || !isIndexUrl ? '#474747' : '#ffffff'"
            class="ml-2"
            aria-label="menu"
            @click="toggleBurgerMenu"
          >
            <v-icon :icon="mdiMenu" />
          </cq-components-button>
        </div>
      </div>
      <v-expand-transition>
        <nav v-if="showBurgerMenu" class="transition-height lg:hidden flex flex-col bg-white px-4 pb-4">
          <cq-components-sub-menu-item
            v-for="link in mobileLinks"
            :key="rt(link.text)"
            :text="rt(link.text)"
            :to="link.to ? rt(link.to) : undefined"
            :sub-menu="link.subMenu"
            @click="toggleBurgerMenu"
          />
          <cq-components-button
            :href="t('general.layout.navigationBar.appointmentButton.to')"
            block
            variant="elevated"
            color="tertiary"
            @click="toggleBurgerMenu"
          >
            {{ t('general.layout.navigationBar.appointmentButton.text') }}
          </cq-components-button>
        </nav>
      </v-expand-transition>
    </div>
  </header>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed, onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import { mdiCalendar, mdiMenu } from '@mdi/js'
import type { Link } from '~/types/Link'

const { t, rt, tm } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const links: Link[] = tm('general.layout.navigationBar.links')
const mobileLinks: Link[] = tm('general.layout.navigationBar.mobileLinks')
const showBurgerMenu: Ref<boolean> = ref(false)
const isBlogContentUrl = computed(() => route.name?.toString().includes('slug'))
const isIndexUrl = computed(() => route.name?.toString().includes('index'))
const isScrolling = ref(false)
const textColor = computed(() => isIndexUrl.value && !isScrolling.value ? 'background' : 'blackBranded')

const toggleBurgerMenu = () => {
  showBurgerMenu.value = !showBurgerMenu.value
}

const closeBurgerMenu = () => {
  showBurgerMenu.value = false
}

const onScroll = () => {
  isScrolling.value = window.scrollY !== 0
}

onMounted(() => {
  if (process.client && isIndexUrl.value) {
    window.addEventListener('scroll', onScroll)
  }
})
</script>
<style lang="scss">
.navigation-bar {
  @apply fixed z-20 w-full h-14;
  @apply md:h-16 flex lg:flex-col lg:justify-center;

  &--with-shadow {
    box-shadow: 0 -5px 13px 0 rgba(71, 71, 71, 0.47) !important;
  }
}
</style>
