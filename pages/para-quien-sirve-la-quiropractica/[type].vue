<template>
  <div>
    <para-quien-sirve-la-quiropractica-intro v-if="personType" :person-type="personType" class="bg-brand-light-tertiary" />
    <cq-blocks-order-appointment-section />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { typeOfPersonToKey } from '~/constants/typeOfPersonMapping'
import { useSEO } from '~/composables/seo'

const route = useRoute()
const { t } = useI18n()
const useSeo = useSEO()

const personType: string | undefined = typeOfPersonToKey.get(route.params.type as string)
const personTitle = t(`personTitle.${personType}`)

useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(t('chiropracticForWhom.types.seo.title', { personTitle }), t(`chiropracticForWhom.types.seo.description.${personType}`))
</script>
