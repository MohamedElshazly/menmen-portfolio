/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			keyframes: {
				'pulse-ring': {
					'0%': { transform: 'scale(0.33)' },
					'80%, 100%': { opacity: 0 }
				}
			},
			animation: {
				'pulse-ring': 'pulse-ring  1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite'
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
	]
};
