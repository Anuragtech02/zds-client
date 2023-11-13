import { writable } from 'svelte/store';

type PopupStore = {
	isShowreelOpen: boolean;
};

export const popupStore = writable<PopupStore>({
	isShowreelOpen: false
});
