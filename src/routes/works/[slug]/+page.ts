import type { PageLoad } from './$types';
import { fetchData } from '$lib/utils/functions.js';

export const load: PageLoad = async ({ params, fetch }) => {
	const { slug } = params;
	const urlParams = new URLSearchParams();
	urlParams.append(`slug`, slug);
	// console.log('Search', urlParams.toString());
	const data = await fetchData('works', urlParams.toString(), fetch);
	if (Array.isArray(data)) {
		return data[0];
	} else {
		return data;
	}
};
