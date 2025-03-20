/** @type {import('tailwindcss').Config} */

export default {
  content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
      extend: {
          fontFamily: {
              heading: ['DM Serif Display', 'serif'],
              subheading: ['the-seasons', 'serif'],
              'body-text': ['Lexend', 'sans-serif'],
          },
          screens: {
              mb: { max: '512px' },
              sm: { max: '768px' },
          },
          colors: {
              white: "#ffffff",
              yellow: "#fdb515",
              gold: "#FDB515",
              'dark-blue': "#003262",
              'light-blue': "#3B7EA1",
              'notwhitewhite': '#E5E7EB',
              'border-gray': '#374151',
          },
          backgroundColor: {
              white: "#ffffff",
              'dark-blue': "#003262",
          },
          textColor: {
              primary: "#000000",
          },
          borderRadius: {
              box: "0.5rem",
          },
          boxShadow: {
              card: '0 10px 29px 0 rgba(68, 88, 144, 0.1)',
              'card-hover': '0 10px 36px 0 rgba(68, 88, 144, 0.3)',
          },
          dropShadow: {
              'default': '0 1.2px 1.2px rgba(0,0,0,0.8)'
          },
          borderRadius: {
              'none': '0',
              'sm': '0.125rem',
              DEFAULT: '0.25rem',
              DEFAULT: '4px',
              'md': '0.375rem',
              'lg': '0.5rem',
              'full': '9999px',
              'large': '12px',
              'large-custom': '80px',
          },
          lineHeight: {
              'extra-loose': '2.6',
              'more-loose': '2.3',
          },
       
      },
  },
  plugins: [],
}