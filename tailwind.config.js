/** @type {import('tailwindcss').Config} */

const DefaultTailwindTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./lib/views/**/*.hbs'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...DefaultTailwindTheme.fontFamily.sans]
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')]
}
