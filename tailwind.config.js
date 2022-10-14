/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        blue: '#063970',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        'gray-dark': '#273444',
        lightBlue: '#e6ebf1',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      width: {
        128: '32rem',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        center: true,
      },
      minHeight: {
        '1/2': '50%',
      },
    },
  },
  plugins: [],
}
