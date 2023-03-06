/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				'bts-yellow': '#FACD5B',
        'bts-yellow-dark': '#F9C74F',
				'bts-black': '#252323',
				'bts-white': '#EEEEFF',
				'bts-red': '#A53860',
				'bts-green': '#61C9A8',
			},
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
