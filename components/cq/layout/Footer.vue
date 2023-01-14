<template>
  <v-footer class="footer bg-whiteBranded">
    <v-divider color="#ffffff" />
    <div class="d-flex justify-space-between pt-4">
      <div class="text-caption">
        {{ t('copyright') }}
      </div>
      <div class="d-flex">
        <cq-components-button
          v-for="link in links"
          :key="rt(link.text)"
          size="small"
          variant="text"
          :to="rt(link.to)"
          color="blackBranded"
        >
          {{ rt(link.text) }}
        </cq-components-button>
      </div>
    </div>
  </v-footer>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { tm, rt, t } = useI18n({ useScope: 'local', inheritLocale: true })

const links = tm('links')
</script>
<style lang="scss">
.footer {
  display: block !important;
}
</style>
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
