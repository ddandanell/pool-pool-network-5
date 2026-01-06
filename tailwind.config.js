/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pool: {
          light: '#E0F2FE',
          DEFAULT: '#0EA5E9',
          dark: '#0369A1',
          darker: '#0C4A6E'
        }
      }
    },
  },
  plugins: [],
}
