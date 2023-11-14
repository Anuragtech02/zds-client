import { fetchData } from '$lib/utils/functions';

/** @type {import('./$types').PageLoad} */

export async function load({ params, fetch }: any) {
	const populate = [
		'Brands.brands',
		'Hero',
		'Service.services.Icon',
		'MarketPlace.Images',
		'Form.socials',
		'Works.works',
		'Hero.Background_Video',
		'Works.works.Video',
		'Works.works.category',
		'Works.works.Video_Thumbnail',
		'Brands.brands.image'
	];
	const urlParams = new URLSearchParams();
	populate.forEach((value, index) => {
		urlParams.append(`populate[${index}]`, value);
	});

	const data = await fetchData('home', urlParams.toString(), fetch);
	return data;
}
