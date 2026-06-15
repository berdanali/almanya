/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkNavy: {
          50: '#f5f5fa',
          100: '#eaeaf5',
          200: '#d5d6ec',
          300: '#b2b5dd',
          400: '#878cc9',
          500: '#646ab4',
          600: '#4e529a',
          700: '#3e417e',
          850: '#1a183b', // Custom dark navbar
          900: '#1e1b4b', // Primary base color
          950: '#0f0d26', // Ultra dark background
        },
        accentViolet: {
          500: '#6366f1',
        },
        accentIndigo: {
          500: '#8b5cf6',
        }
      },
    },
  },
  plugins: [],
}
