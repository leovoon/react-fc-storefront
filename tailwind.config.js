const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      color: {
        black: '#1D1F22',
        gray: '#EEEEEE',
        green: '#5ECE7B',
      },
      fontFamily: {
        raleway: ['Raleway', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', ...defaultTheme.fontFamily.serif],
        robotoCondensed: ['RobotoCondensed', ...defaultTheme.fontFamily.serif],
        sourcesanspro: ['Source Sans Pro', ...defaultTheme.fontFamily.serif],
      },
    },
  },
}
