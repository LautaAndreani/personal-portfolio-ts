/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      soft_gray: '#AAAAAA',
      dark_grey: "#333333",
      black: '#000',
      hover: '#0F0F0F',
      orange: "#F6C280",
      badge: {
        background: '#1C1C1C'
      }
    },
    fontSize: {
      sm: '13px',
      badge: '11px'
    },
    extend: {
      letterSpacing: {
        sm: '0.025em'
      }
    },
  },
  plugins: [],
}