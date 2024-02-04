import type { PageLoad } from '../work/$types';
import { fetchData } from '$lib/utils/functions.js';

export const load: PageLoad = async ({ params, fetch }) => {
	// console.log('Search', urlParams.toString());

	const urlParams = new URLSearchParams();
	urlParams.append(`populate[0]`, 'Work_Categories');
	urlParams.append(`populate[1]`, 'Work_Categories.blogs');
	urlParams.append(`populate[2]`, 'Work_Categories.thumbnail');
	urlParams.append(`populate[3]`, 'bgImage');
	urlParams.append(`populate[4]`, 'seo');
	urlParams.append(`populate[5]`, 'seo.metaSocial.image');
	urlParams.append(`populate[6]`, 'seo.extraScripts');
	urlParams.append(`populate[7]`, 'seo.metaImage');
	urlParams.append(`populate[8]`, 'Work_Categories.blogs.thumbnail');

	const populate = urlParams.toString();
	const data = await fetchData('blog-page', populate, fetch);
	return data;
};
