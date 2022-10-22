/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.tsx",
    "./src/pages-main/**/*.tsx",
    "./src/components/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        amatic: "Amatic SC",
      },
    },
  },
  plugins: [],
};
