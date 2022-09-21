/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {},
        light: {
          background: {
            primary: '#ffffff',
            secondary: '#f2f3f2',
          },

          text: {
            primary: 'hsl(235, 10%, 15%)',
            secondary: '#a1a5b0',
          },
        },
        dark: {
          background: {
            primary: '#111315',
          },

          text: {
            primary: 'hsl(0, 0%, 100%)',
          },
        },
      },
    },
  },
  plugins: [],
};
