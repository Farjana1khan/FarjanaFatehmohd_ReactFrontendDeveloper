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
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-in-right': 'slideInRight 0.5s ease-in-out',
        'slide-in-left': 'slideInLeft 0.5s ease-in-out',
        'bounce-in': 'bounceIn 0.4s ease-out forwards',
      },
    
    },
  },
  plugins: [],
}