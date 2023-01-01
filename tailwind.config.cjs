/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
     "./index.html",
     './src/**/*.{js,jsx,ts,tsx}', 
     './src/**/**/*.{js,jsx,ts,tsx}', 
     './node_modules/tw-elements/dist/js/**/*.js'
    ],

  theme: {
    extend: {},
    colors: {
      ...colors,
      black: "#000000",
      white: "#fff",
      aside: "rgb(14, 14, 14)",
      
    },
    screens: {
      xsm: '320px',
      sm: '412px',
      md: '768px',
      lg: '976px',
      xl: '1024px',
    },
  },
  plugins: [],
}