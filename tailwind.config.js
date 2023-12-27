/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        porto: ['Prosto One', 'sans-serif'],
        MontserratSmall: ['Montserrat', 'sans-serif'],
        MontserratMedium: ['Montserrat', 'sans-serif'],
        MontserratSemiBold: ['Montserrat', 'sans-serif'],
      },
      height: {
        '455': '455px',
        '381': '381px',
        '240': '240px',
        '56': '56px',
        '282': '282px',
        '290': '290px',
        '322': '322px',
        '104': '104px',
        '75': '75px',
        '24': '24px',
        '1': '1px',
      },
      width: {
        '552': '552px',
        '456': '456px',
        '392': '392px',
        '250': '250px',
        '289': '289px',
        '145': '145px',
        '129': '129px',
        '312': '312px',
        '286': '286px',
        '360': '360px',
        '455': '455px',
        '264': '264px',
        '225': '225px',
      },
      fontSize: {
        '15': '0.15px',
        '5': '0.5px',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
