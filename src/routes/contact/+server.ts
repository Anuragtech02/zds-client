import { json } from '@sveltejs/kit';
/** @type {import('./$types').RequestHandler} */
export async function POST({ request }: any) {
	const data = await request.json();
	console.log('Data', data);
	try {
		let res = await fetch(import.meta.env.VITE_API_URI + '/ezforms/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		let response = await res.json();
		console.log('Response', response);
	} catch (err) {
		console.log(err);
	}

	return json({
		status: 200,
		message: 'Form submitted successfully'
	});
}
