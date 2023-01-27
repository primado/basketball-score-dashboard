/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


  theme: {
    extend: {},

    colors: {
      bg_dark_grey: "#1E1E1E",
      bg_white: '#fff'
    
    },

    fontFamily: {

      roboto: ['Roboto', 'sans-serif'],
    
    },
  },


  plugins: [

    require('@tailwindcss/forms'),
  ],
}
