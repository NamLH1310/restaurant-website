module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        topsale: "120px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
