import { useSeoMeta } from '@unhead/vue'

export const useSetSEOTags = (title?: string, description?: string) => {
  const { path } = useRoute()
  const canonical = `https://quiropracticavalencia.es${path}`
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
