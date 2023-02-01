/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  
  theme: {
    extend: {
      colors:{
        'mainColor':"rgba(255,0,0,.8)",
        'linkColor':"#00d1f6",
        'transparent':"transparent",
        'bodyBG': "#F5F5F5",
        
      },
      boxShadow:{
        'blogShadow':'box-shadow: 0 2px 73px 0 rgba(0,0,0, 1)'
      },
      fontFamily: {
        'press-start': ['Playfair Display', 'serif'],
      },
      keyframes: {
        Portfolio: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        Portfolio: 'Portfolio 30s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
