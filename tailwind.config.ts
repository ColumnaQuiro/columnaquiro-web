/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      fontSize: {
        h1: '3rem',
        h2: '2rem',
        h3: '1.5rem',
        h4: '1.25rem',
        h5: '1rem',
        h1_sm: '2rem',
        h2_sm: '1.75rem',
        h3_sm: '1.5rem',
        h4_sm: '1.25rem',
        h5_sm: '1rem'
      },
      lineHeight: {
        h1: '3.25rem',
        h2: '2.25rem',
        h3: '1.75rem',
        h4: '1.50rem',
        h5: '1.25rem',
        h1_sm: '2.25rem',
        h2_sm: '2rem',
        h3_sm: '1.75rem',
        h4_sm: '1.5rem',
        h5_sm: '1.25rem'
      },
      spacing: {
        nav: '4rem',
        section_x: '5rem'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    transitionProperty: {
      height: 'height'
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      'light-grey': '#EDEDED',
      brand: {
        primary: '#8D5B4C',
        secondary: '#69A297',
        tertiary: '#F2B880',
        quaternary: '#E7CFBC',
        white: '#FFF4EC',
        black: '#474747'
      },
      'brand-light': {
        primary: '#8D5B4C80',
        secondary: '#69A29780',
        tertiary: '#F2B88080',
        quaternary: '#E7CFBC80'
      }
    }
  },
  plugins: []
}
