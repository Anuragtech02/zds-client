import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { fetchCms } from '$lib/utils/functions.js';

export const load: PageLoad = async ({ params, fetch }) => {
	const { slug } = params;
	const urlParams = new URLSearchParams();
	const populate = [
		'categories',
		'Video_Thumbnail',
		'Video_Thumbnail_File.Image',
		'Video_Thumbnail_File.mobileImage',
		'bgImage',
		'Bg_Image_File.Image',
		'Bg_Image_File.mobileImage',
		'Description',
		'seo',
		'seo.metaSocial.image',
		'seo.extraScripts',
		'seo.metaImage'
	];
	urlParams.append('filters[slug][$eq]', slug);
	populate.forEach((item, index) => {
		urlParams.append(`populate[${index}]`, item);
	});
	// console.log('Search', urlParams.toString());
	const data = await fetchCms('works', urlParams.toString(), fetch);
	const item = Array.isArray(data) ? data[0] : data;
	if (!item) {
		throw error(404, 'Not found');
	}
	return item;
};
