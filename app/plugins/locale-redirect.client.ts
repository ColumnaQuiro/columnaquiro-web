import { LOCALE_CHOICE_STORAGE_KEY } from '@/utils/site-routes'

// One-time redirect based on the visitor's browser language, only on the
// home page in either locale. Runs at most once per browser: the flag is
// set here and also by useLocale's switchTo, so a manual language choice
// is never overridden and this never loops. Uses a native browser
// navigation rather than the SPA router, since this only ever runs once
// per browser on a first pageview — no need to involve the SPA router,
// and doing so raced with Vue Router's own initial-navigation lifecycle.
export default defineNuxtPlugin(() => {
  const router = useRouter()

  router.isReady().then(() => {
    if (localStorage.getItem(LOCALE_CHOICE_STORAGE_KEY)) return

    const path = router.currentRoute.value.path
    if (path !== '/' && path !== '/en') return

    localStorage.setItem(LOCALE_CHOICE_STORAGE_KEY, '1')

    const prefersEnglish = navigator.language.toLowerCase().startsWith('en')
    if (prefersEnglish && path === '/') {
      window.location.replace('/en')
    } else if (!prefersEnglish && path === '/en') {
      window.location.replace('/')
    }
  })
})
