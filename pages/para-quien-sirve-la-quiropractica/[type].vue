<template>
  <div>
    <para-quien-sirve-la-quiropractica-intro :person-type="personType" />
  </div>
</template>
<script setup lang="ts">
import { typeOfPersonToKey } from '~/constants/typeOfPersonMapping'

const route = useRoute()
const personType: string | undefined = typeOfPersonToKey.get(route.params.type as string)
</script>
