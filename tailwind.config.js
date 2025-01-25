/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						"code::before": {
							content: '""',
						},
						"code::after": {
							content: '""',
						},
						// h1~h6`以外`の全てのタグにpaddingLeftを追加
						"article > :not(h1):not(h2):not(h3):not(h4):not(h5):not(h6)": {
							paddingLeft: "6rem",
						},
						h2: {
							paddingLeft: "2rem",
						},
						h3: {
							paddingLeft: "3rem",
						},
					},
				},
			},
			keyframes: {
				expand: {
					"0%": { transform: "scale(1)" },
					"100%": { transform: "scale(2)" },
				},
			},
			animation: {
				expand: "expand 1s ease-in-out 1 forwards 4s",
			},
		},
	},

	plugins: [require("@tailwindcss/typography")],
};
