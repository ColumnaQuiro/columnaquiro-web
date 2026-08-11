import { marked } from 'marked'
import type { Locale } from '@/utils/site-routes'

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  cover: string
  author: string
  html: string
}

function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) return { data: {}, body: raw }

  const data: Record<string, string> = {}
  for (const line of match[1]!.split('\n')) {
    const separatorIndex = line.indexOf(':')
    if (separatorIndex === -1) continue
    const key = line.slice(0, separatorIndex).trim()
    let value = line.slice(separatorIndex + 1).trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    data[key] = value
  }
  return { data, body: match[2]! }
}

const files = import.meta.glob('../../content/blog/*/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

function loadPosts(locale: Locale): BlogPost[] {
  return Object.entries(files)
    .filter(([path]) => path.includes(`/content/blog/${locale}/`))
    .map(([, raw]) => {
      const { data, body } = parseFrontmatter(raw)
      return {
        slug: data.slug ?? '',
        title: data.title ?? '',
        date: data.date ?? '',
        excerpt: data.excerpt ?? '',
        cover: data.cover ?? '',
        author: data.author ?? '',
        html: marked.parse(body, { async: false }) as string,
      }
    })
    .filter((post) => post.slug)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

const postsByLocale: Record<Locale, BlogPost[]> = {
  es: loadPosts('es'),
  en: loadPosts('en'),
}

export function getBlogPosts(locale: Locale): BlogPost[] {
  return postsByLocale[locale]
}

export function getPostBySlug(locale: Locale, slug: string): BlogPost | undefined {
  return postsByLocale[locale].find((post) => post.slug === slug)
}
