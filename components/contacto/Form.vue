<template>
  <cq-layout-section>
    <div class="grid grid-cols-12 gap-10">
      <div class="col-span-full md:col-span-6">
        <div class="text-xl pb-4">
          {{ t('title') }}
        </div>
        <div>
          {{ t('subtitle') }}
        </div>
      </div>
      <v-form ref="formRef" v-model="isFormValid" class="col-span-full md:col-span-6" validate-on="submit" @submit.prevent="submitForm">
        <cq-components-input-text
          v-for="field in fields"
          :key="rt(field.key)"
          v-model="formData[rt(field.key)]"
          :label="rt(field.label)"
          :rules="rt(field.type) === 'email' ? EMAIL_RULES : REQUIRED_RULE"
          :type="rt(field.type)"
        />
        <cq-components-button type="submit" color="tertiary">
          {{ t('cta') }}
        </cq-components-button>
      </v-form>
    </div>
  </cq-layout-section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { EMAIL_RULES, REQUIRED_RULE } from '~/constants/form-rules'
import { useSendSlackMessage } from '~/composables/slack'
import { CONTACT_FORM_CHANNEL } from '~/constants/slackChannels'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

interface Field {
  key: string
  label: string
  type?: string
}

const { t, tm, rt } = useI18n({ useScope: 'local', inheritLocale: true })
const fields: Field[] = tm('fields')
const formRef = ref<any>(null)
const isFormValid = ref<boolean>(true)
const formData = reactive<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = async (validate) => {
  const { valid } = await validate
  if (valid) {
    const text = Object.keys(formData).reduce((accum: string, current: string) => `${current}: ${formData[current]}
    ${accum}`, '')
    await useSendSlackMessage({ channel: CONTACT_FORM_CHANNEL, text })
  }
}
</script>
<i18n>
{
  "es": {
    "title": "Hola, ¿cómo estás? 👋",
    "subtitle": "Nos encanta poder ayudarte a resolver cualquier duda que puedas tener y asistirte para programar tu próxima visita a nuestra consulta quiropráctica. Además, nos alegra mucho saber de ti en cualquier momento, incluso si es solo para ponerte al día. ¡Estamos aquí para brindarte la mejor atención posible!",
    "fields": [
      {
        "key": "name",
        "label": "Nombre y Apellidos*",
        "type": "text"
      },
      {
        "key": "email",
        "label": "Correo electrónico*",
        "type": "email"
      },
      {
        "key": "subject",
        "label": "Asunto*",
        "type": "text"
      },
      {
        "key": "message",
        "label": "Mensaje*",
        "type": "text"
      }
    ],
    "cta": "Enviar"
  }
}
</i18n>
