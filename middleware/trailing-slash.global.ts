import type { RouteLocationPathRaw } from 'vue-router'

export default function ({ path, query, hash }: RouteLocationPathRaw) {
  if (path === '/' || !path.endsWith('/')) {
    return
  }

  const nextPath = path.replace(/\/+$/, '') || '/'
  const nextRoute = { path: nextPath, query, hash }

  // 308 Permanent Redirect
  return navigateTo(nextRoute, { redirectCode: 308 })
}
