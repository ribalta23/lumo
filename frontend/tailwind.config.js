/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
      colors: {
        lumo: {
          DEFAULT: '#06D6A0',
          50: '#E6FFF7',
          100: '#B3FFE6',
          200: '#80FFD4',
          300: '#4DFFC3',
          400: '#1AFFB1',
          500: '#06D6A0',
          600: '#05B085',
          700: '#048A6A',
          800: '#03644F',
          900: '#023E34',
        },
        background: '#F8FFE5',
        text: '#2E2E2E',
      },
    },
  },
  plugins: [],
}
