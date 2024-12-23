/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "card-border": "#D3D3D3",
        "side-gray": "#C2C2BD",
      },
    },
  },
  plugins: [],
};
