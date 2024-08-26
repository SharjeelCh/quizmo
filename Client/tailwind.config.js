/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-blue": "#0275d8",
        "app-bg": "#1c435b",
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
        "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
      },
      textColor: {
        "app-bg": "#1c435b",
        pinkish: "#8b2188",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      colors: {
        glass: "rgba(255, 255, 255, 0.1)",
      },
      borderColor: {
        glass: "rgba(255, 255, 255, 0.3)",
      },
      fontSize: {
        "2xs": ".625rem",
      },
      animation: {
        "slide-from-left": "slideFromLeft 1s ease-in-out",
        "slide-from-right": "slideFromRight 1s ease-in-out",
      },
      keyframes: {
        slideFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
