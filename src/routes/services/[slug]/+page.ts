import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { fetchCms, fetchData } from '$lib/utils/functions.js';

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
	let data = await fetchCms('services', urlParams.toString(), fetch);
	// `slug` isn't a Strapi filter, so this returns every service; pick the match.
	if (Array.isArray(data)) {
		data = data.filter((service) => service?.attributes?.slug === slug);
	}
	const service = Array.isArray(data) ? data[0] : data;
	if (!service) {
		throw error(404, 'Not found');
	}
	const servicesParams = new URLSearchParams();
	servicesParams.append(`populate[0]`, 'Icon');
	const Services = await fetchData('services', servicesParams.toString(), fetch);
	return { service, services: Services };
};
