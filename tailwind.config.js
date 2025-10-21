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
        green: {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#bce5bc',
          300: '#8bd18b',
          400: '#56b856',
          500: '#3da33d',
          600: '#2f842f',
          700: '#286828',
          800: '#235323',
          900: '#1e451e',
        },
        orange: {
          400: '#ff9a52',
          500: '#ff7c2d',
          600: '#ff6614',
        }
      },
    },
  },
  plugins: [],
}
