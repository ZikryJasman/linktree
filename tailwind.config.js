/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "class",
  theme: {
    screens: {
      // 'tablet': '640px',
      // // => @media (min-width: 640px) { ... }

      // 'laptop': '1024px',
      // // => @media (min-width: 1024px) { ... }

      // 'desktop': '1280px',
      // // => @media (min-width: 1280px) { ... }
    },

    extend: {
      colors: {
        // dim: {
        //   50: "#5F99F7",
        //   100: "#5F99F7",
        //   200: "#38444d",
        //   300: "#202e3a",
        //   400: "#253341",
        //   500: "#5F99F7",
        //   600: "#5F99F7",
        //   700: "#192734",
        //   800: "#162d40",
        //   900: "#15202b",
        // },
      },
    },
  },
  plugins: [],
};
