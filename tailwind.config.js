module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{html,js}',
    './src/Components/**/*.{html,js}',
    './src/layouts/**/*.{html,js}',
    './src/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        topsale: "120px",
        promotion: "360px"
      },
      colors: {
        primarycolor: "#83C75D",
        primarybold: "#6ca34d",
      }
    },
  },
  fontFamily: {
    display: ["Nunito", "san-serif"],
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
