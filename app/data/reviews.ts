import { synced } from './google-reviews-sync'

// Patient reviews quoted on the site. Normally they come from
// `reviews.generated.json`, which `scripts/sync-google-reviews.mjs` refreshes
// from the clinic's own Google Business Profile (5-star reviews with text,
// verbatim, first name only; see README "Google reviews sync"). The list below
// is the fallback when that file is missing or too thin: copied verbatim from
// the listing at googleRating.url in clinic.ts on 25 Oct 2026, first names as
// the reviewers published them.
//
// This replaced the SociableKit widget, which loaded 123 KB of script and CSS
// plus Google avatar images on every home and offer page visit, failed a
// contrast check on its "load more" button, and showed whatever Google served
// that day.
//
// Rendered as plain text, not as review markup: Google stopped showing
// self-serving review stars for a business's own site in 2019, so there is
// nothing to gain and a guideline to break.
//
// `lang` lets each page lead with reviews in its own language.
export interface Review {
  name: string
  lang: 'es' | 'en'
  text: string
  // Known for synced reviews only. The card shows the star row and the date
  // when they are present; the hand-written list has neither, and inventing
  // five stars for a quote nobody re-checked would be exactly the kind of
  // claim the page promises not to make.
  rating?: number
  date?: string
}

const curated: Review[] = [
  {
    name: 'Roberto',
    lang: 'es',
    text: 'Fui por dolores de espalda constantes, insomnio y dolores de cabeza que no se me iban, después de realizar el tratamiento ya no tengo insomnio, ni dolores de cabeza y la espalda ha mejorado un 90%, realmente lo recomiendo.',
  },
  {
    name: 'Tania',
    lang: 'es',
    text: 'Desde que conocí a Lea mi vida cambió. Sufro mucho de espalda y cuello a causa de mi profesión y desde que asisto con ella he notado un cambio brutal.',
  },
  {
    name: 'Maria Teresa',
    lang: 'es',
    text: 'Después de un año y medio con dolores de espalda por una discopatia vuelvo a tener esperanza gracias a Lea. […] Con mi tercera sesión he dejado de tener dolor constante.',
  },
  {
    name: 'Mar',
    lang: 'es',
    text: 'Espero cada sesión con muchísimas ganas cada mes… no solo me arreglan la espalda sino que me siento con muchísima más fuerza y energia!',
  },
  {
    name: 'Arantxa',
    lang: 'es',
    text: 'Hemos sido atendidos mi familia entera incluyendo mi pareja con mucho dolor en la espalda, padres, hermanos y suegros. La atención de Léa es maravillosa.',
  },
  {
    name: 'Lisa',
    lang: 'en',
    text: 'I was so happy to find Léa here in València, particularly because she speaks English, so that was key for me. I had some hesitations due to previous chiropractic experiences, but Léa made me feel super comfortable right away.',
  },
  {
    name: 'WhitestWaters',
    lang: 'en',
    text: 'She puts you at ease and explains in detail what is going on in your body and you can see notable change from her treatments! I come back regularly for neck checkups but don\'t have any more upper back pain.',
  },
  {
    name: 'Chelsea',
    lang: 'en',
    text: 'I\'ve had many adjustments in the past and all chiropractors are not equal. She is gentle and takes her time. I also take my 5 year old daughter.',
  },
  {
    name: 'Rosalee',
    lang: 'en',
    text: 'She explains how everything in the body is connected and while fixing my posture, other problems like my jaw clenching have lessened greatly.',
  },
  {
    name: 'Judit',
    lang: 'en',
    text: 'She accompanied me through my IVF treatment and first trimester of pregnancy and helped me with my laundry list of pains and imbalances.',
  },
  {
    name: 'Kris',
    lang: 'en',
    text: 'If you want to better your quality of life, this is a great place to start. Lea is kind, incredibly knowledgeable, and speaks French, English, and Spanish.',
  },
]

// The home page shows six, so a synced list shorter than that would look
// emptier than the hand-written one it replaces; fall back in that case too.
const MIN_SYNCED = 6

export const reviews: Review[] =
  synced && synced.reviews.length >= MIN_SYNCED
    ? synced.reviews.map(({ name, lang, text, rating, date }) => ({ name, lang, text, rating, date }))
    : curated
