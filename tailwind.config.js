/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
      'custom-blue':'#0275d8',
      'app-bg':"#1c435b"
      },
      textColor:{
        'app-bg':'#1c435b',
        'pinkish':'#8b2188'
      }
    },
  },
  plugins: [],
}