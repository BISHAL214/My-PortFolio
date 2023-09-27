/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Comfortaa', "cursive"]
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(15deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(15deg)' },
          '40%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(15deg)' },
          '60%': { transform: 'rotate(-8deg)' },
          '70%': { transform: 'rotate(15deg)'},
          '80%': { transform: 'rotate(-8deg)'},
          '90%': { transform: 'rotate(15deg)'},
          '100%': { transform: 'rotate(-8px)' },
        },
      },
      animation: {
        'waving-hand': 'wave 4s linear infinite',
      },
      keyframes: {
        rotate: {
          '0%': {transform: 'rotate(0.0deg)'},
          '100%': {transform: 'rotate(360deg)'}
        }
      },
      animation: {
        'rotate': 'rotate 4s linear infinite'
      },
  },
  plugins: [],
},
}
