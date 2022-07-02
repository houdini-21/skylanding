/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        space1: "url('./images/container01.jpg')",
        space2: "url('./images/container02.jpg')",
        space3: "url('./images/container03.jpg')",
        space4: "url('./images/container08.jpg')",
        space5: "url('./images/container05.jpg')",
        space6: "url('./images/container09.jpg')",
      },
      fontFamily: {
        'lato': ['"Lato"'],
      }
    },
  },
  plugins: [],
};
