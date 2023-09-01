import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      colors: {
        primary: {
          50: '#e6f4e1',
          100: '#cce9c3',
          200: '#b3dfa4',
          300: '#99d586',
          400: '#80cc67',
          500: '#66c249',
          600: '#4db82b',
          700: '#008000', // The original color
          800: '#006400',
          900: '#004800',
          950: '#002c00',
        },
        'primary-light':'#48AC48'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
