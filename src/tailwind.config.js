// tailwind.config.js
module.exports = {
  // 1. Tell Tailwind where to look for class names
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",   // your source files
    "./public/index.html",
  ],

  // 2. Extend the default theme (colors, spacing, etc.)
  theme: {
    extend: {
      colors: {
        primary: "#1e90ff",          // a nice blue
        secondary: "#ff4500",       // orange‑red
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  // 3. Add any plugins you need
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
}
