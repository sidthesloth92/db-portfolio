// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    options: {
      whitelist: ['bg-primary']
    }
  },
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      primary: {
        shade: 'var(--color-primary-shade)',
        default: 'var(--color-primary)',
        tint: 'var(--color-primary-tint)',
        light: 'var(--color-primary-light)'
      },
      secondary: {
        shade: 'var(--color-secondary-shade)',
        default: 'var(--color-secondary)',
        tint: 'var(--color-secondary-tint)',
        light: 'var(--color-secondary-light)'
      },
      dark: {
        shade: 'var(--color-dark-shade)',
        default: 'var(--color-dark)',
        tint: 'var(--color-dark-tint)',
        light: 'var(--color-dark-light)'
      }
    },
    fontFamily: {
      sans: ['Nunito\\ Sans', ...defaultTheme.fontFamily.sans],
      cursive: ['Adinda\\ Melia'],
      mono: [...defaultTheme.fontFamily.mono]
    },
    extend: {
      fontSize: {
        '8xl': '6rem'
      },
      height: {
        '1/2': '50%',
        '2/5': '40%',
        '3/5': '60%'
      }
    }
  },
  variants: {},
  plugins: []
};
