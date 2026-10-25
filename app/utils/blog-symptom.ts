// Guesses which /sintomas page a blog post belongs with, from its slug and
// title. Posts carry no category in their front matter, and 62 of them
// already exist, so a keyword map is the practical way to give each post's
// offer card a link to the matching condition page. Order matters: the first
// match wins, so the more specific terms come first.
const RULES: [RegExp, string][] = [
  [/escoliosis|scoliosis/i, 'escoliosis'],
  [/hernia|disc(al|opat)|herniated|bulging/i, 'hernia-discal'],
  [/ciatic|sciatic/i, 'ciatica'],
  [/tunel|túnel|carpal|carpiano/i, 'sindrome-del-tunel-carpiano'],
  [/fibromialgia|fibromyalgia/i, 'fibromialgia'],
  [/cervical|cuello|neck|trapecio|cabeza|migra|headache|cefalea|mareo|vertigo|vértigo|oído|oido/i, 'dolor-de-cervicales-y-cabeza'],
  [/lumbar|lumbalgia|espalda baja|lower back|low back|espalda media|middle back|espalda|back pain/i, 'lumbalgia'],
  [/estr[ée]s|stress|ansiedad|anxiety|insomnio|sleep|dormir|depres/i, 'estres-y-depresion'],
]

export function symptomForPost(slug: string, title: string): string | undefined {
  const haystack = `${slug} ${title}`
  return RULES.find(([re]) => re.test(haystack))?.[1]
}
