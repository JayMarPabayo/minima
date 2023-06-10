/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        yomogi: "Yomogi, cursive",
        vt323: "VT323, monospace",
        audowide: "Audowide, cursive",
      },
    },
  },
  plugins: [],
};
