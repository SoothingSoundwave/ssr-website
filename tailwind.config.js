// tailwind.config.js
// Path: /tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark Theme Colors
        bg: {
          primary: '#0A0E14',
          secondary: '#161B22',
          elevated: '#1F2937',
        },
        text: {
          primary: '#F9FAFB',
          secondary: '#E5E7EB',
          tertiary: '#9CA3AF',
        },
        accent: {
          purple: '#C879FF',
          pink: '#FF70A6',
          coral: '#FF9B85',
        },
        border: {
          subtle: '#374151',
          medium: '#4B5563',
        },
        hover: {
          purple: '#B066E6',
          pink: '#E65C94',
        },
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['NauticalPrestige', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
      },
      boxShadow: {
        'glow-purple': '0 0 20px rgba(200, 121, 255, 0.3)',
        'glow-pink': '0 0 20px rgba(255, 112, 166, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
        'fade-in-delayed': 'fadeIn 1s ease-in 1s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}