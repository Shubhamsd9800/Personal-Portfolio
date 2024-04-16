/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'custom-hover': 'rgba(0, 0, 0, 0.35) 0px -50px 22px -28px inset',
        'cus-hover':'rgb(0, 0, 0.25) 3px 3px 6px 0px inset, rgba(0, 0, 0, 0.5) -3px -3px 6px 1px inset'
      }
    },
  },
  plugins: [],
}