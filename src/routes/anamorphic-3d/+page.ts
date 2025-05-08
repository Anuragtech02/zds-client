import type { PageLoad } from '../work/$types';
import { fetchData } from '$lib/utils/functions.js';

export const load: PageLoad = async ({ params, fetch }) => {
	// console.log('Search', urlParams.toString());

	const urlParams = new URLSearchParams();
	const populate = ['description', 'seo.metaSocial.image', 'seo.extraScripts', 'seo.metaImage'];

	populate.forEach((item, index) => {
		urlParams.append(`populate[${index}]`, item);
	});

	const data = await fetchData('anamorphic-page', urlParams.toString(), fetch);
	return data;
};
