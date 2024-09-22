/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,css,html}",
  ],
  theme: {
    extend: {
      colors: {
        'alpine-black': '#2C3441',
        'alpine-blue': '#78C1D2',
      },
    },
  },
  plugins: [],
}

