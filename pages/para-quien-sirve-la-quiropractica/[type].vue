<template>
  <div v-if="personType">
    <cq-blocks-sections-intro-section :title="t(`chiropracticForWhom.types.intro.title.${personType}`)" :background-image-url="`https://res.cloudinary.com/dqrtj7gca/image/upload/f_auto,q_auto/v1/website/para-todos/${personType}`" />
    <para-quien-sirve-la-quiropractica-intro :person-type="personType" />
    <para-quien-sirve-la-quiropractica-symptoms :person-type="personType" />
    <cq-blocks-order-appointment-section />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { typeOfPersonLocales, typeOfPersonToKey } from '~/constants/typeOfPersonMapping'
import { useSEO } from '~/composables/seo'

const route = useRoute()
const { t } = useI18n()
const useSeo = useSEO()
const setI18nParams = useSetI18nParams()
const type = route.params.type as string
const personType: string | undefined = typeOfPersonToKey.get(type)
const personTitle = t(`chiropracticForWhom.types.personTitle.${personType}`)

setI18nParams({
  en: { type: typeOfPersonLocales[type as keyof typeof typeOfPersonLocales].en },
  es: { type: typeOfPersonLocales[type as keyof typeof typeOfPersonLocales].es }
})

useSeo.setI18nTags()
useSeo.setLocalBusinessSchemaOrgTag()
useSeo.setSeoTags(t('chiropracticForWhom.types.seo.title', { personTitle }),
  t(`chiropracticForWhom.types.seo.description.${personType}`))
</script>
