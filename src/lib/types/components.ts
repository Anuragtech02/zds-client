export type ButtonVariants = 'primary' | 'gradient';

export interface ContactForm {
	name: {
		value: string;
		error?: string;
	};
	email: {
		value: string;
		error?: string;
	};
	phone: {
		value: string;
		error?: string;
	};
	message: {
		value: string;
		error?: string;
	};
}

export enum Socials {
	Facebook = 'Facebook',
	Instagram = 'Instagram',
	Vimeo = 'Vimeo',
	Youtube = 'Youtube'
}

export interface Link {
	name: string;
	url: string;
}

export interface IVideoSliderItem {
	video: string;
	title: string;
	description: string;
}
