<template>
  <cq-layout-section>
    <h3 class="text-h6">
      {{ t('title') }}
    </h3>
    <div class="text-subtitle-1" v-html="t('subtitle')" />
    <v-form ref="formRef" class="d-flex v-col-md-6 pt-4 px-0" validate-on="submit" @submit.prevent="subscribeUser">
      <cq-components-input-text
        v-model="email"
        :label="t('form.email.label')"
        :placeholder="t('form.email.placeholder')"
        :rules="EMAIL_RULES"
        type="email"
        class="mr-2"
      />
      <cq-components-button type="submit" color="tertiary">
        {{ t('form.submit') }}
      </cq-components-button>
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
