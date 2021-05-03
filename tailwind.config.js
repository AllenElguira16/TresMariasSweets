const config = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif']
      },
      colors: {
        primary: '#F18B8E',
        white: '#FFFFFF'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = config;
