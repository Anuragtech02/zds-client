// Cloudflare Pages: use the dedicated Cloudflare adapter instead of auto.
import adapter from '@sveltejs/adapter-cloudflare';
// import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Using Cloudflare adapter so build output is compatible with Cloudflare Pages (Functions + static assets)
		adapter: adapter({})
	}
};

export default config;
