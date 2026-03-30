/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  // Enable JIT mode for smaller production builds
  mode: 'jit',
  theme: {
    extend: {
      keyframes: {
        'slide-in-from-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        }
      },
      animation: {
        'slide-in-from-right': 'slide-in-from-right 0.3s ease-out'
      }
    },
  },
  plugins: [],
}