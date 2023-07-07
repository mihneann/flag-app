/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'navLight': 'hsl(0, 0%, 100%)',
        'bgLight': 'hsl(0, 0%, 98%)',
        'navDark': 'hsl(209, 23%, 22%)',
        'bgDark': 'hsl(207, 26%, 17%)'
      },

      fontFamily: {
        'nurito': '"Nunito Sans", sans-serif'
      },

      screens: {
        'phone': '500px'
      },

      colors: {
        'grey': 'hsl(200, 15%, 8%)'
      }
    },
  },
  plugins: [],
}

