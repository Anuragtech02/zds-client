<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';

	export let className: string = '';

	gsap.registerPlugin(ScrollTrigger);
	let customBand: any = null;
	let bandContainer: any = null;

	onMount(() => {
		if (customBand) {
			setTimeout(() => {
				gsap.fromTo(
					customBand,
					{
						width: '5%'
					},
					{
						width: '105%',
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
			}, 300);
		}
	});
</script>

<span
	bind:this={bandContainer}
	class={`font-dela-gothic inline-block bg-gradient-band z-[1] relative ${className}`}
>
	<span bind:this={customBand} class="custom-bg-band" />
	<slot />
</span>

<style>
	.bg-gradient-band {
		position: relative;
		z-index: 1;
	}
	.custom-bg-band {
		position: absolute;
		width: 5%;
		height: 40%;
		z-index: -1;
		bottom: 10%;
		overflow: hidden;
		@apply gradient-1;
	}
</style>
