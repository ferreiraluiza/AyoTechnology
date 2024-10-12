/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        bebas: ["Bebas nue", "sans-serif"],
      },
      fontSize: {
        medio: "2.5rem",
      },
      colors: {
        "black-2": "#F4F7FC",
        "black-10": "#F8FBFF",
        "black-20": "#eff5f5",
        "black-35": "#CAD2E0",
        "black-40": "#a6b0c3",
        "black-45": "#9DA9C1",
        "black-50": "#8694B2",
        "black-60": "#717C99",
        "black-65": "#5D657F",
        "black-70": "#393E56",
        "black-75": "#2C3043",
        "black-80": "#1D2136",
        "black-85": "#15171E",
        "black-95": "#0D0E12",
        "black-100": "#040506",
        "mixer-pinker": "#995DF9",
        "purple-light": "#665BFA",
        purple: "#6301FF",
        warning: "#E03020",
      },
      maxWidth: {
        "8xl": "85rem",
      },
      dropShadow: {
        "gradient-dark": [
          "0px 0px 8px #191F9F",
          "inset 0px 0px 5px rgba(13, 12, 15, 0.6)",
          "inset 0px 0.5px 1px rgba(13, 10, 10, 0.6)",
          "inset 0px 0.5px 1px rgba(248, 251, 255, 0.24)",
        ],
        gradient: [
          "0px 0px 8px #C9C9FF",
          "inset 0px 1px 1px rgba(248, 251, 255, 0.24)",
        ],
        "input/18": "0px 8px 8px rgba(25, 25, 249, .18)",
        "input/72": "0px 8px 8px rgba(25, 25, 249, .77)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
