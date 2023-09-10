<script lang="ts">
	export let text: string = 'TEXT HERE';
	export let strokeWidth = 'stroke-[3]';
	export let className: string = '';
	export let viewBox: string = '0 0 450 50';
</script>

<svg {viewBox} class={`w-[90%] ${className}`}>
	<text y="50" class={`${strokeWidth}`}>{text}</text>
</svg>

<style>
	svg {
		font: bold 67px 'Dela Gothic One', cursive;
		height: 60px;
	}

	text {
		fill: none;
		@apply stroke-fg;
		stroke-linejoin: round;
	}
</style>
