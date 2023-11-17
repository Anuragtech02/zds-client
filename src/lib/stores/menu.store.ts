import { writable } from 'svelte/store';

type TMenuStore = {
	isActive: boolean;
};

export const menuStore = writable<TMenuStore>({
	isActive: false
});
