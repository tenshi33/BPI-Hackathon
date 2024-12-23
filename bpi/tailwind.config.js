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
        'button': '38px',
        'Button-radius': '20px'
      },
      height:{
        'card-height': '450px',
        'login-height': '510px',
        'register-height': '739px',
        'register': '40px',
        'input-height': '50px',
        'input-field-height': '730px',
        'feature-card-height': '384px',
        'developer-card-height': '230px',
        'developer-profile-hight': '74px',
      },
      width:{
        'card-width': '334px',
        'login-width': '466px',
        'input-width': '360px',
        'register-width': '937px',
        'register-input': '161px',
        'input-width': '280px',
        'input-field-width': '1075px',
        'feature-card-width': '315px',
        'developer-card-width': '406px',
        'developer-profile-width': '74px',
        
      },
      backgroundColor:{
        'input-bg': '#0D0D0D',
        'login-btn': '#311A2E',
        'background-gray-opacity': 'rgba(50, 49, 49, 0.5)'
        
      },
      backgroundImage: { 'custom-gradient': 'linear-gradient(to bottom, rgba(79, 40, 63, 0.40), rgba(35, 27, 27, 0.18))',
      },
      gap:{
        'input-gap': '22px'
      },
      padding:{
        'padding-btn': '20px'
      },
      fontSize:{
        'header': '36px',
        'about-p': '15px',
        'name-size': '12px',
        'position-size': '10px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    function({ addUtilities }) { const newUtilities = { 'input:-webkit-autofill': { '-webkit-box-shadow': '0 0 0 1000px hsl(var(--background)) inset !important', '-webkit-text-fill-color': 'hsl(var(--foreground)) !important', }, }; addUtilities(newUtilities) }
  ],
}

