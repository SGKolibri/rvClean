/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {
      colors: {
        'black': '#000',
        'whatsapp': '#25d366',
      },
      colorScheme: {
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'BlurryGradient': "url('/src/assets/blurry-gradient.svg')", // Ensure this path is correct
      }
    },
  },
  plugins: [],
}