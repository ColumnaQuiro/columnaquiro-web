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

const BRAND_SUFFIX = ` | ${SITE_NAME}`
const TITLE_MAX = 60
const DESCRIPTION_MAX = 160

// Google shows roughly 60 characters of a title. Half the site's titles ran
// past that once the brand suffix was added, so the visible part ended in
// "| Colum…". The query words matter more than the brand, which Google often
// adds on its own, so the suffix is what goes.
export function fitTitle(title: string): string {
  if (title.length <= TITLE_MAX || !title.endsWith(BRAND_SUFFIX)) return title
  return title.slice(0, -BRAND_SUFFIX.length)
}

// Descriptions longer than ~160 characters are cut mid-word in results. End at
// the last full sentence that fits; failing that, at a word, with an ellipsis.
export function fitDescription(text: string): string {
  const clean = text.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
  if (clean.length <= DESCRIPTION_MAX) return clean
  const head = clean.slice(0, DESCRIPTION_MAX)
  const sentenceEnd = Math.max(head.lastIndexOf('. '), head.lastIndexOf('? '), head.lastIndexOf('! '))
  if (sentenceEnd >= 90) return head.slice(0, sentenceEnd + 1)
  return `${head.slice(0, head.lastIndexOf(' ', DESCRIPTION_MAX - 1)).replace(/[,;:·]$/, '')}…`
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

  const title = () => fitTitle(toValue(options.title))
  const description = () => fitDescription(toValue(options.description))

  useHead({
    title,
    htmlAttrs: { lang: () => locale.value },
    link: () => [
      { rel: 'canonical' as const, href: `${SITE_URL}${canonicalPath.value}` },
      ...alternates.value,
    ],
    meta: () => [
      { name: 'description', content: description() },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:title', content: title() },
      { property: 'og:description', content: description() },
      { property: 'og:type', content: options.type ?? 'website' },
      { property: 'og:url', content: `${SITE_URL}${canonicalPath.value}` },
      { property: 'og:image', content: toValue(options.image) ?? DEFAULT_OG_IMAGE },
      { property: 'og:locale', content: locale.value === 'es' ? 'es_ES' : 'en_US' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title() },
      { name: 'twitter:description', content: description() },
      { name: 'twitter:image', content: toValue(options.image) ?? DEFAULT_OG_IMAGE },
    ],
  })
}
