import { fetchData } from '$lib/utils/functions.js';
import { error } from '@sveltejs/kit';

// Reserved routes that should NOT be matched by this dynamic route
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
	const { location } = params;

	// If the location is a reserved route, let it fall through to 404
	if (RESERVED_ROUTES.includes(location)) {
		throw error(404, 'Not found');
	}

	try {
		const urlParams = new URLSearchParams();
		const populate = [
			'title',
			'slug',
			'description',
			'seo',
			'seo.metaSocial.image',
			'seo.extraScripts',
			'seo.metaImage'
		];

		// Filter by location
		urlParams.append('filters[location][$eq]', location);

		populate.forEach((item, index) => {
			urlParams.append(`populate[${index}]`, item);
		});

		// Sort by creation date, newest first
		urlParams.append('sort[0]', 'createdAt:desc');

		const pagesData = await fetchData(COLLECTION_UID, urlParams.toString(), fetch);

		// If no pages found for this location, return 404
		const pages = Array.isArray(pagesData) ? pagesData : [pagesData].filter(Boolean);
		if (pages.length === 0) {
			throw error(404, 'Location not found');
		}

		// Format location name for display (capitalize first letter)
		const locationDisplay = location.charAt(0).toUpperCase() + location.slice(1);

		return {
			pages,
			location,
			pageData: {
				title: locationDisplay,
				description: `Explore our services and solutions in ${locationDisplay}`,
				seo: {
					metaTitle: `${locationDisplay} | Zero Design Studio`,
					metaDescription: `Discover our innovative solutions and services in ${locationDisplay}. Zero Design Studio offers cutting-edge 3D content and digital experiences.`,
					keywords: `${location}, solutions, services, 3D content, digital agency, ${locationDisplay}`
				}
			}
		};
	} catch (err) {
		// Re-throw SvelteKit errors
		if (err && typeof err === 'object' && 'status' in err) {
			throw err;
		}
		console.error('Error loading location pages:', err);
		throw error(404, 'Location not found');
	}
};
