/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				kanit: ['Kanit', 'sans-serif'],
			},
			colors: {
				mainBlack: '#252525',
				violet: '#6C63FF',
				grey: '#F7F7F7',
			},
		},
	},
	plugins: [],
}
