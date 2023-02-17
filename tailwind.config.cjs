const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        brand: {
          50: "#CED0D3",
          100: "#A7ABB4",
          200: "#464C57",
          300: "#2B303B",
          400: "#22262F",
          500: "#15181E",
          600: "#111318",
          700: "#0D0E12"
        },
      },
      maxWidth: {
        "8xl": "88rem",
      },
      animation: {
        blink: 'blink 1.4s infinite both;',
        'move-up': 'moveUp 500ms infinite alternate',
        'scale-up': 'scaleUp 500ms infinite alternate',
        'drip-expand': 'expand 500ms ease-in forwards',
        'drip-expand-large': 'expand-large 600ms ease-in forwards',
        'move-up-small': 'moveUpSmall 500ms infinite alternate',
      },
      keyframes: {
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100%': { opacity: 0.2 },
        },
        expand: {
          '0%': {
            opacity: 0,
            transform: 'scale(1)',
          },
          '30%': {
            opacity: 1,
          },
          '80%': {
            opacity: 0.5,
          },
          '100%': {
            transform: 'scale(30)',
            opacity: 0,
          },
        },
        'expand-large': {
          '0%': {
            opacity: 0,
            transform: 'scale(1)',
          },
          '30%': {
            opacity: 1,
          },
          '80%': {
            opacity: 0.5,
          },
          '100%': {
            transform: 'scale(96)',
            opacity: 0,
          },
        },
        moveUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-20px)' },
        },
        moveUpSmall: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-10px)' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
