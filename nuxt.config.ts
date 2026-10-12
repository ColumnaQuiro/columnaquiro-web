import tailwindcss from '@tailwindcss/vite'
import { SYMPTOM_HUB, SYMPTOM_SLUG_PAIRS, BLOG_HUB, BLOG_SLUG_PAIRS } from './app/utils/site-routes'

const SITE_URL = 'https://columnaquiro.com'

const symptomRoutes = SYMPTOM_SLUG_PAIRS.flatMap((pair) => [
  `${SYMPTOM_HUB.es}/${pair.es}`,
  `${SYMPTOM_HUB.en}/${pair.en}`,
])

const blogRoutes = BLOG_SLUG_PAIRS.flatMap((pair) =>
  pair.en
    ? [`${BLOG_HUB.es}/${pair.es}`, `${BLOG_HUB.en}/${pair.en}`]
    : [`${BLOG_HUB.es}/${pair.es}`],
)

export default defineNuxtConfig({
  compatibilityDate: '2026-08-10',
  ssr: true,
  devtools: { enabled: false },

  experimental: {
    payloadExtraction: false,
  },

  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots'],

  site: {
    url: SITE_URL,
    name: 'ColumnaQuiro',
    defaultLocale: 'es',
  },

  sitemap: {
    excludeAppSources: true,
    sources: ['/api/__sitemap__/urls'],
  },

  robots: {
    disallow: ['/admin'],
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
          media: 'print',
          onload: "this.media='all'",
        },
      ],
      noscript: [
        {
          innerHTML:
            '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap">',
        },
      ],
      meta: [{ name: 'theme-color', content: '#0b382c' }],
      script: [
        // Consent Mode v2. Must run before any Google tag, so it goes first and
        // stays inline and synchronous.
        //
        // Every storage type starts `denied`, which is what makes it legal to
        // load the Google tags for a visitor who has not consented yet: while
        // denied they set no cookies and send only a cookieless ping. That ping
        // is the whole point. The previous setup blocked the tags outright with
        // `type: 'fs-cc'`, so a visitor who ignored the banner was invisible --
        // no pageview, no conversion, no gclid. Measured over 15 Sep - 12 Oct
        // 2026 that was most of them: Google Ads counted 321 clicks on the
        // Demand Gen campaign and GA4 saw 23 sessions, while Ads reported 0
        // conversions against 39 bookings GA4 had actually recorded.
        //
        // `url_passthrough` is what rescues attribution in that denied state:
        // with no cookie to store it in, the gclid is carried on the URL
        // instead, which is also how it reaches the booking widget (see
        // useBookingUrl). `ads_data_redaction` strips ad identifiers from those
        // pings until marketing is granted.
        //
        // The Meta pixel below is deliberately NOT moved here. Consent Mode is
        // a Google protocol; Meta has no cookieless equivalent, so loading the
        // pixel early would simply drop cookies without consent. It stays
        // blocked until the visitor accepts.
        //
        // Consent is then lifted from Finsweet, which announces a granted
        // category by pushing `<category>-activated` into the dataLayer -- on
        // the first visit and again on every later one, replayed from its
        // stored preference. The loop below polls for those rather than
        // wrapping `dataLayer.push`, because GTM replaces that function with
        // its own once it loads and would quietly discard any wrapper.
        {
          key: 'consent-init',
          // Ordering here is correctness, not tidiness. What actually has to
          // hold is that `consent default` is queued into the dataLayer before
          // any `config`, since gtag.js replays that queue in order whenever it
          // finishes loading. The inline scripts below already run in source
          // order, but Nuxt hoists the external gtag.js above them, so the
          // priority pins this one first and keeps the guarantee readable.
          tagPriority: -10,
          innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});
gtag('set','ads_data_redaction',true);gtag('set','url_passthrough',true);
(function(){var g={},i=0,t;
function grant(c){if(g[c])return;g[c]=true;
if(c==='analytics'){gtag('consent','update',{analytics_storage:'granted'})}
else{gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'});gtag('set','ads_data_redaction',false)}}
function scan(){for(;i<dataLayer.length;i++){var e=dataLayer[i];if(!e)continue;
if(e.event==='analytics-activated')grant('analytics');else if(e.event==='marketing-activated')grant('marketing')}
if(g.analytics&&g.marketing)clearInterval(t)}
t=setInterval(scan,400);scan()})();`,
        },
        // Only the two Google tags are loaded up front, and only because
        // Consent Mode makes them harmless while denied.
        {
          key: 'gtag-ads',
          src: 'https://www.googletagmanager.com/gtag/js?id=AW-17548404792',
          async: true,
        },
        {
          key: 'gtag-config',
          innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-17548404792');gtag('config','G-7RZ1YECNKZ');`,
        },
        // `type: 'fs-cc'` is what makes these inert until the visitor consents:
        // the browser will not execute an unknown script type, and Finsweet
        // collects them with `querySelectorAll('script[type="fs-cc"]')` and
        // rewrites the type once the analytics category is granted. The exact
        // string matters -- with any other placeholder type (`text/plain`, say)
        // Finsweet never sees the scripts, so they stay blocked forever and the
        // tags silently never fire, consent or not.
        //
        // The GTM container stays blocked, and that is the whole reason these
        // two lists are separate. Consent Mode governs Google's own tags; it
        // places no restraint on third-party tags inside a container. Measured
        // on a cleared browser: with GTM loaded up front the Meta pixel it
        // carries fired and called connect.facebook.net before anyone had
        // touched the banner -- the inline pixel below was still blocked, so
        // the request came from inside the container. Loading GTM early buys
        // nothing here anyway: the Ads conversion and the GA4 property are both
        // configured directly above.
        ...[
          {
            key: 'gtm',
            innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NTMKRQV');`,
          },
          {
            key: 'meta-pixel',
            innerHTML: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.agent='plwebflow';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','871158915207190');fbq('track','PageView');`,
          },
        ].map((s) => ({ ...s, type: 'fs-cc', 'fs-cc-category': 'analytics' })),
      ] as any,
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: [
        '/',
        '/en',
        '/que-es-la-quiropractica',
        '/en/what-is-chiropractic',
        '/como-funciona',
        '/en/how-does-it-work',
        '/que-es-la-quiropractica/preguntas-frecuentes',
        '/en/what-is-chiropractic/faqs',
        '/para-quien-sirve-la-quiropractica',
        '/en/who-is-chiropractic-for',
        '/sobre-nosotros/equipo',
        '/en/about-us/our-team',
        '/sobre-nosotros/centro-quiropractico-valencia',
        '/en/about-us/chiropractic-valencia',
        '/sobre-nosotros/contacto',
        '/en/about-us/contact',
        '/blog',
        '/en/blog',
        '/reserva-cita',
        '/en/book-appointment',
        '/politica-de-privacidad',
        '/en/privacy-policy',
        '/aviso-legal',
        '/en/legal-notice',
        '/politica-de-cookies',
        '/en/cookies-policy',
        '/sobre-nosotros/equipo/lea-guido',
        '/en/about-us/our-team/lea-guido',
        '/sobre-nosotros/equipo/jordana-aguar',
        '/en/about-us/our-team/jordana-aguar',
        '/oferta-primera-visita',
        '/en/first-visit-offer',
        '/promocion-especial-primera-visita-quiropractica',
        '/promocion-especial-primera-visita-quiropractica-con-natacha',
        '/cita-reservada',
        '/social',
        ...symptomRoutes,
        ...blogRoutes,
      ],
    },
  },
})
