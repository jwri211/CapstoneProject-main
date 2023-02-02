/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./Components/**/*.{js,jsx}",
    "./Pages/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Roboto', sans-serif],
      cursive: ['Rancho', cursive],
    },
    backgroundColor: {
      'regal-blue': '#143154'
    },
  },
  plugins: [],
}
