import type { PageLoad } from '../work/$types';
import { fetchData } from '$lib/utils/functions.js';

export const load: PageLoad = async ({ params, fetch }) => {
	// console.log('Search', urlParams.toString());
	const populate =
		'populate[0]=Work_Categories&populate[1]=Work_Categories.Works&populate[2]=Work_Categories.Works.Images&populate[3]=Work_Categories.Works.Video&populate[4]=Work_Categories.Works.Video_Thumbnail&populate[5]=bgImage&populate[6]=seo&populate[7]=seo.metaSocial.image&populate[8]=seo.extraScripts&populate[9]=seo.metaImage';
	const data = await fetchData('work-page', populate, fetch);
	return data;
};
