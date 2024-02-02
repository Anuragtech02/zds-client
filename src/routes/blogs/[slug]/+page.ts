import type { PageLoad } from './$types';
import { fetchData } from '$lib/utils/functions.js';

export const load: PageLoad = async ({ params, fetch }) => {
	const { slug } = params;
	const urlParams = new URLSearchParams();
	urlParams.append(`filters[slug][$eq]`, slug);
	urlParams.append(`populate[0]`, 'category');
	urlParams.append(`populate[1]`, 'thumbnail');
	urlParams.append(`populate[2]`, 'Description');
	urlParams.append(`populate[3]`, 'bgImage');
	urlParams.append(`populate[4]`, 'seo');
	urlParams.append(`populate[5]`, 'seo.metaSocial.image');
	urlParams.append(`populate[6]`, 'seo.extraScripts');
	urlParams.append(`populate[7]`, 'seo.metaImage');

	// console.log('Search', urlParams.toString());
	const data = await fetchData('blogs', urlParams.toString(), fetch);
	console.log('Blog Data', data);
	if (Array.isArray(data)) {
		return data[0];
	} else {
		return data;
	}
};
