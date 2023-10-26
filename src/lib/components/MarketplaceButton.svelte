<script lang="ts">
	import { goto } from '$app/navigation';

	export let className: string = '';
</script>

<div class="gradient-btn relative">
	<button
		on:click={() => {
			goto('/marketplace');
		}}
		class={`relative z-[1] py-1 px-6 sm:py-2 sm:px-8 md:py-3 md:px-10 rounded-full gradient-1 ${className}`}
	>
		<span class="flex justify-center items-center">Marketplace</span>
	</button>
</div>

<style>
	.gradient-btn::before {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 9999px;
		@apply gradient-1;
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
		z-index: 0;
		background-size: 400%;
	}
	.gradient-btn:hover::before {
		filter: blur(20px);
		opacity: 1;
	}
</style>
