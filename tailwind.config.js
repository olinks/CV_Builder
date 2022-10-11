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
        '15px': '15px',
        '20px': '20px',
        '100px': '100px'
      },
      margin: {
        '100px': '100px',
        '50px' : '50px'
      },
      color: {
        gray: {
          100 : '#E0E6E9',
          500 : '#ABBBC2',
          700 : '#393C49',
          900 : '#1F1D2B',
          800 : '#252836'
        }
      }
    },
  },
  plugins: [],
}