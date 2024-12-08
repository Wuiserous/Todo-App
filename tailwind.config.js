/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-bg': 'fadeBg 0.5s ease-in-out',
      },
      keyframes: {
        fadeBg: {
          '0%': { backgroundColor: '#1E1E1E' },
          '100%': { backgroundColor: 'var(--tw-bg-opacity)' },
        },
      },
      transitionProperty: {
        'grid-cols': 'grid-template-columns', // if you're animating grid columns
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set Roboto as the primary font
      },
    },
  },
  plugins: [],
}

