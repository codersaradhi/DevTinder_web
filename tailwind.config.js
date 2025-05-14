/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // tailwind will check all fo these files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  // DaisyUI config goes here
  daisyui: {
    themes: ["light", "dark", "luxury"],
  },
}
