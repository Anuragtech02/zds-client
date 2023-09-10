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
