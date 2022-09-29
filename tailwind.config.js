/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'room' : "url('./img/netizensRoom.jpg')"
      }
    },
  },
  plugins: [],
}