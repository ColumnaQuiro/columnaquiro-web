<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'
import { clinic } from '@/data/clinic'
import BaseButton from '@/components/ui/BaseButton.vue'

const { locale } = useAppI18n()

const seoText = {
  es: {
    title: 'Contacto | ColumnaQuiro',
    description:
      'Contacta con ColumnaQuiro, tu centro quiropráctico en Valencia. Dirección, teléfono, email y formulario de contacto.',
  },
  en: {
    title: 'Contact | ColumnaQuiro',
    description:
      'Contact ColumnaQuiro, your chiropractic center in Valencia. Address, phone, email, and contact form.',
  },
}
useSeo({
  title: computed(() => seoText[locale.value].title),
  description: computed(() => seoText[locale.value].description),
})

const content = {
  es: {
    title: 'Contacta con ColumnaQuiro',
    body: 'Nos encanta poder ayudarte a resolver cualquier duda que puedas tener y asistirte para programar tu próxima visita a nuestra consulta quiropráctica. Además, nos alegra mucho saber de ti en cualquier momento, incluso si es solo para ponerte al día. ¡Estamos aquí para brindarte la mejor atención posible!',
    ourData: 'Nuestros datos',
    labels: {
      name: 'Nombre y apellidos',
      email: 'Email',
      emailPlaceholder: 'tunombre@gmail.com',
      subject: 'Asunto',
      phone: 'Teléfono',
      message: 'Mensaje',
      submit: 'Enviar mensaje',
    },
    thanks: (name: string) => `¡Gracias, ${name}! Hemos recibido tu mensaje y te contactaremos pronto.`,
  },
  en: {
    title: 'Contact ColumnaQuiro',
    body: "We love being able to help you with any questions you may have and assist you in scheduling your next visit to our chiropractic practice. We're also happy to hear from you anytime, even if it's just to say hello. We're here to give you the best possible care!",
    ourData: 'Our details',
    labels: {
      name: 'First and last name',
      email: 'Email',
      emailPlaceholder: 'yourname@gmail.com',
      subject: 'Subject',
      phone: 'Phone',
      message: 'Message',
      submit: 'Send message',
    },
    thanks: (name: string) => `Thank you, ${name}! We've received your message and will get back to you soon.`,
  },
}
const c = computed(() => content[locale.value])

const form = reactive({
  name: '',
  email: '',
  subject: '',
  phone: '',
  message: '',
})

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <section class="mx-auto max-w-5xl px-6 py-24">
    <div class="text-center">
      <h1 class="text-4xl font-semibold text-forest sm:text-5xl">{{ c.title }}</h1>
      <p class="mx-auto mt-4 max-w-2xl text-lg text-body/80">{{ c.body }}</p>
    </div>

    <div class="mt-16 grid gap-12 md:grid-cols-2">
      <div class="rounded-3xl bg-white p-8 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
        <h2 class="text-xl font-semibold text-forest">{{ c.ourData }}</h2>
        <ul class="mt-6 space-y-4 text-body/80">
          <li>
            <a :href="clinic.mapsUrl" target="_blank" rel="noopener" class="hover:text-forest">{{
              clinic.address
            }}</a>
          </li>
          <li>
            <a :href="`mailto:${clinic.email}`" class="hover:text-forest">{{ clinic.email }}</a>
          </li>
          <li>
            <a :href="`tel:${clinic.phone.replace(/\\s/g, '')}`" class="hover:text-forest">{{
              clinic.phone
            }}</a>
          </li>
        </ul>
      </div>

      <form v-if="!submitted" class="space-y-4" @submit.prevent="handleSubmit">
        <div>
          <label for="name" class="text-sm font-medium text-forest">{{ c.labels.name }}</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="mt-1 w-full rounded-xl border border-forest/20 px-4 py-3 focus:border-forest focus:outline-none"
          />
        </div>
        <div>
          <label for="email" class="text-sm font-medium text-forest">{{ c.labels.email }}</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            :placeholder="c.labels.emailPlaceholder"
            required
            class="mt-1 w-full rounded-xl border border-forest/20 px-4 py-3 focus:border-forest focus:outline-none"
          />
        </div>
        <div>
          <label for="subject" class="text-sm font-medium text-forest">{{ c.labels.subject }}</label>
          <input
            id="subject"
            v-model="form.subject"
            type="text"
            class="mt-1 w-full rounded-xl border border-forest/20 px-4 py-3 focus:border-forest focus:outline-none"
          />
        </div>
        <div>
          <label for="phone" class="text-sm font-medium text-forest">{{ c.labels.phone }}</label>
          <input
            id="phone"
            v-model="form.phone"
            type="tel"
            required
            class="mt-1 w-full rounded-xl border border-forest/20 px-4 py-3 focus:border-forest focus:outline-none"
          />
        </div>
        <div>
          <label for="message" class="text-sm font-medium text-forest">{{ c.labels.message }}</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            required
            class="mt-1 w-full rounded-xl border border-forest/20 px-4 py-3 focus:border-forest focus:outline-none"
          />
        </div>
        <BaseButton type="submit">{{ c.labels.submit }}</BaseButton>
      </form>

      <div v-else class="flex items-center justify-center rounded-3xl bg-white p-8 text-center shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
        <p class="text-lg text-forest">{{ c.thanks(form.name) }}</p>
      </div>
    </div>
  </section>
</template>
