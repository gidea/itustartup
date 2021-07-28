module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      // backgroundImage: theme => ({
      //   'hero-pattern': "url('/images/hero-pattern.svg)",
      //   'footer-texture': "url('/images/footer-texture.png')",
      // })
    },
  },
  plugins: [],
}
