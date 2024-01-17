import { fetchData } from '$lib/utils/functions';

/** @type {import('./$types').PageLoad} */

export async function load({ params, fetch }: any) {
	const populate = `populate[0]=market_place_items.Thumbnail&populate[1]=market_place_items.Video&populate[2]=market_place_items.market_place_item_categories&populate[3]=seo&populate[4]=seo.metaSocial.image&populate[5]=seo.extraScripts`;
	const data = await fetchData('market-place', populate, fetch);
	return data;
}
