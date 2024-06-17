/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      animation: {
        typewriter: "typewriter 4s steps(20) forwards",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
      },
    },
  },
  plugins: [],
};
