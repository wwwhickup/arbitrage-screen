/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-primary': {
          DEFAULT: '#ffffff',
          dark: '#0e172a'  
        }
      }
    },
  },
  plugins: [],
}
