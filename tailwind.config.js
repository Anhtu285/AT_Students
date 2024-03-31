/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)'
      },

      fontFamily: {
        sans: ['var(--quicksand-font)']
      }
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
}

