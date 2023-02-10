<template>
  <cq-layout-section class="booking">
    <h3 class="text-3xl pb-4 text-center">
      {{ t('title') }}
    </h3>
    <div class="text-base" v-html="t('subtitle')" />
    <v-form
      ref="formRef"
      class="pt-4 px-0"
      validate-on="submit"
      @submit.prevent="subscribeUser"
    >
      <cq-components-input-text
        v-model="email"
        :label="t('form.email.label')"
        :placeholder="t('form.email.placeholder')"
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
const { t } = useI18n({ useScope: 'local', inheritLocale: true })
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
<i18n>
{
  "es": {
    "title": "¡Déjanos tu email!",
    "subtitle": "Estamos terminando de montar la consulta. Obtén las últimas noticias sobre nuestro avance y día de apertura. Haremos una gran inauguración, no te la pierdas!<br><br>Mientras tanto puedes seguir leyendo sobre nosotros y la quiropractica en nuestra web, seguirnos en redes sociales donde subimos contenido relacionado sobre la quiropractica, curiosidades, consejos y mucho más!",
    "form": {
      "email": {
        "placeholder": "tuemail{'@'}gmail.com",
        "label": "Introduce tu correo electrónico"
      },
      "submit": "Suscribirse"
    }
  }
}
</i18n>
