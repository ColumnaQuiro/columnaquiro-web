<template>
  <cq-layout-section>
    <div class="grid grid-cols-12 gap-10">
      <div class="col-span-full md:col-span-6">
        <div class="text-xl pb-4">
          {{ t('contact.form.title') }}
        </div>
        <div>
          {{ t('contact.form.subtitle') }}
        </div>
      </div>
      <v-form
        ref="formRef"
        v-model="isFormValid"
        class="col-span-full md:col-span-6"
        validate-on="submit"
        @submit.prevent="submitForm"
      >
        <cq-components-input-text
          v-for="field in fields"
          :key="rt(field.key)"
          v-model="formData[rt(field.key) as keyof ContactForm]"
          :label="rt(field.label)"
          :rules="rt(field.type) === 'email' ? EMAIL_RULES : REQUIRED_RULE"
          :type="rt(field.type)"
        />
        <cq-components-button type="submit" color="tertiary">
          {{ t('contact.form.cta') }}
        </cq-components-button>
      </v-form>
    </div>
  </cq-layout-section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { VForm } from 'vuetify/components/VForm'
import type { SubmitEventPromise } from 'vuetify'
import { reactive, ref } from 'vue'
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
  type: string
}

const { t, tm, rt } = useI18n()
const fields: Field[] = tm('contact.form.fields')
const formRef = ref<any>(null)
const isFormValid = ref<boolean>(true)
const formData = reactive<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = async (validate: SubmitEventPromise) => {
  const { valid } = await validate
  if (valid) {
    const formDataKeys = Object.keys(formData) as Array<keyof ContactForm>
    const text = formDataKeys.reduce((accum, current) => `${current}: ${formData[current]}
    ${accum}`, '')
    await useSendSlackMessage({ channel: CONTACT_FORM_CHANNEL, text })
  }
}
</script>
