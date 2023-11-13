import { useSeoMeta } from '@unhead/vue'

export const useSEO = () => {
  const setSeoTags = (title?: string, description?: string) => {
    const { path } = useRoute()
    const canonical = `https://columnaquiro.com${path}`
    useHead(() => ({
      title,
      link: [
        {
          rel: 'canonical',
          href: canonical
        }
      ]
    }))
    useSeoMeta({
      ogUrl: canonical
    })
    useSeoMeta({
      description,
      ogDescription: description,
      ogTitle: title
    })
  }

  return {
    setSeoTags
  }
}
