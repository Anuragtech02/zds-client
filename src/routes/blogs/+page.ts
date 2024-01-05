import type { PageLoad } from '../work/$types';
import { fetchData } from '$lib/utils/functions.js';

export const load: PageLoad = async ({ params, fetch }) => {
	// console.log('Search', urlParams.toString());
	const populate =
		'populate[0]=Work_Categories&populate[1]=Work_Categories.blogs&populate[2]=Work_Categories.thumbnail&populate[3]=bgImage';
	const data = await fetchData('blog-page', populate, fetch);
	return data;
};
