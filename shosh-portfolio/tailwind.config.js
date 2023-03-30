/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { right: '0' },
          '25%': { right: '2px'},
          '50%': { right: '0' },
          '75%': { right: '-2px' },
          '100%': { right: '0'},
        },
        wiggleHalf: {
          '0%': { right: '0' },
          '25%': { right: '1px'},
          '50%': { right: '0' },
          '75%': { right: '-1px' },
          '100%': { right: '0'},
        },
      },
      animation: {
        'wiggle': 'wiggle 1s linear infinite',
        'wiggle-less': 'wiggleHalf 1s linear infinite'
      }
    },
  },
  plugins: [],
}
