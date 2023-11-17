<script lang="ts">
	import BaseLayer from '$lib/layout/BaseLayer.svelte';
	import Lenis from '@studio-freight/lenis';
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
	export let data;
	let commonData = {
		header: data?.header,
		footer: data?.footer
	};
	let pageData = data?.data;
</script>

<BaseLayer data={commonData}>
	<slot data={pageData} />
</BaseLayer>
