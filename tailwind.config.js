module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    animation: {
      spin: "spin 1s linear infinite"
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
