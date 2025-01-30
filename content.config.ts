import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    'blogES': defineCollection({
      type: 'page',
      source: 'blog/*.md'
    }),
    'blogEN': defineCollection({
      type: 'page',
      source: 'blog/en/*.md'
    })
  }
})
