/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          "softBlue" : "hsl(215, 51%, 70%)",
          "colorCyan" : "hsl(178, 100%, 50%)",
          "veryDarkBlueBG" : "hsl(217, 54%, 11%)",
          "veryDarkBlueCard" : "hsl(216, 50%, 16%)",
          "veryDarkBlueLine" : "hsl(215, 32%, 27%)",
          "colorWhite" : "hsl(0, 0%, 100%)",
      }
    },
  },
  plugins: [],
}

