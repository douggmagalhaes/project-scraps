/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //blue_purple_700: "#6959CD",
        blue_purple_600: "#6959CD",
        blue_purple_500: "#656ED3",
        blue_purple_400: "#836FFF",
        blue_purple_300: "#AFB3FF",
      },
    },
  },
  plugins: [],
};
