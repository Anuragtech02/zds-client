import { fetchData } from '$lib/utils/functions';

/** @type {import('./$types').PageLoad} */

export async function load({ params }: any) {
	let populate = `populate[0]=Team_Members&populate[1]=Image&populate[2]=Team_Members.Image`;
	let data = await fetchData('about-us-page', populate);
	return data;
}
