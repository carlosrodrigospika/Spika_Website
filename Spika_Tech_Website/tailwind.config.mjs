/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'brand-dark': '#0a2f35',
				'brand-lime': '#a1c460',
			},
			fontFamily: {
				'exo': ['Exo2', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
} 