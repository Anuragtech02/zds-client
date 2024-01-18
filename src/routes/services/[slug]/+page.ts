import type { PageLoad } from './$types';
import { fetchData } from '$lib/utils/functions.js';

export const load: PageLoad = async ({ params, fetch }) => {
	const { slug } = params;
	const urlParams = new URLSearchParams();
	const populate = [
		'Icon',
		'Thumbnail',
		'MainVideo',
		'seo',
		'seo.metaSocial.image',
		'seo.extraScripts',
		'seo.metaImage'
	];
	urlParams.append(`slug`, slug);
	populate.forEach((value, index) => {
		urlParams.append(`populate[${index}]`, value);
	});
	// console.log('Search', urlParams.toString());
	let data = await fetchData('services', urlParams.toString(), fetch);
	if (Array.isArray(data) && data.length > 1) {
		data = data.filter((service) => service?.attributes?.slug === slug);
	}
	console.log('Data', data, slug);
	const servicesParams = new URLSearchParams();
	servicesParams.append(`populate[0]`, 'Icon');
	const Services = await fetchData('services', servicesParams.toString(), fetch);
	if (Array.isArray(data)) {
		return { service: data[0], services: Services };
	} else {
		return { service: data, services: Services };
	}
};
