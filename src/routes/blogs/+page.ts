import type { PageLoad } from '../work/$types';
import { fetchData } from '$lib/utils/functions.js';

export const load: PageLoad = async ({ params, fetch }) => {
	// console.log('Search', urlParams.toString());
	const populate =
		'populate[0]=Work_Categories&populate[1]=Work_Categories.Works&populate[2]=Work_Categories.Works.Images&populate[3]=Work_Categories.Works.Video&populate[4]=Work_Categories.Works.Video_Thumbnail&populate[5]=bgImage';
	const data = await fetchData('blog-page', populate, fetch);
	return data;
};
