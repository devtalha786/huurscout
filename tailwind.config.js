/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-gilory)'],
      mono: ['var(--font-gilory)'],
    },
    extend: {
      colors: {
        golden: '#CD9646',
        darkBlue: '#1D2B39',
        gray: 'rgba(29, 43, 57, 0.50)',
        lightGrey: '#F9F9F9',
        placeHolder: '#1D2B3966',
        borderColor: '#ECECEC ',
        lightText: '#A0A0A0',
        lightWhite: '#FFFFFF66',
        grayBorder: '#E8E9EC',
        lightBlue: 'linear-gradient(0deg, rgba(29, 43, 57, 0.39), rgba(29, 43, 57, 0.39))',
        grey: '#1D2B3933',
        greyText: '#1D2B3980',
        darkGray: '#1D2B3999',
        lightGolder: '#CD964612',
      },
    },
    fontSize: {
      '2xs': '13px',
      xss: '14px',
      xxs: '16px',
      xs: '20px',
      sm: '25px',
      md: '30px',
      base: '35px',
      lg: '45px',
      xl: '55px',
      '2xl': '1.5rem',
      // Add more custom font sizes here
    },
  },
  plugins: [],
};
