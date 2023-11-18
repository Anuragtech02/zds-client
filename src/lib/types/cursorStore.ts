export interface ICursorStore {
	position: {
		x: number;
		y: number;
	};
	type: 'default' | 'image' | 'video' | 'link' | 'submit' | 'card';
	showCursor: boolean;
	z: number;
}
