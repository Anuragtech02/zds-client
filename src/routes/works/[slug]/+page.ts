import type { PageLoad } from './$types';
import { fetchData } from '$lib/utils/functions.js';

export const load: PageLoad = async ({ params, fetch }) => {
	const { slug } = params;
	const urlParams = new URLSearchParams();
	urlParams.append(`filters[slug][$eq]`, slug);
	urlParams.append(`populate[0]`, 'category');
	urlParams.append(`populate[1]`, 'Video_Thumbnail');
	urlParams.append(`populate[2]`, 'bgImage');
	urlParams.append(`populate[3]`, 'Description');
	urlParams.append(`populate[4]`, 'seo');
	urlParams.append(`populate[5]`, 'seo.metaSocial.image');
	urlParams.append(`populate[6]`, 'seo.extraScripts');
	urlParams.append(`populate[7]`, 'seo.metaImage');

	// console.log('Search', urlParams.toString());
	let data = await fetchData('works', urlParams.toString(), fetch);
	if (Array.isArray(data)) {
		return data[0];
	} else {
		return data;
	}
};
