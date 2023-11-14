import { fetchData } from '$lib/utils/functions';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */

export async function load({ params, fetch }) {
	const populate = [
		'Brands.brands',
		'Hero',
		'Service.services.Icon',
		'MarketPlace.Images',
		'Form.socials',
		'Works.works',
		'Hero.Background_Video',
		'Works.works.Images',
		'Works.works.category',
		'Works.works.Images.Image',
		'Brands.brands.image'
	];
	const urlParams = new URLSearchParams();
	populate.forEach((value, index) => {
		urlParams.append(`populate[${index}]`, value);
	});

	const data = await fetchData('home', urlParams.toString(), fetch);
	return data;
}
