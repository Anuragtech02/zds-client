import type { Handle, HandleFetch } from '@sveltejs/kit';

// fetchCms checks a response's content-type to tell CMS data from an HTML error or
// challenge page. During SSR, SvelteKit only lets load functions read headers listed
// here (they are serialized into the page for hydration); reading any other throws.
export const handle: Handle = ({ event, resolve }) =>
	resolve(event, { filterSerializedResponseHeaders: (name) => name === 'content-type' });

// Server-side CMS calls run on Cloudflare Pages, which sends them with no User-Agent
// from a Cloudflare IP. Cloudflare's bot protection on the CMS hostname challenged
// exactly those requests, so pages rendered with a challenge page instead of data and
// crawlers got a 500. Identifying the site makes these calls recognisable.
//
// Set here rather than in fetchCms: a header added in a load function is part of the
// key SvelteKit uses to reuse the server-rendered response during hydration, and the
// browser cannot send this header without a CORS preflight.
const USER_AGENT = 'ZeroDesignStudio-Web/1.0 (+https://www.zerodesignstudios.com)';

const cmsOrigin = (() => {
	try {
		return new URL(import.meta.env.VITE_API_URI).origin;
	} catch {
		return null;
	}
})();

export const handleFetch: HandleFetch = async ({ request, fetch }) => {
	if (cmsOrigin && new URL(request.url).origin === cmsOrigin) {
		const headers = new Headers(request.headers);
		headers.set('user-agent', USER_AGENT);
		request = new Request(request, { headers });
	}
	return fetch(request);
};
