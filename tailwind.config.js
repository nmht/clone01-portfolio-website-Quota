/** @type {import('tailwindcss').Config} */

/* eslint-disable */

module.exports = {
	content: ["./*.html"],
	theme: {
		extend: {
			spacing: {
				big: "48rem",
			},
		},
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		fontFamily: {
			nunito: ["Nunito"],
		},
	},
	plugins: [],
};

/* eslint-enable */
