/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffffff',
        'secondary': '#284a8c',
        'accent': '#FF6B6B',
        'background': '#F8FAFC',
        'highlight': '#F0F7FF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-slide-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-slide-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'warp-in': {
          '0%': { 
            transform: 'scale(0.3) translateY(50%)',
            opacity: '0',
            transformOrigin: 'bottom right'
          },
          '50%': {
            transform: 'scale(0.5) translateY(25%)',
            opacity: '0.5',
          },
          '100%': { 
            transform: 'scale(1) translateY(0)',
            opacity: '1',
          }
        },
        'warp-out': {
          '0%': { 
            transform: 'scale(1) translateY(0)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(0.5) translateY(25%)',
            opacity: '0.5',
          },
          '100%': { 
            transform: 'scale(0.3) translateY(50%)',
            opacity: '0',
            transformOrigin: 'bottom right'
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-delay': 'fade-in 0.6s ease-out 0.2s',
        'fade-in-slide-left': 'fade-in-slide-left 0.8s ease-out',
        'fade-in-slide-right': 'fade-in-slide-right 0.8s ease-out',
        'warp-in': 'warp-in 0.3s ease-out forwards',
        'warp-out': 'warp-out 0.3s ease-in forwards'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
