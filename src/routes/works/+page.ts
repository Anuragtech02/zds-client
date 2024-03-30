import type { PageLoad } from '../work/$types';
import { fetchData } from '$lib/utils/functions.js';

export const load: PageLoad = async ({ params, fetch }) => {
	// console.log('Search', urlParams.toString());

	const populateString = [
		'Work_Categories',
		'Work_Categories.Works',
		'Work_Categories.Works.Images',
		'Work_Categories.Works.Video',
		'Work_Categories.Works.Video_Thumbnail',
		'Work_Categories.Works.Video_Thumbnail_File.Image',
		'Work_Categories.Works.Video_Thumbnail_File.mobileImage',
		'bgImage',
		'Bg_Image_File.Image',
		'Bg_Image_File.mobileImage',
		'seo',
		'seo.metaSocial.image',
		'seo.extraScripts',
		'seo.metaImage'
	];
	const searchParams = new URLSearchParams();
	populateString.forEach((item, index) => {
		searchParams.append(`populate[${index}]`, item);
	});
	const data = await fetchData('work-page', searchParams.toString(), fetch);
	return data;
};
