import { onBeforeUnmount, onMounted } from 'vue'

declare global {
  interface Window {
    BookingTrackerConfig?: Record<string, string>
  }
}

const PH_DOMAIN = 'columnaquiropracticehub.neptune.practicehub.io'

export function useBookingWidget(options: { appointmentTypeId?: string; practitionerId?: string } = {}) {
  useHead({
    link: [
      {
        rel: 'stylesheet',
        href: `https://${PH_DOMAIN}/config/scripts/bookings_htmx/phob_css.php?v=${Math.floor(Date.now() / 3600000)}`,
      },
    ],
    script: [{ src: 'https://challenges.cloudflare.com/turnstile/v0/api.js', async: true }],
  })

  let script: HTMLScriptElement | null = null
  let stopped = false

  function inject() {
    if (stopped) return
    if (document.getElementById('ph-embed')) return
    if (!document.getElementById('ph_online_bookings_widget')) {
      setTimeout(inject, 100)
      return
    }

    window.BookingTrackerConfig = {
      domain: PH_DOMAIN,
      gtmContainerId: 'GTM-NTMKRQV',
      dataLayerName: 'dataLayer',
      ...(options.appointmentTypeId ? { appointmentTypeId: options.appointmentTypeId } : {}),
      ...(options.practitionerId ? { practitionerId: options.practitionerId } : {}),
    }

    script = document.createElement('script')
    script.id = 'ph-embed'
    script.setAttribute('data-ph-embed', '')
    script.setAttribute('data-cfasync', 'false')
    script.async = true
    script.src = `https://${PH_DOMAIN}/assets/js/booking-form-embed.js?v=${Math.floor(Date.now() / 3600000)}`
    script.onerror = () => console.error('[PracticeHub] Error loading the booking widget embed.')
    document.body.appendChild(script)
  }

  onMounted(() => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', inject)
    } else {
      inject()
    }
  })

  onBeforeUnmount(() => {
    stopped = true
    script?.remove()
  })
}
