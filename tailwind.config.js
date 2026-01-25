const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          shade: 'var(--color-primary-shade)',
          DEFAULT: 'var(--color-primary)',
          tint: 'var(--color-primary-tint)',
          light: 'var(--color-primary-light)'
        },
        secondary: {
          shade: 'var(--color-secondary-shade)',
          DEFAULT: 'var(--color-secondary)',
          tint: 'var(--color-secondary-tint)',
          light: 'var(--color-secondary-light)',
          text: 'var(--color-secondary-text)'
        },
        dark: {
          black: 'var(--color-dark-black)',
          shade: 'var(--color-dark-shade)',
          DEFAULT: 'var(--color-dark)',
          tint: 'var(--color-dark-tint)',
          light: 'var(--color-dark-light)'
        }
      },
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
        cursive: ['Adinda Melia'],
        mono: [...defaultTheme.fontFamily.mono]
      },
      fontSize: {
        '8xl': '6rem'
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem'
      }
    }
  },
  plugins: []
};
