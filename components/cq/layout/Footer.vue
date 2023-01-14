<template>
  <v-footer class="footer bg-whiteBranded">
    <v-divider color="#ffffff" />
    <div class="d-flex justify-space-between pt-4">
      <div class="text-caption">
        {{ $t('footer.copyright') }}
      </div>
      <div class="d-flex">
        <cq-components-button
          v-for="link in links"
          :key="$rt(link.text)"
          size="small"
          variant="text"
          :to="$rt(link.to)"
          color="blackBranded"
        >
          {{ $rt(link.text) }}
        </cq-components-button>
      </div>
    </div>
  </v-footer>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

const links = tm('footer.links')
</script>
<style lang="scss">
.footer {
  display: block !important;
}
</style>
