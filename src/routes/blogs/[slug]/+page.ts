import type { PageLoad } from './$types';
import { fetchData } from '$lib/utils/functions.js';

export const load: PageLoad = async ({ params, fetch }) => {
	const { slug } = params;
	const urlParams = new URLSearchParams();
	const populate = [
		'category',
		'thumbnail',
		'Thumbnail_File.Image',
		'Thumbnail_File.mobileImage',
		'Description',
		'bgImage',
		'Bg_Image_File.Image',
		'Bg_Image_File.mobileImage',
		'seo',
		'seo.metaSocial.image',
		'seo.extraScripts',
		'seo.metaImage'
	];
	urlParams.append(`filters[slug][$eq]`, slug);
	populate.forEach((item, index) => {
		urlParams.append(`populate[${index}]`, item);
	});

	// console.log('Search', urlParams.toString());
	const data = await fetchData('blogs', urlParams.toString(), fetch);
	if (Array.isArray(data)) {
		return data[0];
	} else {
		return data;
	}
};
