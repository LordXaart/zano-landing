const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/*.html',
  ],
  theme: {
    fontFamily: {
      'sans': [
          'Roboto',
          ...defaultTheme.fontFamily.sans,
      ]
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        'sm': '540px',
        'md': '720px',
        'lg': '960px',
        'xl': '1140px',
      },
    }
  },
  plugins: [],
}
