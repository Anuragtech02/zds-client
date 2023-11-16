import { fetchData } from '$lib/utils/functions';

/** @type {import('./$types').PageLoad} */

export async function load({ params, fetch }: any) {
	let elements = ['Form', 'bgImage', 'description', 'Page_Description', 'Page_Title'];
	let populate = elements.map((el, idx) => `populate[${idx}]=${el}`).join('&');
	let data = await fetchData('contact', populate, fetch);
	return data;
}
