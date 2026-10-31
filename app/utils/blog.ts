import type { Locale } from '@/utils/site-routes'

export interface BlogPost {
  slug: string
  title: string
  date: string
  /**
   * Optional `updated:` frontmatter date. Set it when a post is materially
   * rewritten so `dateModified` reflects the refresh — expanding an old post
   * in place only signals freshness if that date actually moves.
   */
  updated?: string
  excerpt: string
  cover: string
  author: string
  /** Optional `reviewedBy:` (a practitioner's full name) and `reviewed:` date. */
  reviewedBy?: string
  reviewed?: string
}

// Two globs over the same files. `?blogmeta` is answered by the
// `blog-frontmatter` plugin in nuxt.config.ts with the frontmatter only, so the
// list page and every other page carry a few KB of titles and dates. The
// bodies stay lazy: each post's markdown is its own chunk, fetched only by
// that post's page. Loading every body eagerly put ~130 KB of markdown in the
// main bundle of every page.
const metaFiles = import.meta.glob('../../content/blog/*/*.md', {
  eager: true,
  query: '?blogmeta',
  import: 'default',
}) as Record<string, Record<string, string>>

const bodyFiles = import.meta.glob('../../content/blog/*/*.md', {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>

function loadPosts(locale: Locale): (BlogPost & { file: string })[] {
  return Object.entries(metaFiles)
    .filter(([path]) => path.includes(`/content/blog/${locale}/`))
    .map(([file, data]) => ({
      file,
      slug: data.slug ?? '',
      title: data.title ?? '',
      date: data.date ?? '',
      updated: data.updated || undefined,
      excerpt: data.excerpt ?? '',
      cover: data.cover ?? '',
      author: data.author ?? '',
      reviewedBy: data.reviewedBy || undefined,
      reviewed: data.reviewed || undefined,
    }))
    .filter((post) => post.slug)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

const postsByLocale = {
  es: loadPosts('es'),
  en: loadPosts('en'),
}

export function getBlogPosts(locale: Locale): BlogPost[] {
  return postsByLocale[locale]
}

export function getPostBySlug(locale: Locale, slug: string): BlogPost | undefined {
  return postsByLocale[locale].find((post) => post.slug === slug)
}

export async function loadPostHtml(locale: Locale, slug: string): Promise<string> {
  const post = postsByLocale[locale].find((p) => p.slug === slug)
  const load = post ? bodyFiles[post.file] : undefined
  if (!load) return ''
  const [{ marked }, { parseFrontmatter }, raw] = await Promise.all([
    import('marked'),
    import('@/utils/frontmatter'),
    load(),
  ])
  return marked.parse(parseFrontmatter(raw).body, { async: false }) as string
}
