/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        textPrimary: "#00040f",
        textSecondary: "#7b7b7b",
        primary: "#00040f",
        secondary: {
          300: "#ffc7c9",
          500: "#e5989b",
        },
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontWeight: {
        fine: "500",
      },
      backgroundImage: {
        clouds: "url('/src/assets/clouds2.jpg')",
      },
    },
    screens: {
      xx: "375px",
      xs: "480px",
      ss: "620px",
      sm: "800px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
