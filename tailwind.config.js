/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'app-primary': '#4318FF',
        'app-white': '#FFFFFF',
        'app-green': '#34A853',
        'app-red': '#EA4335',
        'app-yellow': '#FBBC05',
        'app-blue-dark': '#2B3674',
        'app-blue-light': '#4285F4',
        'app-purple-light': '#6A53FF',
        'app-background-main': '#F4F7FE',
        'app-gray': {
          50: '#f3f7fa',
          100: '#eaeff5',
          200: '#d8e2ed',
          300: '#c1cfe0',
          400: '#a7b7d2',
          500: '#90a0c4',
          600: '#707eae',
          700: '#66719c',
          800: '#545d7f',
          900: '#485067',
          950: '#2a2e3c',
        },
        'oxford-blue': {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d4dae3',
          300: '#afbaca',
          400: '#8495ac',
          500: '#647793',
          600: '#506079',
          700: '#414e63',
          800: '#374151',
          900: '#333b47',
          950: '#22272f',
      },
      'electric-violet': {
        50: '#faf5ff',
        100: '#f4e8ff',
        200: '#ebd5ff',
        300: '#dbb4fe',
        400: '#c384fc',
        500: '#aa55f7',
        600: '#9333ea',
        700: '#7c22ce',
        800: '#6821a8',
        900: '#541c87',
        950: '#380764',
      },
      
      'mirage': {
        700: '#2b4779',
        800: '#273e65',
        900: '#253555',
        950: '#030712',
      },
      'black': {
        50: '#f6f6f6',
        100: '#e7e7e7',
        200: '#d1d1d1',
        300: '#b0b0b0',
        400: '#888888',
        500: '#6d6d6d',
        600: '#5d5d5d',
        700: '#4f4f4f',
        800: '#454545',
        900: '#3d3d3d',
        950: '#000000',
      },    
      'bunker': {
        
        950: '#030712',
    },
    

      },
    },
  },
  plugins: [],
};