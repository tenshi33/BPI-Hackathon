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
        'login-height': '510px',
        'register-height': '739px',
        'register': '40px',
        'input-height': '50px',
        'input-field-height': '730px'
      },
      width:{
        'card-width': '334px',
        'login-width': '466px',
        'input-width': '360px',
        'register-width': '937px',
        'register-input': '161px',
        'input-width': '280px',
        'input-field-width': '1075px'
      },
      backgroundColor:{
        'input-bg': '#0D0D0D',
        'login-btn': '#311A2E',
        
      },
      backgroundImage: { 'custom-gradient': 'linear-gradient(to bottom, rgba(79, 40, 63, 0.18), rgba(35, 27, 27, 0.18))',
      },
      gap:{
        'input-gap': '22px'
      },
      padding:{
        'padding-btn': '20px'
      }
    },
  },
  plugins: [],
}

