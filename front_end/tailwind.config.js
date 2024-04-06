/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

module.exports = {
  content: ["./src/**/*.{html,js,jsx}", flowbite.content(),],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(),],
}

