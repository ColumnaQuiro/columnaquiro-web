import { createGtm } from '@gtm-support/vue-gtm'
import { PublicRuntimeConfig } from '~/types/RuntimeConfig'

export default defineNuxtPlugin(({ vueApp }) => {
  const runtimeConfig: PublicRuntimeConfig = useRuntimeConfig().public
  const isDev = process.dev
  const cookieComplyInfo = localStorage.getItem('cookie-comply')
  const isGTMCookieAccepted = !!cookieComplyInfo && (cookieComplyInfo === 'all' || cookieComplyInfo.includes('ga'))

  vueApp.use(
    createGtm({
      id: runtimeConfig.gtmId,
      defer: true,
      debug: isDev,
      vueRouter: useRouter(),
      loadScript: true,
      enabled: isGTMCookieAccepted && !isDev
    })
  )
})
