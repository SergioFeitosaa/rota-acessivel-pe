/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rota-dark': '#0b332b',
        'rota-primary': '#126c51',
        'rota-primary-dark': '#0d4f3b',
        'rota-light': '#f7f7f3',
        'rota-text': '#0e261e',
        'rota-accent': '#f29a76',
        'rota-tag-bg': '#e7f0ed',
        'rota-tag-text': '#126c51'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
