/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/_components/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        caption: ['var(--font-caption)'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
