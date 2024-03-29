/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FAFAFA',
        base: {
          card: '#F3F2F2',
          input: '#EDEDED',
          button: '#E6E6E5',
          hover: '#D7D5D5',
          label: '#8D8686',
          text: '#574F4D',
          subtitle: '#403937',
          title: '#272221',
        },
        purple: {
          light: '#EBE5F9',
          default: '#8047F8',
          dark: '#4B2995',
        },
        yellow: {
          light: '#F1E9C9',
          default: '#DBAC2C',
          dark: '#C47F17',
        },
      },
      fontFamily: {
        baloo: '"Baloo 2", sans-serif',
        roboto: 'Roboto, sans-serif',
      },
      fontSize: {
        xs: '0.625rem', // 10px
        sm: '0.75rem', // 12px
        md: '0.875rem', // 14px
        lg: '1rem', // 16px
        xl: '1.125rem', // 18px
        '2xl': '1.25rem', // 20px
        '3xl': '1.5rem', // 24px
        '4xl': '2rem', // 32px
        '5xl': '3rem', // 48px
      },
      lineHeight: {
        default: '130%',
        big: '160%',
      },
      borderRadius: {
        card: '0.375rem 2.25rem', // 6px 36px
        'card-big': '0.375rem 2.5rem', // 6px 40px
      },
      backgroundImage: {
        gradient: 'linear-gradient(120deg, #DBAC2C 0%, #8047F8 100%)',
      },
    },
  },
  plugins: [],
}
