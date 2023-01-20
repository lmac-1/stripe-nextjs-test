/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-button': '#0597f2',
        'blue-button-hover': '#0583f2',
      },
    },
  },
  plugins: [],
};
