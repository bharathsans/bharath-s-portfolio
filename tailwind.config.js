/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: { '0%, 100%': { transform: 'rotate(-6deg)' }, '50%': { transform: 'rotate(6deg)' } }
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
} 