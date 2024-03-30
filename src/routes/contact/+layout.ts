import { fetchData } from '$lib/utils/functions';

/** @type {import('./$types').PageLoad} */

export async function load({ params, fetch }: any) {
	const elements = [
		'Form',
		'bgImage',
		'Bg_Image_File.Image',
		'Bg_Image_File.mobileImage',
		'description',
		'Page_Description',
		'Page_Title',
		'seo',
		'seo.metaImage',
		'seo.extraScripts',
		'seo.metaSocial.image'
	];
	const populate = elements.map((el, idx) => `populate[${idx}]=${el}`).join('&');
	const data = await fetchData('contact', populate, fetch);
	return data;
}
