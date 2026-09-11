/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4A2810',
          50: '#FBF6F0',
          100: '#F5E8D8',
          200: '#EBD1B1',
          300: '#D9AD7E',
          400: '#C2874D',
          500: '#4A2810',
          600: '#3D200D',
          700: '#2F180A',
          800: '#211107',
          900: '#130A04',
        },
        accent: {
          DEFAULT: '#C59B27',
          50: '#FEFCF3',
          100: '#FDF6DC',
          200: '#F9E8A9',
          300: '#F2D56E',
          400: '#E8BE3A',
          500: '#C59B27',
          600: '#A47D1D',
          700: '#7D5F16',
          800: '#56410F',
          900: '#2F2308',
        },
        cream: {
          DEFAULT: '#FDFBF9',
          50: '#FFFFFF',
          100: '#FDFBF9',
          200: '#F8F4EE',
          300: '#F0E8DD',
          400: '#E6D9C8',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.8s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
