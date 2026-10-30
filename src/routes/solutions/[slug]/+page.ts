import { error } from '@sveltejs/kit';
import { fetchCms } from '$lib/utils/functions.js';

// Dynamic solution page loader
// Fetches a single entry by slug from Strapi (collection: "solution").
const COLLECTION_UID = 'solutions';

export const load = async ({ params, fetch }) => {
	const { slug } = params;
	const urlParams = new URLSearchParams();
	const populate = [
		'description',
		'seo',
		'seo.metaSocial.image',
		'seo.extraScripts',
		'seo.metaImage',
		'faq',
		'faq.items'
	];
	urlParams.append(`filters[slug][$eq]`, slug);
	populate.forEach((item, index) => {
		urlParams.append(`populate[${index}]`, item);
	});

	const data = await fetchCms(COLLECTION_UID, urlParams.toString(), fetch);

	// Normalize return shape to be attributes for a single item
	const item = Array.isArray(data) ? data[0] : data;
	if (!item) {
		throw error(404, 'Not found');
	}
	return item?.attributes || item;
};
