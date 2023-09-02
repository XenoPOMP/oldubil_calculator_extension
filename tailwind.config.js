/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'back-primary': '#1E1C',
        'back-secondary': '#312F',
        'back-third': '#514E',
        'font-primary': 'white',
        'nav-active': '#32B980'
      }
    }
  },
  plugins: []
};
