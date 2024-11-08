/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 40s linear infinite', // Adjust duration here
      },
      borderRadius:{
        'button': '38px'
      },
      height:{
        'card-height': '450px'
      },
      width:{
        'card-width': '334px'
      }
    },
  },
  plugins: [],
}

