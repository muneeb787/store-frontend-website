/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  fontFamily: {
    'nunito': ['nunito', 'sans-serif'],
    'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

