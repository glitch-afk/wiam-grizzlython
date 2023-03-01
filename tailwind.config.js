/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1780px",
      "4xl": "2160px", // only need to control product grid mode in ultra 4k device
    },
    extend: {
      colors: {
        dark: {
          50: "#CED0D3",
          100: "#A7ABB4",
          200: "#464C57",
          300: "#2B303B",
          400: "#22262F",
          500: "#15181E",
          600: "#111318",
          700: "#0D0E12",
        },
      },
      maxWidth: {
        "8xl": "88rem",
      },
      boxShadow: {
        main: "0px 6px 18px rgba(0, 0, 0, 0.04)",
        light: "0px 4px 4px rgba(0, 0, 0, 0.08)",
        large: "0px 8px 16px rgba(17, 24, 39, 0.1)",
        card: "0px 2px 6px rgba(0, 0, 0, 0.06)",
        transaction: "0px 8px 16px rgba(17, 24, 39, 0.06)",
        expand: "0px 0px 50px rgba(17, 24, 39, 0.2)",
        button:
          "0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        main: "0px 4px 8px rgba(0, 0, 0, 0.08)",
      },
      animation: {
        blink: "blink 1.4s infinite both;",
        "move-up": "moveUp 500ms infinite alternate",
        "scale-up": "scaleUp 500ms infinite alternate",
        "drip-expand": "expand 500ms ease-in forwards",
        "drip-expand-large": "expand-large 600ms ease-in forwards",
        "move-up-small": "moveUpSmall 500ms infinite alternate",
      },
      keyframes: {
        blink: {
          "0%": { opacity: 0.2 },
          "20%": { opacity: 1 },
          "100%": { opacity: 0.2 },
        },
        expand: {
          "0%": {
            opacity: 0,
            transform: "scale(1)",
          },
          "30%": {
            opacity: 1,
          },
          "80%": {
            opacity: 0.5,
          },
          "100%": {
            transform: "scale(30)",
            opacity: 0,
          },
        },
        "expand-large": {
          "0%": {
            opacity: 0,
            transform: "scale(1)",
          },
          "30%": {
            opacity: 1,
          },
          "80%": {
            opacity: 0.5,
          },
          "100%": {
            transform: "scale(96)",
            opacity: 0,
          },
        },
        moveUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-20px)" },
        },
        moveUpSmall: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-10px)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
}
