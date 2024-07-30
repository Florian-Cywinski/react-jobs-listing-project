/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {   // To add a font stack
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {  // To add a class for the details page
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [],
}