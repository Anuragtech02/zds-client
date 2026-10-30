import { commonStore } from '$lib/stores/commons.store';
import { homeStore } from '$lib/stores/hero.store';
import { fetchCms } from '$lib/utils/functions';

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
		'Works.works.categories',
		'Works.works.Video_Thumbnail',
		'Brands.brands.image',
		'seo',
		'seo.metaSocial.image',
		'seo.extraScripts',
		'seo.metaImage'
	];
	const populateCommon = `populate=*`;

	const urlParams = new URLSearchParams();
	populate.forEach((value, index) => {
		urlParams.append(`populate[${index}]`, value);
	});

	// In parallel: these three used to run back to back on every page load.
	const [data, dataFooter, dataHeader] = await Promise.all([
		fetchCms('home', urlParams.toString(), fetch),
		fetchCms('footer', populateCommon, fetch),
		fetchCms('header', populateCommon, fetch)
	]);
	homeStore.set(data);
	commonStore.set({
		header: dataHeader,
		footer: dataFooter
	});
	return {
		data,
		footer: dataFooter,
		header: dataHeader
	};
}
