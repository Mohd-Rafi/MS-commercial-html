const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily:{
      'body': ['Roboto', 'sans-serif'],
      'montserrat':['Montserrat', 'sans-serif'],
      'gm':['gorditamedium'],
      'gb':['gorditabold'],
    },
    backgroundPosition:{
      'backtotop': '-305px -288px',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


