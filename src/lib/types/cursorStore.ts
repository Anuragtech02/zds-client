export interface ICursorStore {
	position: {
		x: number;
		y: number;
	};
	type: 'default' | 'image' | 'video' | 'link' | 'submit';
	showCursor: boolean;
}
