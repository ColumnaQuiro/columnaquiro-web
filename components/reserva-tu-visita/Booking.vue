<template>
  <cq-layout-section class="booking">
    <h3 class="text-3xl pb-4 text-center">
      {{ t('reservaVisita.booking.title') }}
    </h3>
    <div class="text-base" v-html="t('reservaVisita.booking.subtitle')" />
    <v-form
      ref="formRef"
      class="pt-4 px-0"
      validate-on="submit"
      @submit.prevent="subscribeUser"
    >
      <cq-components-input-text
        v-model="email"
        :label="t('reservaVisita.booking.form.email.label')"
        :placeholder="t('reservaVisita.booking.form.email.placeholder')"
        :rules="EMAIL_RULES"
        append-inner-icon="mdi-send"
        type="email"
        class="booking__input"
        @click:append-inner="subscribeUser"
      />
    </v-form>
  </cq-layout-section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { EMAIL_RULES } from '~/constants/form-rules'
import { useSendSlackMessage } from '~/composables/slack'
import { EMAIL_SUBSCRIPTION_CHANNEL } from '~/constants/slackChannels'

const email = ref<string>('')
const formRef = ref<any>(null)
const { t } = useI18n()
const subscribeUser = async () => {
  const { valid: isFormValid } = await formRef.value?.validate()
  if (isFormValid) {
    await useSendSlackMessage({ channel: EMAIL_SUBSCRIPTION_CHANNEL, text: email.value })
  }
}
</script>

<style lang="scss" scoped>
.booking {
  &__input {
    max-width: 500px;
  }
}
</style>
