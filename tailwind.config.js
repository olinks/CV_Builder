/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
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
        '30px': '30px',
        '50px': '50px',
        '100px': '100px',
        '150px': '150px',
        '200px': '200px',
        '250px': '250px',
        '300px': '300px',
        '350px': '350px',
        '400px': '400px',
        '420px': '420px',
        '450px': '450px',
        '500px': '500px',
        '550px': '550px',
        '600px': '600px',
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
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}