/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        blob: "spin 7s infinite",
        plug: "ping 7s infinite",
      },
      colors: {
        "dark-blue": '#001561',
      }
    },
  },
  plugins: [],
}