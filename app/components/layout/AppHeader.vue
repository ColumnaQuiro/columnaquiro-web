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
const { locale, switchTo } = useLocale()

const openMenu = ref<string | null>(null)
const mobileOpen = ref(false)

const dropdownIcons: Record<string, string> = {
  info: 'M11.25 11.25h.01M12 6h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-8.25 3v-3.75c0-.207-.168-.375-.375-.375h-.375',
  steps: 'M3 12h4.5m0 0h4.5m0 0H21M3 6h9m-9 12h13.5',
  question:
    'M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.895-1.45 1.827v.5m.99 3.5h-.02M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  team: 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z',
  home: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
  send: 'M6 12L3.269 3.126A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.876L5.999 12Zm0 0h7.5',
}

function toggleMenu(name: string) {
  openMenu.value = openMenu.value === name ? null : name
}

function closeMenus() {
  openMenu.value = null
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-cream"
    @mouseleave="closeMenus"
  >
    <div class="mx-auto flex h-20 max-w-[calc(1280px+3rem)] items-center justify-between px-6">
      <div class="flex items-center gap-10">
        <NuxtLink :to="locale === 'es' ? '/' : '/en'" class="flex items-center">
          <img src="/assets/images/logo-quiro.png" alt="ColumnaQuiro" class="h-[39px] w-auto" />
        </NuxtLink>

        <nav class="hidden items-center gap-8 md:flex">
          <div class="relative" @mouseenter="openMenu = 'para-ti'">
            <button
              class="flex items-center gap-1 text-base font-medium text-forest"
              @click="toggleMenu('para-ti')"
            >
              {{ paraTiDropdown.label }}
              <ChevronIcon :open="openMenu === 'para-ti'" class="h-4 w-4" />
            </button>
            <Transition name="dropdown">
              <div
                v-if="openMenu === 'para-ti'"
                class="absolute left-0 top-full w-80 rounded-2xl bg-white p-2 shadow-lg"
              >
                <NuxtLink
                  v-for="link in paraTiDropdown.links"
                  :key="link.to"
                  :to="link.to"
                  class="flex gap-3 rounded-xl p-3 hover:bg-cream"
                  @click="closeMenus"
                >
                  <svg class="mt-0.5 h-6 w-6 shrink-0 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path :d="dropdownIcons[link.icon]" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>
                    <span class="block font-bold text-forest">{{ link.label }}</span>
                    <span class="mt-1 block text-sm text-slate">{{ link.description }}</span>
                  </span>
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <NuxtLink :to="paraTodosLink.to" class="text-base font-medium text-forest">
            {{ paraTodosLink.label }}
          </NuxtLink>

          <div class="relative" @mouseenter="openMenu = 'sobre-nosotros'">
            <button
              class="flex items-center gap-1 text-base font-medium text-forest"
              @click="toggleMenu('sobre-nosotros')"
            >
              {{ sobreNosotrosDropdown.label }}
              <ChevronIcon :open="openMenu === 'sobre-nosotros'" class="h-4 w-4" />
            </button>
            <Transition name="dropdown">
              <div
                v-if="openMenu === 'sobre-nosotros'"
                class="absolute left-0 top-full w-80 rounded-2xl bg-white p-2 shadow-lg"
              >
                <NuxtLink
                  v-for="link in sobreNosotrosDropdown.links"
                  :key="link.to"
                  :to="link.to"
                  class="flex gap-3 rounded-xl p-3 hover:bg-cream"
                  @click="closeMenus"
                >
                  <svg class="mt-0.5 h-6 w-6 shrink-0 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path :d="dropdownIcons[link.icon]" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>
                    <span class="block font-bold text-forest">{{ link.label }}</span>
                    <span class="mt-1 block text-sm text-slate">{{ link.description }}</span>
                  </span>
                </NuxtLink>
              </div>
            </Transition>
          </div>
        </nav>
      </div>

      <div class="hidden items-center gap-6 md:flex">
        <NuxtLink :to="blogLink.to" class="text-base font-medium text-body">
          {{ blogLink.label }}
        </NuxtLink>
        <div class="flex items-center gap-1.5 text-sm text-gold-dark">
          <button
            class="cursor-pointer"
            :class="{ 'font-semibold': locale === 'es', 'opacity-50': locale !== 'es' }"
            @click="switchTo('es')"
          >
            ES
          </button>
          <span class="text-body/30">|</span>
          <button
            class="cursor-pointer"
            :class="{ 'font-semibold': locale === 'en', 'opacity-50': locale !== 'en' }"
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
              class="cursor-pointer"
              :class="{ 'font-semibold': locale === 'es', 'opacity-50': locale !== 'es' }"
              @click="switchTo('es')"
            >
              ES
            </button>
            <span>|</span>
            <button
              class="cursor-pointer"
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
