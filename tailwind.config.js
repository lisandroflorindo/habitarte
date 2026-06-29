import animate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        habitarte: {
          50: '#F7F4F1',
          100: '#E4DBD4',
          200: '#CEC1B8',
          300: '#B7A69C',
          400: '#A18C81',
          500: '#8A7165',
          600: '#745749',
          700: '#5F463B',
          800: '#46332B',
          900: '#2D211C',
        },
        canvas: '#E4DBD4',
        mist: '#CEC1B8',
        sand: '#B7A69C',
        stone: '#A18C81',
        earth: '#8A7165',
        bark: '#745749',
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Open Sans', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 45px -28px rgba(116, 87, 73, 0.38)',
      },
      borderRadius: {
        '2xl': '1.5rem',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        drift: 'drift 9s ease-in-out infinite',
      },
    },
  },
  plugins: [animate],
}
