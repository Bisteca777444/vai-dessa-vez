/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
        redasiatic: '#8B0000',
      },
      fontFamily: {
        asian: ['Noto Sans SC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

