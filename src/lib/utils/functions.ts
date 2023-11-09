export function isValidEmail(email: string) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

export function isValidPhone(phone: string) {
	const phoneRegex = /^\d{10}$/;
	return phoneRegex.test(phone);
}

export function breakSentence(sentence: string) {
	let words = sentence.split(',');
	let lastWord = words[1];
	words.pop();
	let initialWords = words[0];
	return {
		initialWords,
		lastWord
	};
}

export let getImageUrl = (image: any) => {
	const host = 'https://zds-cms.up.railway.app';
	if (image) {
		return host + image?.data?.attributes?.url;
	}
	return '';
};

export const fetchData = async (url: string, populate: string) => {
	try {
		const host = 'https://zds-cms.up.railway.app/api/';
		const res = await fetch(host + url + '?' + populate);
		const data = await res.json();
		return data.data.attributes;
	} catch (err) {
		console.log(err);
		return null;
	}
};
