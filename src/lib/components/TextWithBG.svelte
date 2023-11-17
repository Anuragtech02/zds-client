<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	export let className: string = '';

	let customBand: any = null;
	let bandContainer: any = null;

	onMount(() => {
		if (customBand && bandContainer) {
			gsap.fromTo(
				customBand,
				{
					width: '5%'
				},
				{
					width: '100%',
					duration: 1,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: bandContainer,
						start: 'top bottom',
						end: 'bottom top',
						toggleActions: 'play reverse play reverse'
					}
				}
			);
		}
	});
</script>

<span
	bind:this={bandContainer}
	class={`font-dela-gothic inline-block bg-gradient-band z-[1] relative ${className}`}
>
	<span bind:this={customBand} class="custom-bg-band gradient-1" />
	<slot />
</span>

<style>
	.bg-gradient-band {
		position: relative;
		z-index: 1;
	}
	.custom-bg-band {
		position: absolute;
		width: 4%;
		height: 40%;
		z-index: -1;
		bottom: 10%;
		overflow: hidden;
	}
</style>
