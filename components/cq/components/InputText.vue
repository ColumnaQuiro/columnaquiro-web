<template>
  <v-text-field
    v-model="model"
    :type="type"
    :rules="required ? REQUIRED_RULE : rules"
    :placeholder="placeholder"
    :label="label"
    density="compact"
    variant="outlined"
    class="input-text"
  />
</template>
<script setup lang="ts">
import { REQUIRED_RULE } from '~/constants/form-rules'

interface Props {
  modelValue: string
  label?: string
  placeholder?: string
  rules?: [((v: any) => boolean | string)]
  required?: boolean
  type?: string
}

const props = withDefaults(defineProps<Props>(), {
  required: false,
  type: 'text'
})
const emit = defineEmits<{(e: 'update:modelValue', value: number | string | undefined): void }>()
const model = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emit('update:modelValue', value)
  }
})
</script>
<style lang="scss" scoped>

</style>
