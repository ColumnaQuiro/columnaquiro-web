<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useAppI18n } from '@/composables/useAppI18n'
import { useSeo } from '@/composables/useSeo'
import { clinic, schedule, socialLinks } from '@/data/clinic'
import BaseButton from '@/components/ui/BaseButton.vue'

const { t, locale } = useAppI18n()

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
    formTitle: 'Envíanos un mensaje',
    ctaTitle: '¿Listo para empezar?',
    ctaBody: 'Reserva tu primera sesión online de forma inmediata y comienza tu camino hacia el bienestar total.',
    ctaButton: 'Reservar ahora',
    scheduleTitle: 'Horario de apertura',
    locationTitle: 'Dónde encontrarnos',
    whatsapp: 'Escríbenos por WhatsApp',
    bookPath: '/reserva-cita',
    labels: {
      name: 'Nombre y apellidos',
      email: 'Email',
      emailPlaceholder: 'tunombre@gmail.com',
      subject: 'Asunto',
      phone: 'Teléfono',
      message: 'Mensaje',
      submit: 'Enviar mensaje',
      submitting: 'Enviando...',
      error: 'No hemos podido enviar tu mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.',
    },
    thanks: (name: string) => `¡Gracias, ${name}! Hemos recibido tu mensaje y te contactaremos pronto.`,
  },
  en: {
    title: 'Contact ColumnaQuiro',
    body: "We love being able to help you with any questions you may have and assist you in scheduling your next visit to our chiropractic practice. We're also happy to hear from you anytime, even if it's just to say hello. We're here to give you the best possible care!",
    formTitle: 'Send us a message',
    ctaTitle: 'Ready to get started?',
    ctaBody: 'Book your first session online right away and start your journey toward complete well-being.',
    ctaButton: 'Book now',
    scheduleTitle: 'Opening hours',
    locationTitle: 'Find us',
    whatsapp: 'Message us on WhatsApp',
    bookPath: '/en/book-appointment',
    labels: {
      name: 'First and last name',
      email: 'Email',
      emailPlaceholder: 'yourname@gmail.com',
      subject: 'Subject',
      phone: 'Phone',
      message: 'Message',
      submit: 'Send message',
      submitting: 'Sending...',
      error: "We couldn't send your message. Please try again or message us on WhatsApp.",
    },
    thanks: (name: string) => `Thank you, ${name}! We've received your message and will get back to you soon.`,
  },
}
const c = computed(() => content[locale.value])

const whatsappUrl = computed(() => socialLinks.find((link) => link.label === 'WhatsApp')?.href ?? '')
const mapsEmbedUrl = computed(
  () => `https://www.google.com/maps?q=${encodeURIComponent(clinic.address)}&output=embed`,
)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  phone: '',
  message: '',
})

const submitted = ref(false)
const submitError = ref(false)
const submitting = ref(false)

async function handleSubmit() {
  submitting.value = true
  submitError.value = false
  try {
    const body = new URLSearchParams({
      'form-name': 'contact',
      locale: locale.value,
      ...form,
    })
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
    if (!res.ok) throw new Error(`Netlify Forms responded with ${res.status}`)
    submitted.value = true
  } catch {
    submitError.value = true
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <section class="mx-auto max-w-[calc(1280px+3rem)] px-6 py-24">
    <div class="text-center">
      <h1 class="text-4xl font-semibold text-forest sm:text-5xl">{{ c.title }}</h1>
      <p class="mx-auto mt-4 max-w-2xl text-lg text-body/80">{{ c.body }}</p>
    </div>

    <div class="mt-16 grid gap-8 md:grid-cols-[1.3fr_1fr]">
      <div class="rounded-3xl bg-white p-8 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
        <h2 class="text-xl font-semibold text-forest">{{ c.formTitle }}</h2>

        <form
          v-if="!submitted"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          class="mt-6 space-y-4"
          @submit.prevent="handleSubmit"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p class="hidden">
            <label>Don't fill this out: <input name="bot-field" /></label>
          </p>
          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label for="name" class="text-sm font-medium text-forest">{{ c.labels.name }}</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="mt-1 w-full rounded-xl border border-forest/20 bg-cream/40 px-4 py-3 focus:border-forest focus:outline-none"
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
                class="mt-1 w-full rounded-xl border border-forest/20 bg-cream/40 px-4 py-3 focus:border-forest focus:outline-none"
              />
            </div>
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label for="subject" class="text-sm font-medium text-forest">{{ c.labels.subject }}</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                class="mt-1 w-full rounded-xl border border-forest/20 bg-cream/40 px-4 py-3 focus:border-forest focus:outline-none"
              />
            </div>
            <div>
              <label for="phone" class="text-sm font-medium text-forest">{{ c.labels.phone }}</label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                required
                class="mt-1 w-full rounded-xl border border-forest/20 bg-cream/40 px-4 py-3 focus:border-forest focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label for="message" class="text-sm font-medium text-forest">{{ c.labels.message }}</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              required
              class="mt-1 w-full rounded-xl border border-forest/20 bg-cream/40 px-4 py-3 focus:border-forest focus:outline-none"
            />
          </div>
          <BaseButton type="submit" variant="dark" :disabled="submitting" class="disabled:opacity-60">{{
            submitting ? c.labels.submitting : c.labels.submit
          }}</BaseButton>
          <p v-if="submitError" class="text-sm text-red-600">{{ c.labels.error }}</p>
        </form>

        <div v-else class="flex min-h-[280px] items-center justify-center text-center">
          <p class="text-lg text-forest">{{ c.thanks(form.name) }}</p>
        </div>
      </div>

      <div class="flex flex-col gap-6">
        <div class="relative overflow-hidden rounded-3xl bg-forest p-8 text-white">
          <h3 class="text-xl font-semibold">{{ c.ctaTitle }}</h3>
          <p class="mt-3 text-sm text-white/80">{{ c.ctaBody }}</p>
          <BaseButton :to="c.bookPath" variant="light" class="mt-6">
            {{ c.ctaButton }}
          </BaseButton>
        </div>

        <div class="rounded-3xl bg-taupe/50 p-6">
          <div class="flex items-center gap-3">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-forest">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </span>
            <h3 class="text-base font-semibold text-forest">{{ c.scheduleTitle }}</h3>
          </div>
          <div class="mt-4 space-y-2 text-sm text-body/80">
            <div v-for="item in schedule" :key="item.dayKey" class="flex justify-between gap-4">
              <span>{{ t(`footer.days.${item.dayKey}`) }}</span>
              <span class="text-right font-medium text-forest">{{ item.hours ?? t('footer.closed') }}</span>
            </div>
          </div>
        </div>

        <div class="rounded-3xl bg-tan/40 p-6">
          <div class="flex items-center gap-3">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-forest">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </span>
            <h3 class="text-base font-semibold text-forest">{{ c.locationTitle }}</h3>
          </div>
          <div class="mt-4 space-y-3 text-sm text-sage-dark">
            <a :href="clinic.mapsUrl" target="_blank" rel="noopener" class="block hover:text-forest">{{
              clinic.address
            }}</a>
            <a :href="`tel:${clinic.phone.replace(/\\s/g, '')}`" class="block hover:text-forest">{{
              clinic.phone
            }}</a>
            <a :href="`mailto:${clinic.email}`" class="block hover:text-forest">{{ clinic.email }}</a>
            <a
              :href="whatsappUrl"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 font-medium text-forest hover:text-forest-light"
            >
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.62 1.44 5.13L2 22l5.14-1.53a9.83 9.83 0 0 0 4.9 1.32h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.15-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.15.11.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.38-.42.51-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.07.95 1.97 1.24 2.25 1.38.28.14.44.12.61-.05.17-.17.71-.82.9-1.11.19-.28.38-.24.63-.14.26.09 1.65.78 1.94.92.28.14.47.21.54.33.07.12.07.68-.17 1.35Z"
                />
              </svg>
              {{ c.whatsapp }}
            </a>
          </div>
          <div class="mt-4 overflow-hidden rounded-2xl">
            <iframe
              :src="mapsEmbedUrl"
              class="h-48 w-full border-0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              :title="c.locationTitle"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
