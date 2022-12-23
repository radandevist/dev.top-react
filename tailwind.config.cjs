/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        crayon: '0 1px 1px rgba(0, 0, 0, 0.1)',
        tag: 'inset 0 0 0 1px rgba(23, 23, 23, 0.05),inset 0 0 0 1px rgba(23, 23, 23, 0.05),inset 0 0 0 1px rgba(23, 23, 23, 0.05)'
      },
    },
  },
  plugins: [],
}
