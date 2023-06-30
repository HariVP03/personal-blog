/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        background: '#FAFAF8',
        card: {
          background: '#F5F5F5'
        },
        text: {
          headings: '#252525'
        }
      }
    }
  },
  plugins: []
};
