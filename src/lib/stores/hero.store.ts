import { writable } from 'svelte/store';

const seed: any = {
	data: {}
};

function inithomeStore() {
	const { subscribe, set, update } = writable(seed);
	return {
		subscribe,
		set,
		update: (value: Partial<any>) => update((state) => ({ ...state, ...value })),
		reset: () => set(seed)
	};
}

export const homeStore = inithomeStore();
