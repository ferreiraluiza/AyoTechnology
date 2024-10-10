/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat:['Montserrat', 'sans-serif'],
        poppins:['Poppins', 'sans-serif'],
        bebas:['Bebas nue', 'sans-serif']
      },
      fontSize:{
        medio: "2.5rem"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

