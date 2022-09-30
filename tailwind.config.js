/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'room' : "url('./img/netizensRoom.jpg')"
      },
      spacing: {
        '10px': '10px',
        '100px': '100px'
      },
      margin: {
        '100px': '100px'
      }
    },
  },
  plugins: [],
}