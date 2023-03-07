/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-primary': {
          DEFAULT: '#ffffff',
          dark: '#0e172a'  
        },
        'bg-secondary': {
          DEFAULT: '#eeeeee',
          dark: '#1e293b'
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
