const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        blueish: '#0F699F',
        'light-green': '#1C9E75',
        topaz: {
          DEFAULT: '#2C5F9A',
          50: '#9BBCE2',
          100: '#8BB2DE',
          200: '#6C9CD5',
          300: '#4C87CC',
          400: '#3573BA',
          500: '#2C5F9A',
          600: '#20446E',
          700: '#132943',
          800: '#070E17',
          900: '#000000',
        },
        daintree: {
          DEFAULT: '#00243C',
          50: '#0092F4',
          100: '#0086DF',
          200: '#006DB6',
          300: '#00558E',
          400: '#003C65',
          500: '#00243C',
          600: '#001C2E',
          700: '#00121F',
          800: '#000F1A',
          900: '#000C14',
        },
        meadow: {
          DEFAULT: '#1C9E75',
          50: '#88EACB',
          100: '#76E7C3',
          200: '#54E1B4',
          300: '#31DBA5',
          400: '#22C18F',
          500: '#1C9E75',
          600: '#146E52',
          700: '#0B3F2E',
          800: '#07271D',
          900: '#041610',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
