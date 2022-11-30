/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poiret One'],
        title: ['Oxanium'],
        subtitle: ['Goldman'],
      },
      colors: {
        mainColor: '#00C1B8',
        lightColor: '#E3F0FF',
        lightAccent: '#72FACA',
        darkColor: '#2B4B7C',
        darkAccent: '#009DAF',
        highlight: '#d7a31a',
        warning: '#a81642'
      }
    },
  },
  plugins: [],
}
