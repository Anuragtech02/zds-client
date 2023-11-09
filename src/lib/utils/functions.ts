export function isValidEmail(email: string) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

export function isValidPhone(phone: string) {
	const phoneRegex = /^\d{10}$/;
	return phoneRegex.test(phone);
}

export function breakSentence(sentence: string) {
	let words = sentence.split(' ');
	let lastWord = words.at(-1);
	words.pop();
	let initialWords = words.join(' ');
	return {
		initialWords,
		lastWord
	};
}

export let getImageUrl = (image: any) => {
	if (image) {
		return image?.data?.attributes?.url;
	}
	return '';
};
