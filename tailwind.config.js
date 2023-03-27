/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Rubik Glitch", "cursive"],
      },
      screens: {
        'sm': {'min': '390px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1440px'},
        'xl': {'min': '1441px', 'max': '1520px'},
        'xxl': {'min': '1521px'},
      }
    },
  },
  plugins: [],
}
