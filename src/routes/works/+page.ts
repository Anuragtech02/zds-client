import type { PageLoad } from './$types';
import { fetchData } from '$lib/utils/functions.js';

export const load: PageLoad = async ({ fetch, url }) => {
	try {
		// Get location from URL query params if present
		const locationFilter = url.searchParams.get('location');

		// First fetch the basic work page data for layout information
		const basicPagePopulate = [
			'Page_Title',
			'Page_Description',
			'description',
			'bgImage',
			'Bg_Image_File.Image',
			'Bg_Image_File.mobileImage',
			'seo',
			'seo.metaSocial.image',
			'seo.extraScripts',
			'seo.metaImage',
			'Work_Categories.id',
			'Work_Categories.Name',
			'Work_Categories.Description'
		];

		// Create search params for page data
		const pageSearchParams = new URLSearchParams();
		basicPagePopulate.forEach((item, index) => {
			pageSearchParams.append(`populate[${index}]`, item);
		});

		// Fetch basic page data
		const pageData = await fetchData('work-page', pageSearchParams.toString(), fetch);

		// Only fetch minimal category data initially - we'll load the rest after mount
		const categoriesSearchParams = new URLSearchParams();

		// Populate only what we need for initial render
		categoriesSearchParams.append('populate[0]', 'Name');
		categoriesSearchParams.append('populate[1]', 'Description');

		// Sort by updatedAt, newest first
		categoriesSearchParams.append('sort[0]', 'updatedAt:desc');

		// Add location filter if present
		if (locationFilter) {
			// Only return categories that have at least one work with matching location
			// Add a filter to include works with the specified location
			categoriesSearchParams.append('filters[$or][0][Works][location][$eq]', locationFilter);
		}
		// Fetch categories data
		const categoriesData = await fetchData('categories', categoriesSearchParams.toString(), fetch);

		// Ensure we have the expected data structure
		if (!categoriesData) {
			console.error('No categories data returned from API');
		}

		// Return combined data with safe fallbacks
		return {
			...(pageData || {}),
			Work_Categories: { data: categoriesData } || { data: [] },
			categoryEndpoint: 'categories',
			locationFilter
		};
	} catch (error) {
		console.error('Error in page load function:', error);

		// Return minimal data structure to prevent rendering errors
		return {
			Page_Title: 'Our Work',
			Page_Description: '',
			description: '',
			Work_Categories: { data: [] },
			bgImage: '',
			Bg_Image_File: {},
			categoryEndpoint: 'categories',
			locationFilter: null,
			seo: {}
		};
	}
};
