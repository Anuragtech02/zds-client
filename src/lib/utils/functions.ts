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
		return data.data.attributes;
	} catch (err) {
		console.log('ERROR WHILE FETCHING', err);
		return null;
	}
};
