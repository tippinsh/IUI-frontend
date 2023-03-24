/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        sanspro: ["Source Sans Pro", "sans-serif"],
        gloock: ["Gloock", "serif"],
        koulen: ["Koulen", "cursive"],
      },
    },
  },
  plugins: [],
};
