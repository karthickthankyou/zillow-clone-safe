const colors = require('tailwindcss/colors')

const template = {
  25: '98%',
  50: '96%',
  100: '92%',
  200: '86%',
  300: '78%',
  400: '66%',
  500: '50%',
  600: '36%',
  700: '24%',
  800: '12%',
  900: '04%',
}

const colorGen = ({ saturation = '100%', hue, lightness = template }) =>
  Object.entries(lightness)
    .map(([key, item]) => ({
      [key]: `hsl(${hue}, ${saturation}, ${item})`,
    }))
    .reduce((obj, item) => Object.assign(obj, item), {})

const redPallete = colorGen({ hue: 0 })
const primaryPallete = colorGen({ hue: 215 })
const greenPallete = colorGen({ hue: 100 })
const yellowPallete = colorGen({ hue: 50 })
const grayPallete = colorGen({ hue: 215, saturation: '10%' })
console.log('redPallete', redPallete)

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    colors: {
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      primary: primaryPallete,
      red: redPallete,
      green: greenPallete,
      yellow: yellowPallete,
      gray: grayPallete,
      accent: 'hsl(215, 100%, 50%)',
    },
    extend: {
      animation: {
        'spin-reverse': 'reverse-spin 1s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        slide: 'slide 1s ease-in-out infinite',
        'slide-left': 'slide-left 1s ease-in-out infinite',
        breathe: 'breathe 6s ease-in-out infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slide: {
          '0%': { transform: 'translateX(-25%)', opacity: 0 },
          '50%': {
            opacity: 1,
          },
          '100%': {
            transform: 'translateX(25%)',
            opacity: 0,
          },
        },
        'slide-left': {
          '0%': { transform: 'translateX(25%)', opacity: 0 },
          '50%': {
            opacity: 1,
          },
          '100%': {
            transform: 'translateX(-25%)',
            opacity: 0,
          },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.1 },
          '60%': {
            transform: 'scale(1.5)',
            opacity: 1,
          },
        },
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        custom: 'cubic-bezier(0,.84,.17,1.27)',
      },
      transitionDuration: {
        2000: '2000ms',
      },
      boxShadow: {
        'inner-l': 'inset 6px 0px 3px rgba(0, 0, 0, 0.3)',
        'inner-r': 'inset -6px 0px 3px rgba(0, 0, 0, 0.3)',
        'inner-lr':
          'inset 8px 0px 2px rgba(0, 0, 0, 0.3), inset -8px 0px 2px rgba(0, 0, 0, 0.3)',
      },
      zIndex: {
        '-50': '-50',
        '-40': '-40',
        '-30': '-30',
        '-20': '-20',
        '-10': '-10',
      },
      backgroundImage: {
        hero: "url('https://res.cloudinary.com/thankyou/image/upload/b_black,o_80/v1640667691/nike/rowan-heuvel-bjej8BY1JYQ-unsplash_ekhbh0.jpg')",
        hloan:
          "url('https://res.cloudinary.com/thankyou/image/upload/c_fit,q_auto:eco/a_0/v1640717751/nike/misc/surface-0WFE46jwO8o-unsplash_lk8dfy.jpg')",
        hero2:
          "url('https://res.cloudinary.com/thankyou/image/upload/v1640667691/nike/rowan-heuvel-bjej8BY1JYQ-unsplash_ekhbh0.jpg')",
      },

      spacing: {
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
        176: '44rem',
        192: '48rem',
        208: '52rem',
        '90p': '90%',
      },
      height: {
        screen50: '50vh',
        screen80: '80vh',
        screen90: '90vh',
      },
      lineHeight: {
        '80p': '80%',
        '90p': '90%',
      },
      fontFamily: {
        display: ['Helvetica'],
      },
      outlineWidth: {
        1.5: '1.5px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
