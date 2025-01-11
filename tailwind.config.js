/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        expand: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(2)" },
        },
      },
      animation: {
        expand: "expand 1s ease-in-out 1 forwards 4s",
      },
    },
  },

  plugins: [],
};
