import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			edge: false,
      split: true
		})
	},
	preprocess: [
		vitePreprocess({
			postcss: true
		})
	],
	// vitePlugin: {
	// 	experimental: {
	// 		inspector: {
	// 			holdMode: true
	// 		}
	// 	}
	// }
};

export default config;
