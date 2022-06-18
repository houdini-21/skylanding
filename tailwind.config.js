/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        space: "url('./images/bg.jpg')",
        space1: "url('./images/bg2.jpg')",
        space2: "url('./images/bg3.jpg')",
      },
      fontFamily: {
        'lato': ['"Lato"'],
      }
    },
  },
  plugins: [],
};
