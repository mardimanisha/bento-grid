/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "Purple-100": "hsl(254, 88%, 90%)",
        "Purple-500": "hsl(256, 67%, 59%)",
        "Yellow-100": "hsl(31, 66%, 93%)",
        "Yellow-500": "hsl(39, 100%, 71%)",
        White: "hsl(0, 0%, 100%)",
        Black: "hsl(0, 0%, 7%)",
      },
    },
  },
  plugins: [],
};
