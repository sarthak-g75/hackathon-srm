/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary:'#3A1408',
        primary:'#772F1A'
      }
    },
  },
  plugins: [],
}

