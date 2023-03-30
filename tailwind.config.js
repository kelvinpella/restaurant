/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        navbarCols: "auto 1fr auto",
      },
      fontFamily: {
        dancingFont: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
