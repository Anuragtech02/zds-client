import { error } from '@sveltejs/kit';

export function isValidEmail(email: string) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

export function isValidPhone(phone: string) {
	const phoneRegex = /^\d{10}$/;
	return phoneRegex.test(phone);
}

export function breakSentence(sentence: string) {
	const words = sentence.split(',');
	const lastWord = words[1];
	words.pop();
	const initialWords = words[0];
	return {
		initialWords,
		lastWord
	};
}

export const getImageUrl = (
	image: any,
	size: 'thumbnail' | 'small' | 'medium' | 'large' | 'original' = 'original'
) => {
	// console.log('Came here', { image });
	const host = import.meta.env.VITE_API_URI;
	if (image) {
		switch (size) {
			case 'original':
				return image?.data?.attributes?.url;
			case 'thumbnail':
				return image?.data?.attributes?.formats?.thumbnail?.url;
			case 'small':
				return image?.data?.attributes?.formats?.small?.url;
			case 'medium':
				return image?.data?.attributes?.formats?.medium?.url;
			case 'large':
				return image?.data?.attributes?.formats?.large?.url;
			default:
				return image?.data?.attributes?.url;
		}
	}
	return '';
};

const CMS_ATTEMPTS = 2;
const CMS_RETRY_DELAY_MS = 300;
const CMS_TIMEOUT_MS = 10_000;

/**
 * Fetch from the Strapi CMS and return its `data` (`data.attributes` for single types).
 *
 * Tells "the CMS failed" apart from "the CMS has no such entry", because the two must
 * reach crawlers differently:
 *  - a JSON 2xx returns its data, which may be empty (an unknown slug) — callers turn
 *    that into a 404. A CMS 404 is likewise "no such entry" and returns null.
 *  - anything else — a 5xx, a non-JSON body such as a Cloudflare challenge page, a
 *    timeout — is retried once, then throws a 503 so crawlers treat it as temporary
 *    instead of indexing an error page or dropping a real page as a 404.
 *
 * No custom headers are set here: SvelteKit hashes request headers to match the
 * server-rendered response during hydration. The User-Agent is added server-side in
 * `handleFetch` (src/hooks.server.ts).
 */
export const fetchCms = async (url: string, populate: string, fetch: typeof globalThis.fetch) => {
	const target = import.meta.env.VITE_API_URI + '/' + url + '?' + populate;
	let problem = '';
	for (let attempt = 1; attempt <= CMS_ATTEMPTS; attempt++) {
		const controller = new AbortController();
		const timer = setTimeout(() => controller.abort(), CMS_TIMEOUT_MS);
		try {
			const res = await fetch(target, { signal: controller.signal });
			const type = res.headers.get('content-type') || '';
			if (res.status === 404) return null;
			if (res.ok && type.includes('application/json')) {
				const data = await res.json();
				return data?.data?.attributes || data.data;
			}
			problem = `HTTP ${res.status} (${type || 'no content type'})`;
		} catch (err: any) {
			problem = err?.name === 'AbortError' ? `timed out after ${CMS_TIMEOUT_MS}ms` : String(err);
		} finally {
			clearTimeout(timer);
		}
		if (attempt < CMS_ATTEMPTS) await new Promise((r) => setTimeout(r, CMS_RETRY_DELAY_MS));
	}
	console.error(`CMS request failed: ${url} — ${problem}`);
	throw error(503, 'Content is temporarily unavailable');
};

/** Like fetchCms, but returns null instead of throwing — for callers that render without the data. */
export const fetchData = async (url: string, populate: string, fetch: typeof globalThis.fetch) => {
	try {
		return await fetchCms(url, populate, fetch);
	} catch {
		return null;
	}
};

export const extractVideoID = (url: string) => {
	// Regular expression to match various forms of YouTube URL
	const regex = /(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
	const match = url.match(regex);

	// If a match is found, the video ID is the second group in the match array
	if (match && match[2].length == 11) {
		return match[2];
	} else {
		return null; // Return null if no valid YouTube video ID could be extracted
	}
};

export async function getAllWorks(fetch: typeof globalThis.fetch = globalThis.fetch) {
	const populate = 'populate=slug';
	return fetchCms('works', populate, fetch);
}

export async function getAllBlogs(fetch: typeof globalThis.fetch = globalThis.fetch) {
	const populate = 'populate=slug';
	return fetchCms('blogs', populate, fetch);
}

export async function getAllServices(fetch: typeof globalThis.fetch = globalThis.fetch) {
	const populate = 'populate=slug';
	return fetchCms('services', populate, fetch);
}

export async function getAllSolutions(fetch: typeof globalThis.fetch = globalThis.fetch) {
	const populate = 'populate=slug';
	return fetchCms('solutions', populate, fetch);
}

export async function getAllLocationPages(fetch: typeof globalThis.fetch = globalThis.fetch) {
	const populate = 'populate[0]=slug&populate[1]=location';
	return fetchCms('location-pages', populate, fetch);
}

export function sanitizeStructuredData(data: string) {
	return `<script type="application/ld+json">${data}</script>`;
}
