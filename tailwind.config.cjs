/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				screnni: '1612px'
			},
			colors: {
				"primary-dark-background": "#080E29",
				"primary-dark-intense": "#02012C",
				"secondary-light": "#8893F3",
				"logo-gray": "#DADFF7",
				"golden": "#CCA56A",
				"black-background": "#3c3c3c",
			},
			spacing: {
				"25": "100px",
				"88": "22rem",
				"112": "28rem",
				"128": "32rem",
				"144": "36rem",
				"160": "40rem",
				"176": "44rem",
				"192": "48rem",
				"208": "52rem",
				"224": "56rem",
				"228": "57rem",
				"232": "58rem",
				"240": "60rem",
				"256": "64rem",
			},
			fontFamily: {
                'montserrat': ['Montserrat'],
                'lato': ['Lato'],
                'garamond': ['Garamond']
            },
			backgroundImage:{
				'background-triangle': "url('/public/images/triback.png')",
			},
			boxShadow: {
				"cards": "4px 5px 10px -7px rgba(0,0,0,0.75)",
				'custom': '0 0 1.6rem #8893F3',
				'filosofy-card': '10px 10px 1px -4px rgba(0,0,0,0.75)',
			},
			animation: {
				widther: 'expandWidth 1.5s',
				appear: 'appear 1.5s',
				toast: 'toast .5s',
				appearTitle: 'appearTitle 1.5s',
				carousel: 'carouselInfinite 30s infinite linear'
			},
			keyframes: {
				'appear': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30%)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
				},
				'toast': {
					'0%': {
						opacity: '0',
						transform: 'translateY(110%)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
				},
				'appearTitle': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					},
				},
				'expandWidth': {
					'0%': { width: '0' },
					'100%': { width: '50%' },
				},
				'carouselInfinite': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0%)' },
				  },
			}
	}
}
};
