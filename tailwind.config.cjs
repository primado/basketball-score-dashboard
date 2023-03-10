/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",

    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],


  theme: {
    extend: {
      colors: {
        bg_dark_grey: "#1E1E1E",
        bg_white: '#fff'
      
      },
  
    },

   
    fontFamily: {

      roboto: ['Roboto', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    
    },

    backgroundImage: {
      'home-bg': "url('/b-home.svg')",
    },

    screens: {
      'sm-412': {'max': '420px'},
      'sm-414': {'max': '418px'},
      'sm-425': {'max': '428px'},
      'sm-360': {'max': '365px'},
      'sm-320': {'max': '330px'},
      'sm-375': {'max': '380px'},

      'sm-428': {'max': '435px'},
      'sm-390': {'max': '400px'},

      'md-810': {'max': '820px'},
      'md-768': {'max': '780px'},
      'md-690': {'max': '700px'},

      'md-900': {'max': '1000px'},

      'md-1080': {'max': '1090px'},

      'lg-1024': {'max': '1024px'},
      '2xl-1440': {'max': '1450px'},
      '3xl-2560': {'max': '2570px'},


    }
  },


  plugins: [
    
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
   
  ],
}
