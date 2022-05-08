module.exports = {
	content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				lightpurple: "#F4EBFF",
				darkblue: "#084B83",
				medblue: "#42BFDD",
				lightblue: "#A0EDFF",
				medgreen: "#61D095",
				lightgreen: "#D5FFD5",
				crimson: "#D7263D",
				lightyellow: "#FEFFCF",
				lightred: "#FFD7D7",
			},
			fontFamily: {
				"anek-odia": ["Anek Odia", "sans-serif"],
			},
		},
	},
	plugins: [],
};
