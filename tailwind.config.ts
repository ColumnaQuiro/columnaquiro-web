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
        h1: '4rem',
        h2: '3rem',
        h3: '2rem',
        h4: '1.5rem',
        h5: '1.25rem',
        h1_sm: '3rem',
        h2_sm: '2.25rem',
        h3_sm: '1.75rem',
        h4_sm: '1.5rem',
        h5_sm: '1.25rem'
      },
      lineHeight: {
        h1: '4.25rem',
        h2: '3.25rem',
        h3: '2.25rem',
        h4: '1.75rem',
        h5: '1.5rem',
        h1_sm: '3.25rem',
        h2_sm: '2.5rem',
        h3_sm: '2rem',
        h4_sm: '1.75rem',
        h5_sm: '1.5rem'
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
