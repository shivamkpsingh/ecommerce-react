module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:(theme)=>({
        'bg-img':"url('https://blogzine.webestica.com/assets/images/blog/1by1/01.jpg')",
    }) ,

    },
    height: {
      height2:'585px',
      height3:'281px',
      height4:'282px',
      height5:'60px',
      height6:'400px',
   },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
