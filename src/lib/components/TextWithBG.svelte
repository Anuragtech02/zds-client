<script lang="ts">
	export let className: string = '';
</script>

<span class={`font-dela-gothic inline-block bg-gradient-band z-[1] relative ${className}`}>
	<slot />
</span>

<style>
	.bg-gradient-band {
		position: relative;
		z-index: 1;
	}
	.bg-gradient-band::after {
		content: '';
		position: absolute;
		bottom: 15%;
		left: 0;
		width: 100%;
		height: 40%;
		z-index: -1;
		@apply gradient-1;
	}
</style>
