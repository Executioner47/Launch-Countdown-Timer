/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "--clr-Primary-Grayish-Blue": "hsl(237, 18%, 59%)",
        "--clr-Primary-Soft-Red": "hsl(345, 95%, 68%)",
        "--clr-Neutral-White": "hsl(0, 0%, 100%)",
        "--clr-Neutral-Dark-Desaturated-Blue": "hsl(236, 21%, 26%)",
        "--clr-Neutral-Very-Dark-Blue": "hsl(235, 16%, 14%)",
        "--clr-Neutral-Very-Dark-MostlyBlack-Blue": "hsl(236, 21%, 26%)",
      },
      fontFamily: {
        cfont: ["Red Hat Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
