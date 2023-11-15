<script lang="ts">
	export let text: string = 'TEXT HERE';
	export let strokeWidth: 'w-stroke-1' | 'w-stroke-2' = 'w-stroke-1';
	export let className: string = '';
	export let isActive: boolean = false;
</script>

<!-- <span class=" relative"> -->
<span
	class={`relative inline-block font-dela-gothic outlined-text ${className} ${
		isActive ? 'active-text' : ''
	}`}
	class:w-stroke-1={strokeWidth === 'w-stroke-1'}
	class:w-stroke-2={strokeWidth === 'w-stroke-2'}
	data-fill-text={text}
	class:active-text={isActive}
>
	{text}
</span>

<!-- </span> -->

<style>
	.w-stroke-1 {
		-webkit-text-stroke: 1px white;
	}
	.w-stroke-2 {
		-webkit-text-stroke: 2px white;
	}
	.outlined-text {
		/* -webkit-text-fill-color: transparent; */
		color: transparent;
		stroke-linejoin: round;
		/* transition: all 0.3s ease-in-out; */
	}
	/* .active {
		-webkit-text-fill-color: white;
	} */
	/* .outlined-text {
	} */
	.outlined-text::before {
		content: attr(data-fill-text);
		position: absolute;
		width: 0;
		height: 100%;
		color: #ffffff;
		-webkit-text-stroke: 0px transparent;
		overflow: hidden;
		transition: width 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
	}
	.active-text::before {
		width: 100%;
	}
</style>
