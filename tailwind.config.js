module.exports = {
  content: ["./*.html", "./src/**/*.css", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      display: ["Space Grotesk", "sans-serif"],
      body: ["Space Grotesk", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
