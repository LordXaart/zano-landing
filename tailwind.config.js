const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/*.html',
  ],
  theme: {
    screens: {
      'sm': '540px',
      'md': '720px',
      'lg': '960px',
      'xl': '1140px',
    },
    fontFamily: {
      'sans': [
          'Roboto',
          ...defaultTheme.fontFamily.sans,
      ]
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        'muted': '#525665',
        'heading-black': '#0D0C3A',
        'gray-50': '#F6F9FF',
        'gray-100': '#9EAACC',
        'black-100': '#121E3D',
        'black-500': '#525665',
        'blue-900': '#1C1C73',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(140.29deg, #16C6D8 0%, #2364F8 100%)',
        'gradient-cyan': 'linear-gradient(143.58deg, #E3FDFF 0%, #BAFBFF 100%)',
        'gradient-sky': 'linear-gradient(112.05deg, #E6F5FF 0%, #BBE4FF 100%)',
        'gradient-violet' : 'linear-gradient(112.05deg, #E9EFFF 0%, #B9CEFF 100%)',
        'gradient-indigo': 'linear-gradient(110.05deg, #19195A 0%, #131351 100%)',
        'gradient-indigo-2': 'linear-gradient(97.51deg, #0D0C3A 0%, #080733 100%)',
      },
      fontSize: {
        '5xl': '2.75rem',
        '4xl': '2rem',
        '3xl': '1.75rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
