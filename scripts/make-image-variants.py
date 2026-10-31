#!/usr/bin/env python3
"""Write smaller WebP copies of blog covers and avatars, and the manifest the
pages read to build `srcset`.

Covers are 1200 px wide but shown at about 720 px on desktop and 340 px on a
phone, so every visitor downloaded the full file (Lighthouse measured the
cover as the LCP element on blog posts at 4-6.7 s). Run after adding a cover:

    python3 scripts/make-image-variants.py

Only images listed in app/data/image-variants.json get a srcset; anything
else keeps its plain src, so a cover without variants never breaks.
"""
import json
import re
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
IMAGES = ROOT / 'public' / 'assets' / 'images'
MANIFEST = ROOT / 'app' / 'data' / 'image-variants.json'

COVER_WIDTHS = [480, 768, 1200]
AVATAR_WIDTHS = [96, 192]
AVATARS = ['team-lea.avif', 'team-jordana.jpg']


def covers() -> set[str]:
    found = set()
    for md in (ROOT / 'content' / 'blog').glob('*/*.md'):
        match = re.search(r'^cover:\s*/assets/images/(\S+)\s*$', md.read_text(), re.M)
        if match:
            found.add(match.group(1))
    return found


def variant_name(name: str, width: int) -> str:
    return f'{Path(name).stem}-{width}.webp'


def write_variants(name: str, widths: list[int]) -> list[int]:
    source = IMAGES / name
    if not source.exists():
        return []
    image = Image.open(source)
    image = image.convert('RGBA' if image.mode in ('RGBA', 'LA', 'P') else 'RGB')
    made = []
    for width in widths:
        if width >= image.width:
            continue
        height = round(image.height * width / image.width)
        target = IMAGES / variant_name(name, width)
        if not target.exists() or target.stat().st_mtime < source.stat().st_mtime:
            image.resize((width, height), Image.LANCZOS).save(target, 'WEBP', quality=78, method=6)
        # A smaller copy is only worth listing if it is also lighter. Cut-outs
        # with transparency can come out heavier as lossy WebP than the source.
        if target.stat().st_size >= source.stat().st_size * 0.9:
            target.unlink()
            continue
        made.append(width)
    return made


def main() -> None:
    manifest: dict[str, dict] = {}
    for name in sorted(covers()) + AVATARS:
        widths = write_variants(name, AVATAR_WIDTHS if name in AVATARS else COVER_WIDTHS)
        if widths:
            with Image.open(IMAGES / name) as original:
                manifest[f'/assets/images/{name}'] = {
                    'width': original.width,
                    'height': original.height,
                    'variants': {str(w): f'/assets/images/{variant_name(name, w)}' for w in widths},
                }
    MANIFEST.write_text(json.dumps(manifest, indent=2) + '\n')
    print(f'{len(manifest)} images with variants -> {MANIFEST.relative_to(ROOT)}')


if __name__ == '__main__':
    main()
