/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {},
    screens: {
      "xxs": "330px",
      'xs': '480px',   // 480px ve üzeri
      'sm': '640px',   // 640px ve üzeri
      'md': '768px',   // 768px ve üzeri
      "mdd": "860px",
      "lgg": "940px",   
      'lg': '1024px',  // 1024px ve üzeri
      'xl': '1100px',  // 1100px ve üzeri
      "2xl": "1220px",
      "3xl": "1310px"

    },
  },
  plugins: [],
}
