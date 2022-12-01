/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // backgroundImage : {
      //   'animate_bg': "url('./public/login-bg.svg')"
      // },
      fontFamily: {
        body: ['Poiret One'],
        title: ['Oxanium'],
        subtitle: ['Goldman'],
      },
      colors: {
        mainColor: {
          100: '#ccf3f1',
          200: '#99e6e3',
          300: '#66dad4',
          400: '#33cdc6',
          500: '#00c1b8',
          600: '#009a93',
          700: '#00746e',
          800: '#004d4a',
          900: '#002725',
        },
        lightColor: {
          100: '#f9fcff',
          200: '#f4f9ff',
          300: '#eef6ff',
          400: '#e9f3ff',
          500: '#e3f0ff',
          600: '#b6c0cc',
          700: '#889099',
          800: '#5b6066',
          900: '#2d3033',
        },
        lightAccent: {
          100: '#e3fef4',
          200: '#c7fdea',
          300: '#aafcdf',
          400: '#8efbd5',
          500: '#72faca',
          600: '#5bc8a2',
          700: '#449679',
          800: '#2e6451',
          900: '#173228',
        },
        darkColor: {
          100: '#d5dbe5',
          200: '#aab7cb',
          300: '#8093b0',
          400: '#556f96',
          500: '#2b4b7c',
          600: '#223c63',
          700: '#1a2d4a',
          800: '#111e32',
          900: '#090f19',
        },
        darkAccent: {
          100: '#ccebef',
          200: '#99d8df',
          300: '#66c4cf',
          400: '#33b1bf',
          500: '#009daf',
          600: '#007e8c',
          700: '#005e69',
          800: '#003f46',
          900: '#001f23',
        },
        highlight: {
          100: '#f7edd1',
          200: '#efdaa3',
          300: '#e7c876',
          400: '#dfb548',
          500: '#d7a31a',
          600: '#ac8215',
          700: '#816210',
          800: '#56410a',
          900: '#2b2105',
        },
        warning: {
          100: '#eed0d9',
          200: '#dca2b3',
          300: '#cb738e',
          400: '#b94568',
          500: '#a81642',
          600: '#861235',
          700: '#650d28',
          800: '#43091a',
          900: '#22040d',
        },
      },
    },
  },
  plugins: [],
};
