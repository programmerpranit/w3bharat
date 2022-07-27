/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        w3voilet: '#1B1325',
        inpvoilet: '#3A2D49',
        w3yellow: '#FBAC30',
        bootcamp: '#3A304E'      
      },
    },
  },
  plugins: [],
};
