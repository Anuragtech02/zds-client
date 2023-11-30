import { writable } from 'svelte/store';

type TCommonStore = {
	header: any;
	footer: any;
};

export const commonStore = writable<TCommonStore>({
	header: {},
	footer: {}
});
