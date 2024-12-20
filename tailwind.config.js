/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          "100": "#111215",
          "200": "#1B1D1F",
          "300": "#6F757C",
        },
        light: {
          "orange": "#ED735D",
          "green": "#BEE3CC",
          "yellow": "#F6C768",
          "white": "#FEF7EE",
        }
      }
    },
  },
  plugins: [],
}

