module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primarycolor: "#83C75D",
        primarybold:"#6ca34d",
      }
    },
  },
  fontFamily:{
    display:["Nunito","san-serif"],
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
