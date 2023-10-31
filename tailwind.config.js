/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#1E1F22',
        secondary:'#2B2D31' 
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [    function ({ addUtilities }) {
    const newUtilities = {
      /* Hide scrollbar for Chrome, Safari and Opera */
      '.scrollbar-hide': {
        '&::-webkit-scrollbar': {
          display: 'none',
        }
      },
      /* Hide scrollbar for Firefox */
      '.scrollbar-width-none': {
        scrollbarWidth: 'none',
      },
    }

    addUtilities(newUtilities, ['responsive', 'hover']);
  },
],
}

