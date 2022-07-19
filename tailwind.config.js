/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        pink: "rgb(219, 39, 119)",
        gray: "rgb(107, 114, 128)",
        darkgray: "rgb(55, 65, 81)",
      },
      colors: {
        pink: "rgb(219, 39, 119)",
        gray: "rgb(107, 114, 128)",
        darkgray: "rgb(55, 65, 81)",
      },
    },
  },
  plugins: [],
};
