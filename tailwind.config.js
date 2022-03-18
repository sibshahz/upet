module.exports = {
  content: [
    './sections/**/*.{liquid,html,js}',
    './snippets/**/*.{liquid,html,js}',
    './layout/**/*.{liquid,html,js}'
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 960px) { ... }

      'lg': '992px',
      // => @media (min-width: 1440px) { ... }
      'xl' : '1280px',
    },
    extend: {
      
    },
  },
  plugins: [],
}
