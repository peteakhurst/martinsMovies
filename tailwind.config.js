/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1140px',
      '2xl': '1140px',
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('./public/movie-collection.jpg')",
      },
      boxShadow: {
        'p-shadow': '0 10px 30px 0 rgba(147,82,179,.7)',
      },
    },
  },
  plugins: [],
};
