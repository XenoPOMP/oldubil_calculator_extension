/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'back-primary': '#1E1C1C',
        'back-secondary': '#312F2F',
        'back-third': '#514E4E',
        'font-primary': 'white',
        'nav-active': '#32B980',
        warning: 'gray'
      }
    }
  },
  plugins: []
};
