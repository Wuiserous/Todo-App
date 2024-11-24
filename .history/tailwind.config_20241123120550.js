/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'grid-cols': 'grid-template-columns', // if you're animating grid columns
      },
    },
  },
  plugins: [],
}

