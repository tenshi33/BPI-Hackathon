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
        'card-height': '450px',
        'login-height': '510px'
      },
      width:{
        'card-width': '334px',
        'login-width': '466px',
        'input-width': '360'
      },
      backgroundColor:{
        'input-bg': '#0D0D0D',
        'login-btn': '#311A2E'
      },
      backgroundImage: { 'custom-gradient': 'linear-gradient(to bottom, rgba(79, 40, 63, 0.18), rgba(35, 27, 27, 0.18))',
      }
    },
  },
  plugins: [],
}

