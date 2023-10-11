<template>
  <div class="flex flex-col md:flex-row justify-between">
    <div class="text-xs md:text-start text-center md:pb-0 pb-1">
      {{ t('general.layout.footer.copyright') }}
    </div>
    <div class="flex md:pb-0 pb-2 justify-center">
      <cq-components-button
        v-for="link in links"
        :key="rt(link.text)"
        size="x-small"
        variant="text"
        :to="rt(link.to)"
        color="blackBranded"
      >
        {{ rt(link.text) }}
      </cq-components-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { tm, rt, t } = useI18n()

const links = tm('general.footer.links')
</script>
