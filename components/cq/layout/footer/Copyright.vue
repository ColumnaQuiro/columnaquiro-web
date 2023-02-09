<template>
  <div class="d-flex flex-column flex-md-row justify-space-between">
    <div class="text-caption text-md-start text-center pb-md-0 pb-1">
      {{ t('copyright') }}
    </div>
    <div class="d-flex pb-md-0 pb-2 justify-center">
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

const { tm, rt, t } = useI18n({ useScope: 'local', inheritLocale: true })

const links = tm('links')
</script>
<i18n>
{
  "es": {
    "copyright": "© 2023 ColumnaQuiro",
    "links": [
      {
        "text": "Política de Privacidad",
        "to": "/politica-de-privacidad"
      },
      {
        "text": "Aviso Legal",
        "to": "/aviso-legal"
      },
      {
        "text": "Política de Cookies",
        "to": "/politica-de-cookies"
      }
    ]
  }
}
</i18n>
