import variants from '@/data/image-variants.json'

interface ImageEntry {
  width: number
  height: number
  variants: Record<string, string>
}

const manifest = variants as Record<string, ImageEntry>

// `srcset` for an image that scripts/make-image-variants.py has resized, with
// the original as the widest candidate. Undefined for anything else, so an
// image without variants keeps a plain `src` and never points at a missing file.
export function srcsetFor(src: string): string | undefined {
  const entry = manifest[src]
  if (!entry) return undefined
  const candidates = Object.entries(entry.variants).map(([width, path]) => `${path} ${width}w`)
  return [...candidates, `${src} ${entry.width}w`].join(', ')
}

// The smallest variant at least `minWidth` wide, for fixed-size images such as
// avatars where a srcset would be overkill.
export function smallestAtLeast(src: string, minWidth: number): string {
  const entry = manifest[src]
  if (!entry) return src
  const fit = Object.entries(entry.variants)
    .map(([width, path]) => [Number(width), path] as const)
    .filter(([width]) => width >= minWidth)
    .sort((a, b) => a[0] - b[0])[0]
  return fit ? fit[1] : src
}
