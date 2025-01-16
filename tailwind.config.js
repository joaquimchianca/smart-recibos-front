/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand']
      },
      colors: {
        'charcoal': 'hsl(213.7, 30.8% ,26.1%)',
        'darkCharcoal': 'hsl(213.7, 30.8% ,14%)',
        'lightCharcoal': 'hsl(213.7, 30.8% ,34%)',
        'aliceblue': '#eff7ff',
        'magenta': 'hsl(28.9,89.8%,54.1%)',
        'lightMagenta': 'hsl(28.9,89.8%,64.1%)'
      },
    },
  },
  plugins: [],
}