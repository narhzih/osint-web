/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: {
        "osint-light-purple": "#7C72D9",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("not-last", "&:not(:last-child)");
    }),
  ],
};
