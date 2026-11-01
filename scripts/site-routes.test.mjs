import { test } from 'node:test'
import assert from 'node:assert/strict'
import { resolveLocalizedPaths } from '../app/utils/site-routes.ts'

const cases = [
  ['/', { es: '/', en: '/en' }],
  ['/en/', { es: '/', en: '/en' }],
  ['/que-es-la-quiropractica/', { es: '/que-es-la-quiropractica', en: '/en/what-is-chiropractic' }],
  ['/para-quien-sirve-la-quiropractica/personas-mayores/', { es: '/para-quien-sirve-la-quiropractica/personas-mayores', en: '/en/who-is-chiropractic-for/elder-people' }],
  ['/en/symptoms/sciatica/', { es: '/sintomas/ciatica', en: '/en/symptoms/sciatica' }],
  ['/blog/dormir-boca-abajo-riesgos-y-beneficios/', { es: '/blog/dormir-boca-abajo-riesgos-y-beneficios', en: '/en/blog/sleeping-on-your-stomach-risks' }],
]

test('resolves localized pairs with and without the trailing slash', () => {
  for (const [path, expected] of cases) {
    assert.deepEqual(resolveLocalizedPaths(path), expected, path)
    if (path !== '/') assert.deepEqual(resolveLocalizedPaths(path.slice(0, -1)), expected, path.slice(0, -1))
  }
})

test('returns null for pages without a counterpart', () => {
  assert.equal(resolveLocalizedPaths('/blog/no-such-post/'), null)
})
