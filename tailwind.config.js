/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  fontFamily: {
    sans: ['var(--font-geist-sans)'],
    mono: ['var(--font-geist-mono)'],
    caption: ['var(--font-caption)'],
  },
};
