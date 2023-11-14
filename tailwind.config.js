/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
         'sans': ['Roboto','sans-serif']
      },
      colors: {
         'bgIcon': 'rgb(48, 47, 47)',
         'bgNotificacao': 'rgb(255, 30, 30)',
         'focusInput': 'rgb(166, 166, 255)',
         'sideBarItemHover': 'rgb(48, 47, 47)',
         'bgIconConta': 'rgb(212, 110, 2)',
         'corPonto': 'rgb(78, 78, 252)',
         'bgAssunto': 'rgb(100, 99, 99)'
      },
      dropShadow: {
       'iconShadow': '0px 0px 15px black'
      }

                 
   },
 },
  plugins: [],
}

