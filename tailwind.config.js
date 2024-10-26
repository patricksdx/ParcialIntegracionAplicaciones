/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.ejs', // Asegúrate de incluir la ruta de tus archivos EJS
    './public/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'satisfy': ['Satisfy', 'cursive'],
      },
    },
  },
  plugins: [],
}