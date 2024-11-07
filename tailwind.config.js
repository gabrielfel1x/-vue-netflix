import primeUI from 'tailwindcss-primeui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/tailwindcss-primeui/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [primeUI],
}
