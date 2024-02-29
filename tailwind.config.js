/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      DarkCyan: "hsl(185, 75%, 39%)",
      VeryDarkDesaturatedBlue: "hsl(229, 23%, 23%)",
      DarkGrayishBlue: "hsl(227, 10%, 46%)",
      DarkGray: "hsl(0, 0%, 59%)",
    },
  },
  plugins: [],
};
