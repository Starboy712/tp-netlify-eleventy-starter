// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{njk,md,js}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        foret: '#228b22',
      },
      fontFamily: {
        segoe: ['segoe ui'],
        sans: ['sans sherif'],
      },
      // screens: {
      //   portrait: { raw: '(orientation: portrait)' },
      // },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'inherit',
          },
        },
      }),
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
