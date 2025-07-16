/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {},
      maxWidth: {
        "8xl": "90rem", // 1440px
        "9xl": "100rem", // 1600px
        "10xl": "120rem", // 1920px
      },
    },
  },
  plugins: [],
};
