const colors = require('tailwindcss/colors');
module.exports = {
  darkMode: 'class',
  important: '#app',
  content: ['./src/**/*.pug', './src/**/**/*.pug'],
  // mode: 'jit',
  safelist: [
    {
      pattern: /./,
    },
  ],
  theme: {
    colors: {
      brands: {
        primary: colors.cyan[500],
        secondary: colors.gray[200],
        info: colors.teal[500],
        success: colors.lime[500],
        warning: colors.amber[500],
        danger: colors.rose[500],
      },
      ...colors,
    },
    extend: {
      fontFamily: {
        git: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      },
    },
  },
  plugins: [],
};
