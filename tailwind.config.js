/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBackground: "#212222",
        secondaryBackground: "#2f3030",
        primaryColor: "#e0a80d",
        greyDark: "#7d8792",
        headingColor: "#2d2e2e",
        white: "#fff",
        black: "#000",
        sliver: "#bac8d3",
      },
      fontFamily: {
        Montserrat: "'Montserrat', sans-serif",
      },
    },
  },
  plugins: [],
};
