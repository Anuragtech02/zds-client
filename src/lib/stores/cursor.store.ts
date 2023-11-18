import type { ICursorStore } from '$lib/types/cursorStore';
import { writable } from 'svelte/store';

const seed: ICursorStore = {
	position: {
		x: 0,
		y: 0
	},
	type: 'default',
	showCursor: false,
	z: 50
};

function initCursorStore() {
	const { subscribe, set, update } = writable(seed);
	return {
		subscribe,
		set,
		update: (value: Partial<ICursorStore>) => update((state) => ({ ...state, ...value })),
		reset: () => set(seed)
	};
}

export const cursorStore = initCursorStore();
