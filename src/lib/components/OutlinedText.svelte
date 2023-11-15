<script lang="ts">
	export let text: string = 'TEXT HERE';
	export let strokeWidth: 'w-stroke-1' | 'w-stroke-2' = 'w-stroke-1';
	export let className: string = '';
	export let isActive: boolean = false;
</script>

<!-- <span class=" relative"> -->
<span
	class={`inline-block font-dela-gothic outlined-text ${className} ${isActive ? 'active' : ''}`}
	class:w-stroke-1={strokeWidth === 'w-stroke-1'}
	class:w-stroke-2={strokeWidth === 'w-stroke-2'}
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
		-webkit-text-fill-color: transparent;
		stroke-linejoin: round;
		/* transition: all 0.3s ease-in-out; */
	}
	.active {
		-webkit-text-fill-color: white;
	}
</style>
