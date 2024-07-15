import adapter from '@sveltejs/adapter-auto';
import { sveltePreprocess } from 'svelte-preprocess';

const config = {
	preprocess: sveltePreprocess({
		scss: {
			prependData: `
				//@use "src/styles/_functions.scss";
				//@use '@unsass/breakpoint';
			`
		}
	}),

	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/lib/components',
			$assets: 'src/assets'
		}
	}
};

export default config;
