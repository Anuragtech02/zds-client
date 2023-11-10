import { fetchData } from '$lib/utils/functions';

/** @type {import('./$types').PageLoad} */

export async function load({ params }: any) {
	let populate = `populate=*`;
	let data = await fetchData('contact', populate);
	return data;
}
