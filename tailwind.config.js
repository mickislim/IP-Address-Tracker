/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "custom": "Rubik,san-serif"
      },
      screens:{
        "lg":"1440px",
        "sm":"375px"
      },
      colors:{
"veryDarkGray":"hsl(0, 0%, 17%)",
"darkGray":"hsl(0, 0%, 59%)"
      }
    },
  },
  plugins: [],
}

