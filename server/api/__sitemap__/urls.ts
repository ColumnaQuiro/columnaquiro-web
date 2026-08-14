import {
  PAGES,
  CATEGORY_HUB,
  CATEGORIES,
  BLOG_HUB,
  BLOG_SLUG_PAIRS,
  SYMPTOM_HUB,
  SYMPTOM_SLUG_PAIRS,
} from '../../../app/utils/site-routes'

export default defineSitemapEventHandler(() => {
  const entries: Array<{
    loc: string
    alternatives: { hreflang: string; href: string }[]
  }> = []

  // Note: @nuxtjs/sitemap always strips trailing slashes from `loc` during
  // its own normalization (no config to opt out), so these entries end up
  // without one regardless of what's passed here, even though every one of
  // these routes 301s to add a trailing slash on Netlify. That gets patched
  // back in post-build by scripts/fix-sitemap-trailing-slash.mjs, which
  // rewrites the generated dist/sitemap.xml to the real, non-redirecting URLs.
  function addPair(es: string, en: string | null) {
    if (!en) {
      entries.push({ loc: es, alternatives: [{ hreflang: 'es', href: es }] })
      return
    }
    const alternatives = [
      { hreflang: 'es', href: es },
      { hreflang: 'en', href: en },
      { hreflang: 'x-default', href: es },
    ]
    entries.push({ loc: es, alternatives })
    entries.push({ loc: en, alternatives })
  }

  for (const page of PAGES) addPair(page.es, page.en)
  for (const category of CATEGORIES) {
    addPair(`${CATEGORY_HUB.es}/${category.slugEs}`, `${CATEGORY_HUB.en}/${category.slugEn}`)
  }
  for (const post of BLOG_SLUG_PAIRS) {
    addPair(`${BLOG_HUB.es}/${post.es}`, post.en ? `${BLOG_HUB.en}/${post.en}` : null)
  }
  for (const symptom of SYMPTOM_SLUG_PAIRS) {
    addPair(`${SYMPTOM_HUB.es}/${symptom.es}`, `${SYMPTOM_HUB.en}/${symptom.en}`)
  }
  addPair('/sobre-nosotros/equipo/lea-guido', '/en/about-us/our-team/lea-guido')

  return entries
})
