/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#101010',
      white: '#FFFFFF',
      red: "#684145",
      coffee: {
        100: '#110E0D',
        90: '#191513',
        80: '#261E1A',
      },
      cream: {
        10: '#F2EDDE',
        20: '#DED9CB',
        30: '#8A7259',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-abhaya)'],
        logo: ['var(--font-comfortaa)'],
      },
    },
    plugins: [],
  }
}