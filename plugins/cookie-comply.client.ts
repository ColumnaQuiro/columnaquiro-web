// @ts-expect-error
import VueCookieComply from 'vue-cookie-comply'
import 'vue-cookie-comply/dist/style.css'

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(VueCookieComply)
})
