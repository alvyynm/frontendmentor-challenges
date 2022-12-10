/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        "light-text": "hsl(200, 15%, 8%)",
        "light-background": "hsl(0, 0%, 98%)",
        "light-input": "hsl(0, 0%, 52%)",
        "dark-background": "hsl(207, 26%, 17%)",
        "dark-text": "hsl(0, 0%, 100%)",
        "dark-elements": "hsl(209, 23%, 22%)",
        "light-elements": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
