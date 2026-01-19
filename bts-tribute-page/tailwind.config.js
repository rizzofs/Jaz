/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bts-purple': '#5D2492',
        'bts-dark': '#0f0518',
        'bts-light': '#f3e8ff',
      },
    },
  },
  plugins: [],
}
