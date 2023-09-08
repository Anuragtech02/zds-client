import type { AppStore } from '$lib/types/appStore';
import { writable } from 'svelte/store';

const seed: AppStore = {
	title: 'Zero design studio',
	width: 800,
	height: 600
};

function initAppStore() {
	const { subscribe, set, update } = writable(seed);
	return {
		subscribe,
		set,
		update: (value: Partial<AppStore>) => update((state) => ({ ...state, ...value })),
		updateDimensions: (width: number, height: number) =>
			update((state) => ({ ...state, width, height })),
		reset: () => set(seed)
	};
}

export const appStore = initAppStore();
