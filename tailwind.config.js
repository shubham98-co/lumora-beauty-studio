/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FAF6EF',
          100: '#F4ECE0',
          200: '#E7D5BA',
          300: '#D7BB91',
          400: '#C5A26C',
          500: '#B89058', // Primary metallic gold
          600: '#9E7743',
          700: '#7F5C32',
          800: '#644728',
          900: '#4D361F',
        },
        cream: {
          50: '#FDFBF8',
          100: '#FAF7F2', // Soft background
          200: '#F4EFE6', // Light card bg
          300: '#ECE3D5',
          400: '#DFD2C0',
          500: '#CEBC9F',
        },
        obsidian: {
          950: '#0C0B0A',
          900: '#141312', // Deep dark
          850: '#1A1817',
          800: '#22201D', // Dark card
          700: '#2F2B27',
          600: '#47423D',
        },
        sand: '#E6DDD2',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.2em',
        'extrawide': '0.25em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(20, 19, 18, 0.08), 0 0 1px 1px rgba(184, 144, 88, 0.15)',
        'luxury-lg': '0 30px 60px -20px rgba(20, 19, 18, 0.12), 0 0 1px 1px rgba(184, 144, 88, 0.25)',
        'gold-glow': '0 0 35px -5px rgba(184, 144, 88, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
