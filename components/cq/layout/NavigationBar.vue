<template>
  <header class="navigation-bar">
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
          />
          <cq-components-button
            :to="t('general.layout.navigationBar.appointmentButton.to')"
            variant="flat"
            color="tertiary"
          >
            <v-icon class="mr-2" :icon="mdiCalendar" />
            {{ t('general.layout.navigationBar.appointmentButton.text') }}
          </cq-components-button>
          <div v-if="!isBlogContentUrl" class="h-8 bg-light-grey w-[1px] ml-4 mr-3" />
          <client-only>
            <cq-layout-language-selector v-if="!isBlogContentUrl" />
          </client-only>
        </nav>
        <div class="flex items-center lg:hidden">
          <client-only>
            <cq-layout-language-selector
              v-if="!isBlogContentUrl"
              class="ml-4"
            />
          </client-only>
          <cq-components-button
            icon
            variant="plain"
            color="#474747"
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
import { computed, ref, type Ref } from 'vue'
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

const toggleBurgerMenu = () => {
  showBurgerMenu.value = !showBurgerMenu.value
}

const closeBurgerMenu = () => {
  showBurgerMenu.value = false
}
</script>
<style lang="scss">
.navigation-bar {
  @apply fixed z-20 w-full h-14 bg-white;
  @apply md:h-16 flex lg:flex-col lg:justify-center;
}
</style>
