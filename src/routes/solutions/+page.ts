import { fetchData } from '$lib/utils/functions.js';

export const load = async ({ fetch }) => {
	try {
		// Fetch solutions with basic fields for listing
		const solutionsParams = new URLSearchParams();
		const populate = [
			'title',
			'slug',
			'description',
			'seo',
			'seo.metaSocial.image',
			'seo.extraScripts',
			'seo.metaImage'
		];

		populate.forEach((item, index) => {
			solutionsParams.append(`populate[${index}]`, item);
		});

		// Sort by creation date, newest first
		solutionsParams.append('sort[0]', 'createdAt:desc');

		// Fetch solutions data
		const solutionsData = await fetchData('solutions', solutionsParams.toString(), fetch);

		// Hardcoded page metadata
		const pageData = {
			title: 'Solutions',
			description: 'Explore our comprehensive solutions portfolio',
			seo: {
				metaTitle: 'Solutions | Our Portfolio',
				metaDescription:
					"Discover innovative solutions and services we've delivered to clients across various industries.",
				keywords: 'solutions, portfolio, services, digital agency'
			}
		};

		return {
			solutions: Array.isArray(solutionsData) ? solutionsData : [solutionsData].filter(Boolean),
			pageData: pageData
		};
	} catch (error) {
		console.error('Error loading solutions:', error);
		return {
			solutions: [],
			pageData: {
				title: 'Solutions',
				description: 'Explore our comprehensive solutions portfolio',
				seo: null
			}
		};
	}
};
