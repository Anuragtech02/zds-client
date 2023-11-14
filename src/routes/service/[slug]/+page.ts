import type { PageLoad } from './$types';
import { fetchData } from '$lib/utils/functions.js';

export const load: PageLoad = async ({ params, fetch }) => {
	const { slug } = params;
	const urlParams = new URLSearchParams();
	let populate = ['Icon', 'Thumbnail'];
	urlParams.append(`slug`, slug);
	populate.forEach((value, index) => {
		urlParams.append(`populate[${index}]`, value);
	});
	// console.log('Search', urlParams.toString());
	const data = await fetchData('services', urlParams.toString(), fetch);
	const servicesParams = new URLSearchParams();
	servicesParams.append(`populate[0]`, 'Icon');
	const Services = await fetchData('services', servicesParams.toString(), fetch);
	if (Array.isArray(data)) {
		return { service: data[0], services: Services };
	} else {
		return { service: data, services: Services };
	}
};
