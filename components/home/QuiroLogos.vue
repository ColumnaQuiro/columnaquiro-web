<template>
  <cq-layout-section class="quiro-logos">
    <div class="flex flex-wrap gap-7">
      <v-img
        v-for="logo in logos"
        :key="rt(logo.id)"
        class="quiro-logos__logo"
        :src="`${STATICS_CDN}website/home/quiro-logos/${rt(logo.id)}.webp`"
        :width="200"
        :alt="rt(logo.alt)"
      />
    </div>
  </cq-layout-section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { STATICS_CDN } from '~/constants/urls'

const { tm, rt } = useI18n({ inheritLocale: true, useScope: 'local' })
const logos = tm('logos')
</script>

<style lang="scss" scoped>
.quiro-logos {
  &__logo {
    max-height: 80px;
  }
}
</style>
<i18n>
{
  "es": {
    "logos": [
      {
        "id": "word-federation-quiro",
        "alt": "Word Federation of Chiropractic"
      },
      {
        "id": "ecce",
        "alt": "European Council of Chiropractic Education"
      },
      {
        "id": "aeq",
        "alt": "Asociación Española de Quiropráctica"
      },
      {
        "id": "bcc",
        "alt": "Barcelona College of Chiropractic"
      },
      {
        "id": "icpa",
        "alt": "International Council Pediatric Association"
      }
    ]
  }
}
</i18n>
