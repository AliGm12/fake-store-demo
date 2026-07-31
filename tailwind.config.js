/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      maxWidth: {
        desktop: "1440px",
      },
      colors: {
        primary: "#1a1a1a", // replace with your actual Figma hex
        secondary: "#6b7280", // replace with your actual Figma hex
      },
    },
  },
};
