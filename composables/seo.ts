import { useSeoMeta } from '@unhead/vue'

export const useSEO = () => {
  const setSeoTags = (title?: string, description?: string) => {
    const { path } = useRoute()
    const canonical = `https://columnaquiro.com${path}`
    useHead(() => ({
      title,
      link: [
        {
          rel: 'canonical',
          href: canonical
        }
      ]
    }))
    useSeoMeta({
      ogUrl: canonical
    })
    useSeoMeta({
      description,
      ogDescription: description,
      ogTitle: title
    })
  }

  const setSchemaOrgTag = ({ type, customProps }: {type: string, customProps: {[key: string]: any }}) => {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: {
            '@context': 'https://schema.org',
            '@type': type,
            ...customProps
          }
        }
      ]
    })
  }

  const setLocalBusinessSchemaOrgTag = () => {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: {
            '@context': 'https://schema.org',
            '@type': 'HealthAndBeautyBusiness',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'ES',
              addressLocality: 'Valencia',
              addressRegion: 'Valencia',
              postalCode: '46004',
              streetAddress: 'Calle del Vivons 29'
            },
            name: 'Centro Quiropráctico Columnaquiro',
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 39.4601051,
              longitude: -0.3744673
            },
            url: 'https://columnaquiro.com',
            telephone: '+34744735363',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Wednesday'
                ],
                opens: '15:00',
                closes: '20:00'
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Tuesday',
                  'Thursday',
                  'Friday'
                ],
                opens: '10:00',
                closes: '14:00'
              }
            ]
          }
        }
      ]
    })
  }

  return {
    setSeoTags,
    setSchemaOrgTag,
    setLocalBusinessSchemaOrgTag
  }
}
