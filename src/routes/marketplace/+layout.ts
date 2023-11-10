import { fetchData } from '$lib/utils/functions';

/** @type {import('./$types').PageLoad} */

export async function load({ params }: any) {
	let populate = `populate[0]=market_place_items.Thumbnail&populate[1]=market_place_items.Video&populate[2]=market_place_items.market_place_item_categories`;
	let data = await fetchData('market-place', populate);
	return data;
}
