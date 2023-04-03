/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "90vh": "90vh",
      },
      gridTemplateColumns: {
        navbarCols: "auto 1fr auto",
      },
      fontFamily: {
        dancingFont: ["Dancing Script", "cursive"],
      },
      backgroundImage: {
        bgFooter:
          "linear-gradient(to right, transparent,#301111),url('https://images.unsplash.com/photo-1587899897387-091ebd01a6b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1213&q=80')",
      },
    },
  },
  plugins: [],
};
