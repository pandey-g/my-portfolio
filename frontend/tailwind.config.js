/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class', // Enable dark mode using a class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

