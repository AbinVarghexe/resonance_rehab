/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#E8E6F3',
        'secondary-color': '#6942B5',
        'primary-color': '#19083B',
        'white-color': '#FFFFFF',
        'black-color': '#000000',
        'button-main': '#DAE562',
        // Legacy colors in case they are used
        cream: '#fdfbef',
        'deep-purple': '#19083b',
        'deep-blue': '#081f5c',
        'pale-blue': '#e6ebf8',
      },
      fontFamily: {
        autumn: ['AutumnBright', 'sans-serif'],
        editorial: ['PPEditorialNew', 'serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
