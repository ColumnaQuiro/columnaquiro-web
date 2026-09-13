import { computed, type MaybeRefOrGetter, toValue } from 'vue'
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from '@/utils/seo'
import { resolveLocalizedPaths, withTrailingSlash } from '@/utils/site-routes'
import { useAppI18n } from '@/composables/useAppI18n'

export interface SeoOptions {
  title: MaybeRefOrGetter<string>
  description: MaybeRefOrGetter<string>
  image?: MaybeRefOrGetter<string | undefined>
  type?: 'website' | 'article'
  // Ad landing pages reuse the same offer copy across several routes, so all
  // but the canonical one must stay out of the index -- otherwise they compete
  // with each other (and with the offer page) for the same organic queries.
  noindex?: boolean
}

export function useSeo(options: SeoOptions) {
  const route = useRoute()
  const { locale } = useAppI18n()

  // Goes through @nuxtjs/robots rather than a hand-written meta tag: the module
  // already renders one `robots` tag per page, and a second would leave two
  // contradictory directives in the head.
  if (options.noindex) useRobotsRule('noindex, follow')

  const canonicalPath = computed(() => {
    const paths = resolveLocalizedPaths(route.path)
    return withTrailingSlash(paths?.[locale.value] ?? route.path)
  })

  const alternates = computed(() => {
    const paths = resolveLocalizedPaths(route.path)
    if (!paths) return []
    return [
      { rel: 'alternate' as const, hreflang: 'es', href: `${SITE_URL}${withTrailingSlash(paths.es)}` },
      { rel: 'alternate' as const, hreflang: 'en', href: `${SITE_URL}${withTrailingSlash(paths.en)}` },
      { rel: 'alternate' as const, hreflang: 'x-default', href: `${SITE_URL}${withTrailingSlash(paths.es)}` },
    ]
  })

  useHead({
    title: () => toValue(options.title),
    htmlAttrs: { lang: () => locale.value },
    link: () => [
      { rel: 'canonical' as const, href: `${SITE_URL}${canonicalPath.value}` },
      ...alternates.value,
    ],
    meta: () => [
      { name: 'description', content: toValue(options.description) },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:title', content: toValue(options.title) },
      { property: 'og:description', content: toValue(options.description) },
      { property: 'og:type', content: options.type ?? 'website' },
      { property: 'og:url', content: `${SITE_URL}${canonicalPath.value}` },
      { property: 'og:image', content: toValue(options.image) ?? DEFAULT_OG_IMAGE },
      { property: 'og:locale', content: locale.value === 'es' ? 'es_ES' : 'en_US' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: toValue(options.title) },
      { name: 'twitter:description', content: toValue(options.description) },
      { name: 'twitter:image', content: toValue(options.image) ?? DEFAULT_OG_IMAGE },
    ],
  })
}
