import { fetchData } from '$lib/utils/functions';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */

export async function load({ params }: any) {
	let populate = `populate[0]=Brands.brands&populate[1]=Hero&populate[2]=Service.services&populate[3]=MarketPlace.Images&populate[4]=Form.socials&populate[5]=Works.works&populate[6]=Hero.Background_Video&populate[7]=Works.works.Images&populate[8]=Works.works.category&populate[9]=Works.works.Images.Image&populate[10]=Brands.brands.image`;
	let data = await fetchData('home', populate);
	return data;
}
