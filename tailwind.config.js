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
        mainColor: '#B9006D',
        lightColor: '#E0D4E5',
        lightAccent: '#7B6684',
        darkColor: '#55414A',
        darkAccent: '#740038'
      }
    },
  },
  plugins: [],
}
