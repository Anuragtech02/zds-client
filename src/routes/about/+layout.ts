import { fetchData } from '$lib/utils/functions';

/** @type {import('./$types').PageLoad} */

export async function load({ params, fetch }: any) {
	const populate = `populate[0]=Team_Members&populate[1]=Image&populate[2]=Team_Members.Image&populate[3]=bgImage`;
	const data = await fetchData('about-us-page', populate, fetch);
	return data;
}
