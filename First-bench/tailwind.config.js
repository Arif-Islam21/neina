import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondColor: "#5A5FBC",
        thirdColor: "#059794",
      },
    },
  },
  plugins: [daisyui],
};
