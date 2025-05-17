import { fetchData } from '$lib/utils/functions.js';
// import { PageLoad } from './$types';

export const load = async ({ params, fetch }) => {
	// console.log('Search', urlParams.toString());

	const urlParams = new URLSearchParams();
	const populate = ['description', 'seo.metaSocial.image', 'seo.extraScripts', 'seo.metaImage'];

	populate.forEach((item, index) => {
		urlParams.append(`populate[${index}]`, item);
	});

	const data = await fetchData('anamorphic-wireframe-page', urlParams.toString(), fetch);
	return data;
};
