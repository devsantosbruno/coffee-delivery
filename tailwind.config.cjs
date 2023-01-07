/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.tsx", "./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      body: ["Roboto", "sans-serif"],
      baloo: ["Baloo 2", "cursive"],
    },
    extend: {
      colors: {
        white: "#FFF",

        "gray-100": "#FAFAFA",
        "gray-200": "#F3F2F2",
        "gray-300": "#EDEDED",
        "gray-400": "#E6E5E5",
        "gray-500": "#D7D5D5",

        "brown-200": "#8D8686",
        "brown-300": "#574F4D",
        "brown-500": "#403937",
        "brown-700": "#272221",

        "yellow-200": "#F1E9C9",
        "yellow-500": "#DBAC2C",
        "yellow-700": "#C47F17",

        "purple-200": "#EBE5F9",
        "purple-400": "#8047F8",
        "purple-800": "#4B2995",
      },
      backgroundImage: {
        withColors: "url('./src/assets/background-colors.svg')",
        gradientBorder:
          "linear-gradient(90deg, rgba(219,172,44,1) 0%, rgba(128,71,248,1) 100%)",
      },
    },
  },
  plugins: [],
};
