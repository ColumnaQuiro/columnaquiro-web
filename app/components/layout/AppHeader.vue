<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseButton from '@/components/ui/BaseButton.vue'
import ChevronIcon from '@/components/ui/ChevronIcon.vue'
import { useNavigation } from '@/composables/useNavigation'
import { useLocale } from '@/composables/useLocale'

const { t } = useI18n()
const { paraTiDropdown, sobreNosotrosDropdown, paraTodosLink, blogLink, reservaLink } =
  useNavigation()
const { locale, switchTo, pathForLocale } = useLocale()

const openMenu = ref<string | null>(null)
const mobileOpen = ref(false)

function toggleMenu(name: string) {
  openMenu.value = openMenu.value === name ? null : name
}

function closeMenus() {
  openMenu.value = null
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-forest/10 bg-cream" @mouseleave="closeMenus">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <NuxtLink :to="locale === 'es' ? '/' : '/en'" class="flex items-center">
        <img src="/assets/images/logo-quiro.png" alt="ColumnaQuiro" class="h-8 w-auto" />
      </NuxtLink>

      <nav class="hidden items-center gap-8 md:flex">
        <div class="relative" @mouseenter="openMenu = 'para-ti'">
          <button
            class="flex items-center gap-1 text-sm font-medium text-forest"
            @click="toggleMenu('para-ti')"
          >
            {{ paraTiDropdown.label }}
            <ChevronIcon :open="openMenu === 'para-ti'" class="h-4 w-4" />
          </button>
          <Transition name="dropdown">
            <div
              v-if="openMenu === 'para-ti'"
              class="absolute left-0 top-full w-64 rounded-xl border border-forest/10 bg-white py-2 shadow-lg"
            >
              <NuxtLink
                v-for="link in paraTiDropdown.links"
                :key="link.to"
                :to="link.to"
                class="block px-4 py-2 text-sm text-forest hover:bg-cream"
                @click="closeMenus"
              >
                {{ link.label }}
              </NuxtLink>
            </div>
          </Transition>
        </div>

        <NuxtLink :to="paraTodosLink.to" class="text-sm font-medium text-forest">
          {{ paraTodosLink.label }}
        </NuxtLink>

        <div class="relative" @mouseenter="openMenu = 'sobre-nosotros'">
          <button
            class="flex items-center gap-1 text-sm font-medium text-forest"
            @click="toggleMenu('sobre-nosotros')"
          >
            {{ sobreNosotrosDropdown.label }}
            <ChevronIcon :open="openMenu === 'sobre-nosotros'" class="h-4 w-4" />
          </button>
          <Transition name="dropdown">
            <div
              v-if="openMenu === 'sobre-nosotros'"
              class="absolute left-0 top-full w-56 rounded-xl border border-forest/10 bg-white py-2 shadow-lg"
            >
              <NuxtLink
                v-for="link in sobreNosotrosDropdown.links"
                :key="link.to"
                :to="link.to"
                class="block px-4 py-2 text-sm text-forest hover:bg-cream"
                @click="closeMenus"
              >
                {{ link.label }}
              </NuxtLink>
            </div>
          </Transition>
        </div>

        <NuxtLink :to="blogLink.to" class="text-sm font-medium text-forest">
          {{ blogLink.label }}
        </NuxtLink>
      </nav>

      <div class="hidden items-center gap-4 md:flex">
        <div class="flex items-center gap-1 text-sm font-medium text-forest">
          <button
            :class="{ 'font-semibold': locale === 'es', 'opacity-50': locale !== 'es' }"
            :disabled="!pathForLocale('es')"
            @click="switchTo('es')"
          >
            ES
          </button>
          <span>|</span>
          <button
            :class="{ 'font-semibold': locale === 'en', 'opacity-50': locale !== 'en' }"
            :disabled="!pathForLocale('en')"
            @click="switchTo('en')"
          >
            EN
          </button>
        </div>
        <BaseButton :to="reservaLink.to">{{ reservaLink.label }}</BaseButton>
      </div>

      <button
        class="text-forest md:hidden"
        :aria-label="t('nav.openMenu')"
        @click="mobileOpen = !mobileOpen"
      >
        ☰
      </button>
    </div>

    <Transition name="mobile-menu">
      <div v-if="mobileOpen" class="overflow-hidden border-t border-forest/10 px-6 py-4 md:hidden">
        <div class="flex flex-col gap-4">
          <NuxtLink
            v-for="link in paraTiDropdown.links"
            :key="link.to"
            :to="link.to"
            class="text-sm font-medium text-forest"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink
            :to="paraTodosLink.to"
            class="text-sm font-medium text-forest"
            @click="mobileOpen = false"
          >
            {{ paraTodosLink.label }}
          </NuxtLink>
          <NuxtLink
            v-for="link in sobreNosotrosDropdown.links"
            :key="link.to"
            :to="link.to"
            class="text-sm font-medium text-forest"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink
            :to="blogLink.to"
            class="text-sm font-medium text-forest"
            @click="mobileOpen = false"
          >
            {{ blogLink.label }}
          </NuxtLink>
          <div class="flex items-center gap-2 text-sm font-medium text-forest">
            <button
              :class="{ 'font-semibold': locale === 'es', 'opacity-50': locale !== 'es' }"
              @click="switchTo('es')"
            >
              ES
            </button>
            <span>|</span>
            <button
              :class="{ 'font-semibold': locale === 'en', 'opacity-50': locale !== 'en' }"
              @click="switchTo('en')"
            >
              EN
            </button>
          </div>
          <BaseButton :to="reservaLink.to" @click="mobileOpen = false">{{
            reservaLink.label
          }}</BaseButton>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.2s ease,
    max-height 0.25s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  max-height: 0;
}
.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  max-height: 320px;
}
</style>
