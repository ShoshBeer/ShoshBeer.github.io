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
        stretch: {
          '0%': { lineHeight: '0.4rem'},
          '25%': { lineHeight: '0.5rem'},
          '50%': { lineHeight: '0.6rem' },
          '75%': { lineHeight: '0.7rem' },
          '95%': { lineHeight: '0.3rem'},
          '100%': { lineHeight: '0.4rem'},
        }
      },
      animation: {
        'wiggle': 'wiggle 0.75s linear infinite',
        'wiggle-less': 'wiggleHalf 0.75s linear infinite',
        'pull-down': 'stretch 0.4s linear 1'
      }
    },
  },
  plugins: [],
}
