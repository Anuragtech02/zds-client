/** @type {import('./$types').PageLoad} */
const fetchData = async (url: string) => {
	try {
		const host = 'https://zds-cms.up.railway.app/api/';
		const res = await fetch(host + url + '?populate=*');
		const data = await res.json();
		return data.data.attributes;
	} catch (err) {
		console.log(err);
		return null;
	}
};
export async function load({ params }: any) {
	let data = await fetchData('home');
	return data;
}
