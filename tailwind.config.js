/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors:{
     white:"hsl(var(--white))",
     lightGrey:"hsl(var(--light-gray))",
     grayishBlue:"hsl(var(--grayish-blue))",
     darkBlue:"hsl(var(--dark-blue))"
  },
    extend: {
      fontFamily:{
        outfit:"'Outfit'"
      }
    },
  },
  plugins: [],
}

