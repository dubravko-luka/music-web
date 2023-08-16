/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    screens: {
      spsm: '410px',
      ssm: '480px',
      sm: '640px',
      md: '768px',
      slg: '992px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
      xxxl: '1600px',
    },
    extend: {
      colors: {
        208: "rgb(30 159 208)",
        main: 'rgba(255, 255, 255,.9)',
        bd: {
          255: 'rgba(255, 255, 255, .08)'
        }
      },
      flex: {
        '3': '0 0 33.33%;'
      },
      padding: {
        nav: '70px',
      },
      translate: {
        nav: '70px'
      },
      minHeight: {
        nav: 'calc(100% - 70px)'
      },
      zIndex: {
        "-1": "-1",
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        100: 100,
        101: 101,
        102: 102,
        103: 103,
        900: 900,
        999: 999,
        9999: 9999,
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}