<script lang="ts">
	import BaseLayer from '$lib/layout/BaseLayer.svelte';
	import Lenis from '@studio-freight/lenis';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import '../app.css';
	import { onMount } from 'svelte';
	export let data;
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
	<slot {data} />
</BaseLayer>
