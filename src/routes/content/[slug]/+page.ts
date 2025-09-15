import { fetchData } from '$lib/utils/functions.js';

// Dynamic content page loader
// Fetches a single entry by slug from Strapi (collection: "content").
// Adjust the collection name below if your Strapi uses a different UID (e.g., "content-pages").
const COLLECTION_UID = 'contents';

export const load = async ({ params, fetch }) => {
	const { slug } = params;
	const urlParams = new URLSearchParams();
	const populate = [
		'description',
		'seo',
		'seo.metaSocial.image',
		'seo.extraScripts',
		'seo.metaImage'
	];
	urlParams.append(`filters[slug][$eq]`, slug);
	populate.forEach((item, index) => {
		urlParams.append(`populate[${index}]`, item);
	});

	const data = await fetchData(COLLECTION_UID, urlParams.toString(), fetch);

	// Normalize return shape to be attributes for a single item
	if (Array.isArray(data)) {
		const first = data[0];
		return first?.attributes || first || null;
	}
	return data?.attributes || data || null;
};
