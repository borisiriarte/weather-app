/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2a2e35",
        secondary: "#C89243",
        cHover: "#131518",
        cActive: "#070809",
      },
      fontFamily: {
        sansation: ["Sansation", "sans-serif"],
        roboto_condensed: ['"Roboto Condensed"', "sans-serif"],
        roboto: ['"Roboto"', "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
