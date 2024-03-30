import { fetchData } from '$lib/utils/functions';

/** @type {import('./$types').PageLoad} */

export async function load({ params, fetch }: any) {
	const populate = [
		'Team_Members',
		'Image',
		'Team_Members.Image',
		'Bg_Image_File.Image',
		'Bg_Image_File.mobileImage',
		'seo',
		'seo.metaSocial.image',
		'seo.extraScripts',
		'seo.metaImage',
		'Image_File.Image'
	];

	const searchParams = new URLSearchParams();
	populate.forEach((item, index) => {
		searchParams.append(`populate[${index}]`, item);
	});

	const data = await fetchData('about-us-page', searchParams.toString(), fetch);
	return data;
}
