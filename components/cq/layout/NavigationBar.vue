<template>
  <header class="navigation-bar">
    <div class="w-full">
      <div class="container flex flex-wrap items-center h-14 md:h-16">
        <NuxtLinkLocale to="/" @click="closeBurgerMenu">
          <NuxtImg :src="`${STATICS_CDN}logo/logo-color.webp`" :width="90" alt="ColumnaQuiro" />
        </NuxtLinkLocale>
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
            <v-icon class="mr-2">
              mdi-calendar
            </v-icon>{{ t('general.layout.navigationBar.appointmentButton.text') }}
          </cq-components-button>
          <div v-if="!isBlogContentUrl" class="h-8 bg-light-grey w-[1px] ml-4 mr-3" />
          <cq-layout-language-selector v-if="!isBlogContentUrl" />
        </nav>
        <div class="flex items-center lg:hidden">
          <cq-components-button
            :to="t('general.layout.navigationBar.appointmentButton.to')"
            variant="flat"
            color="tertiary"
          >
            <v-icon class="mr-2">
              mdi-calendar
            </v-icon> {{ t('general.layout.navigationBar.appointmentButton.text') }}
          </cq-components-button>
          <cq-layout-language-selector v-if="!isBlogContentUrl" class="ml-4" />
          <cq-components-button
            icon
            variant="plain"
            color="#474747"
            class="ml-2"
            @click="toggleBurgerMenu"
          >
            <v-icon>mdi-menu</v-icon>
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
            :to="t('general.layout.navigationBar.appointmentButton.to')"
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
import type { Ref } from 'vue'
import { STATICS_CDN } from '~/constants/urls'
import type { Link } from '~/types/Link'

const { t, rt, tm } = useI18n()
const route = useRoute()
const links: Link[] = tm('general.layout.navigationBar.links')
const mobileLinks: Link[] = tm('general.layout.navigationBar.mobileLinks')
const showBurgerMenu: Ref<boolean> = ref(false)

const isBlogContentUrl = computed(() => route.name.includes('slug'))

const toggleBurgerMenu = () => {
  showBurgerMenu.value = !showBurgerMenu.value
}

const closeBurgerMenu = () => {
  showBurgerMenu.value = false
}
</script>
<style lang="scss">
.navigation-bar {
  @apply fixed z-20 bg-white w-full h-14;
  @apply md:h-16 flex lg:flex-col lg:justify-center;
  box-shadow: 0 -5px 13px 0 rgba(71, 71, 71, 0.47) !important;
}
</style>
