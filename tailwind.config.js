import { createThemes } from 'tw-colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    createThemes({
      dark: {
        'back-primary': '#1E1C1C',
        'back-secondary': '#312F2F',
        'back-third': '#514E4E',
        'font-primary': 'white',
        'nav-active': '#32B980',
        warning: 'gray'
      },
      light: {
        'back-primary': '#F3EFEF',
        'back-secondary': '#EBE5E5',
        'back-third': '#D7D6D6',
        'font-primary': '#000000',
        'nav-active': '#32B980',
        warning: 'black'
      }
    })
  ]
};
