import type { PageLoad } from './$types';
import { fetchData } from '$lib/utils/functions.js';

export const load: PageLoad = async ({ params, fetch }) => {
	const { slug } = params;
	const urlParams = new URLSearchParams();
	urlParams.append(`filters[slug][$eq]`, slug);
	urlParams.append(`populate[0]`, 'category');
	urlParams.append(`populate[1]`, 'thumbnail');
	urlParams.append(`populate[2]`, 'Description');

	// console.log('Search', urlParams.toString());
	let data = await fetchData('blogs', urlParams.toString(), fetch);
	console.log('Blog Data', data);
	if (Array.isArray(data)) {
		return data[0];
	} else {
		return data;
	}
};
