/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace']
      },
      colors: {
        background: '#FAFAF8',
        card: {
          background: '#F5F5F5'
        },
        text: {
          headings: '#252525',
          paragraph: '#333333'
        }
      }
    }
  },
  plugins: []
};
