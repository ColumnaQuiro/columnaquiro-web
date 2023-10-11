<template>
  <div>
    <para-quien-sirve-la-quiropractica-intro v-if="personType" :person-type="personType" class="bg-brand-light-tertiary" />
    <cq-blocks-order-appointment-section />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { typeOfPersonToKey } from '~/constants/typeOfPersonMapping'
import { useSetSEOTags } from '~/composables/seo'

const route = useRoute()
const { t } = useI18n()
const personType: string | undefined = typeOfPersonToKey.get(route.params.type as string)
const personTitle = t(`personTitle.${personType}`)

useSetSEOTags(t('paraQuienSirveLaQuiropractica.types.seo.title', { personTitle }), t(`paraQuienSirveLaQuiropractica.types.seo.description.${personType}`))
</script>
