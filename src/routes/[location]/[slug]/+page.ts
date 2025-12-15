import { fetchData } from '$lib/utils/functions.js';
import { error } from '@sveltejs/kit';

// Reserved routes that should NOT be matched by this dynamic route
// These are existing routes in the application that must not be intercepted
const RESERVED_ROUTES = [
	'about',
	'anamorphic-3d-content-agency',
	'api',
	'blogs',
	'components',
	'contact',
	'marketplace',
	'privacy-policy',
	'refund-policy',
	'services',
	'shipping-policy',
	'sitemap.xml',
	'solutions',
	'terms-and-conditions',
	'works'
];

const COLLECTION_UID = 'location-pages';

export const load = async ({ params, fetch }) => {
	const { location, slug } = params;

	// If the location is a reserved route, let it fall through to 404
	// This prevents this route from matching /solutions/some-slug etc.
	if (RESERVED_ROUTES.includes(location)) {
		throw error(404, 'Not found');
	}

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

	// Filter by both location and slug - location is validated by Strapi data
	// If no matching entry exists in CMS, it will return 404
	urlParams.append('filters[location][$eq]', location);
	urlParams.append('filters[slug][$eq]', slug);
	populate.forEach((item, index) => {
		urlParams.append(`populate[${index}]`, item);
	});

	const data = await fetchData(COLLECTION_UID, urlParams.toString(), fetch);

	// Normalize return shape to be attributes for a single item
	if (Array.isArray(data)) {
		const first = data[0];
		if (!first) {
			throw error(404, 'Page not found');
		}
		return {
			...(first?.attributes || first || null),
			location
		};
	}

	if (!data) {
		throw error(404, 'Page not found');
	}

	return {
		...(data?.attributes || data || null),
		location
	};
};
