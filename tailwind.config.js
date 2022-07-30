/** @type {import('tailwindcss').Config} */
module.exports = {
  //vsetky ktore koncia html

  content: ["public/*.html"],
  // ** - vsetky podadresare
  theme: {

    extend: {
      screens: {
        'sm': '420px',
      },
      colors:{
        toll: {
          '100': '#E6FFFA',
          '200': '#B2F5EA',
          '300': '#81E6D9',
          '400': '#4FD1C5'
        }
      }
    },
  },
  plugins: [],
}
