/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors:{
        'primary':'#F7F7F9',
        'secondary': '#FFFFFF',
        'Greyish':'#EFEFF1',
        'Blackish': '#1c1c1c',
        'gray':'#ececec',
        'bluee':'#579ffb'
      },
      fontFamily: {
        'anta': ['Anta', 'sans-serif'],
        'poppins': ['poppins', 'serif'],       
      }
    },
  },
  plugins: [function({ addBase, theme }) {
    addBase({
      ':root': {
        '--color-primary': theme('colors.primary'),
        '--color-secondary': theme('colors.secondary'),
        '--color-greyish': theme('colors.Greyish'),
        '--color-blackish': theme('colors.Blackish'),
        '--color-gray': theme('colors.gray'),
        '--color-blue': theme('colors.bluee'),
      },
    });
  }],
}