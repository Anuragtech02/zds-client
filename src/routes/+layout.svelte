<script lang="ts">
	import BaseLayer from '$lib/layout/BaseLayer.svelte';
	import Lenis from '@studio-freight/lenis';
	import '../app.css';
	import { onMount } from 'svelte';
	onMount(() => {
		const lenis = new Lenis();

		// lenis.on('scroll', (e: any) => {
		// 	console.log(e);
		// });

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});
</script>

<BaseLayer>
	<slot />
</BaseLayer>
