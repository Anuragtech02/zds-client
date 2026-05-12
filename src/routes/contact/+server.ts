import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

const MAX_FILE_SIZE = 10 * 1024 * 1024;

function getApiUrl(path: string) {
	return `${import.meta.env.VITE_API_URI}${path}`;
}

function resolveFileUrl(url?: string) {
	if (!url) return '';
	if (/^https?:\/\//i.test(url)) return url;

	const apiUrl = new URL(import.meta.env.VITE_API_URI);
	return `${apiUrl.origin}${url}`;
}

async function uploadAttachment(file: File) {
	if (file.size > MAX_FILE_SIZE) {
		throw new Error('File must be under 10 MB');
	}

	const uploadData = new FormData();
	uploadData.append('files', file, file.name);

	const uploadRes = await fetch(getApiUrl('/upload'), {
		method: 'POST',
		headers: env.STRAPI_API_TOKEN
			? {
					Authorization: `Bearer ${env.STRAPI_API_TOKEN}`
			  }
			: undefined,
		body: uploadData
	});

	if (!uploadRes.ok) {
		throw new Error('File upload failed');
	}

	const uploadResponse = await uploadRes.json();
	const uploadedFile = Array.isArray(uploadResponse)
		? uploadResponse[0]
		: uploadResponse?.data?.[0] || uploadResponse?.data || uploadResponse;

	return {
		name: uploadedFile?.name || file.name,
		url: resolveFileUrl(uploadedFile?.url),
		mime: uploadedFile?.mime || file.type,
		size: uploadedFile?.size || file.size
	};
}

async function submitToEzForms(formData: Record<string, string>) {
	const res = await fetch(getApiUrl('/ezforms/submit'), {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ formData })
	});

	if (!res.ok) {
		throw new Error('Form submission failed');
	}

	return res.json();
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }: any) {
	try {
		const contentType = request.headers.get('content-type') || '';
		let formData: Record<string, string>;

		if (contentType.includes('multipart/form-data')) {
			const submittedFormData = await request.formData();
			const attachment = submittedFormData.get('attachment') as File | null;

			formData = {
				name: String(submittedFormData.get('name') || ''),
				email: String(submittedFormData.get('email') || ''),
				phone: String(submittedFormData.get('phone') || ''),
				message: String(submittedFormData.get('message') || '')
			};

			if (attachment && attachment.size > 0) {
				const uploadedAttachment = await uploadAttachment(attachment);
				formData.attachmentName = uploadedAttachment.name;
				formData.attachmentUrl = uploadedAttachment.url;
				formData.attachmentType = uploadedAttachment.mime;
				formData.attachmentSize = String(uploadedAttachment.size);
			}
		} else {
			const data = await request.json();
			formData = data.formData || data;
		}

		let response = await submitToEzForms(formData);
		console.log('Response', response);
	} catch (err) {
		console.log(err);
		return json(
			{
				status: 500,
				message: 'Unable to submit form'
			},
			{ status: 500 }
		);
	}

	return json({
		status: 200,
		message: 'Form submitted successfully'
	});
}
