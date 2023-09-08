/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		// if are updating these variables, make sure to update the variables in the app.css file
		extend: {
			colors: {
				bg: {
					DEFAULT: '#0F0F0F',
					200: '#FFFFFF1A',
					300: '#F0F0F00D',
					400: '#1F1F1F5C',
					500: '#8D8D8D',
					600: '#3A3A3A',
					700: '#151515',
					800: '#0F0F0F'
				},
				fg: {
					DEFAULT: '#FFFFFF',
					200: '#FFFFFF',
					300: '#C0C0C0',
					400: '#707070',
					500: '3A3A3A',
					600: '#181818'
				},
				borders: {
					DEFAULT: '#ffffff',
					300: '#C0C0C0',
					400: '#1F1F1F5C',
					500: '#3A3A3A'
				},
				accent: {
					DEFAULT: '#FF439D',
					1: '#FF439D',
					2: '#2518D1'
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Merriweather', 'serif']
			}
		}
	},
	plugins: []
};
