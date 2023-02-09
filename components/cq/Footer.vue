<template>
  <v-footer class="footer bg-whiteBranded">
    <v-divider color="#ffffff" />
    <div class="d-flex align-content-space-between pt-4">
      <div class="text-caption">
        {{ t('copyright') }}
      </div>
      <div class="d-flex">
        <cq-components-button v-for="link in links" :key="rt(link.text)" :to="locale">
          {{ rt(link.text) }}
        </cq-components-button>
      </div>
    </div>
  </v-footer>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n({ useScope: 'local', inheritLocale: true })

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
        "to": "/privacy-policy"
      }
    ]
  }
}
</i18n>
