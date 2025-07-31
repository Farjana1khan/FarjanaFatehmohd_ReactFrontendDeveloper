/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: ['theme1', 'theme2', 'theme3'],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],         // for Theme 3
        serifCustom: ['Georgia', 'serif'],         // for Theme 2
        sansCustom: ['Inter', 'sans-serif'],       // for Theme 1 (default)
      },
    },
  },
  plugins: [],
}