/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #64ACE2 0%, #B7E6FE 47%, #FFFFFF 100%)',
        'custom-gradient-Two': 'linear-gradient(90deg, #FFFFFF 0%, #B7E6FE 47%, #64ACE2 100%)',
      },
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        customBlue: '#000E29',
        // textColor: '#00abff',
        textColor: '#2CA2FB',
        planColor: '#004453',
      },
    },
  },
  plugins: [],
}