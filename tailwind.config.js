/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        'appear-in-x': {
          '0%': { transform: 'translateX(-10px)', opacity: 0.1 },
          '100%': { transform: 'translate(0)', opacity: 1 }
        },
        'appear-in-y': {
          '0%': { transform: 'translateY(-10px)', opacity: 0.1 },
          '100%': { transform: 'translate(0)', opacity: 1 }
        }
      },
      animation: {
        'appear-in-x-once': 'appear-in-x 1000ms cubic-bezier(0.4, 0, 0.6, 1)',
        'appear-in-y-once': 'appear-in-y 1000ms cubic-bezier(0.4, 0, 0.6, 1)'
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
        serif: ['Roboto Slab', 'serif']
      },
      colors: {
        background: { main: '#FAFAF8' },
        card: {
          background: '#F5F5F5'
        },
        text: {
          headings: '#252525',
          paragraph: '#333333',
          code: '#333333'
        }
      }
    }
  },
  plugins: []
};
