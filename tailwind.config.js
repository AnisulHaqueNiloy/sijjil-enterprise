/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B2545',
          dark: '#07182c',
          light: '#133966',
          50: '#f0f5fa',
          100: '#dce7f3',
          200: '#bdd3e8',
          800: '#0e2d53',
          900: '#0B2545',
          950: '#06162a',
        },
        accent: {
          DEFAULT: '#E0A526',
          hover: '#c8921e',
          light: '#f5c358',
          50: '#fef9ec',
          100: '#fcf0cf',
          500: '#E0A526',
          600: '#c8921e',
          700: '#9d6d13',
        },
        slate: {
          DEFAULT: '#1F2937',
          text: '#1F2937',
          muted: '#4B5563',
          subtle: '#6B7280',
          border: '#E5E7EB',
        },
        lightgrey: {
          DEFAULT: '#F4F6F8',
          alt: '#EAEFF4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'brand': '10px',
        'brand-lg': '12px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(11, 37, 69, 0.06)',
        'soft-lg': '0 10px 30px -4px rgba(11, 37, 69, 0.1)',
        'soft-xl': '0 20px 40px -6px rgba(11, 37, 69, 0.14)',
        'gold': '0 4px 20px -2px rgba(224, 165, 38, 0.25)',
      },
    },
  },
  plugins: [],
}
