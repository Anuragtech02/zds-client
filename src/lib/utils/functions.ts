export function isValidEmail(email: string) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

export function isValidPhone(phone: string) {
	const phoneRegex = /^\d{10}$/;
	return phoneRegex.test(phone);
}

export function breakSentence(sentence: string) {
	const words = sentence.split(',');
	const lastWord = words[1];
	words.pop();
	const initialWords = words[0];
	return {
		initialWords,
		lastWord
	};
}

export const getImageUrl = (
	image: any,
	size: 'thumbnail' | 'small' | 'medium' | 'large' | 'original' = 'original'
) => {
	console.log('Came here', { image });
	const host = import.meta.env.VITE_API_URI;
	if (image) {
		switch (size) {
			case 'original':
				return image?.data?.attributes?.url;
			case 'thumbnail':
				return image?.data?.attributes?.formats?.thumbnail?.url;
			case 'small':
				return image?.data?.attributes?.formats?.small?.url;
			case 'medium':
				return image?.data?.attributes?.formats?.medium?.url;
			case 'large':
				return image?.data?.attributes?.formats?.large?.url;
			default:
				return image?.data?.attributes?.url;
		}
	}
	return '';
};

export const fetchData = async (url: string, populate: string, fetch: any) => {
	const API_URI = import.meta.env.VITE_API_URI;
	console.log(API_URI + '/' + url + '?' + populate);
	try {
		const host = API_URI;
		const res = await fetch(host + '/' + url + '?' + populate);
		const data = await res.json();
		console.log('Inner', data);
		return data?.data?.attributes || data.data;
	} catch (err) {
		console.log('ERROR WHILE FETCHING', err);
		return null;
	}
};

export const extractVideoID = (url: string) => {
	// Regular expression to match various forms of YouTube URL
	const regex = /(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
	const match = url.match(regex);

	// If a match is found, the video ID is the second group in the match array
	if (match && match[2].length == 11) {
		return match[2];
	} else {
		return null; // Return null if no valid YouTube video ID could be extracted
	}
};

export async function getAllWorks() {
	const populate = 'populate=slug';
	const data = await fetchData('works', populate, fetch);
	return data;
}

export async function getAllBlogs() {
	const populate = 'populate=slug';
	const data = await fetchData('blogs', populate, fetch);
	return data;
}

export async function getAllServices() {
	const populate = 'populate=slug';
	const data = await fetchData('services', populate, fetch);
	return data;
}
