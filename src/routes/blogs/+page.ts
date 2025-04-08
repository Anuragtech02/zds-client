import type { PageLoad } from '../work/$types';
import { fetchData } from '$lib/utils/functions.js';

export const load: PageLoad = async ({ params, fetch }) => {
	// console.log('Search', urlParams.toString());

	const urlParams = new URLSearchParams();
	const populate = [
		'Work_Categories',
		'Work_Categories.blogs',
		'Work_Categories.thumbnail',
		'bgImage',
		'Bg_Image_File.Image',
		'Bg_Image_File.mobileImage',
		'seo',
		'seo.metaSocial.image',
		'seo.extraScripts',
		'seo.metaImage',
		'Work_Categories.blogs.thumbnail'
	];

	populate.forEach((item, index) => {
		urlParams.append(`populate[${index}]`, item);
	});

	const data = await fetchData('blog-page', urlParams.toString(), fetch);
	return data;
};
