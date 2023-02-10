const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#DA251D',
      },
      fontSize: {
        '13': '0.8125rem',
        '22': '1.375rem',
        '21': '1.3125rem',
        '15': '0.9375rem',
      },
    },
    fontFamily:{
      'body': ['Roboto', 'sans-serif'],
      'montserrat':['Montserrat', 'sans-serif'],
      'gm':['gorditamedium'],
      'gb':['gorditabold'],
    },
    backgroundImage: {
      'footer-nav-arrow': "url('../images/footer-mob-arrow.png')",
    },
    screens: {
      'sm': {'max': '360px'},
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


