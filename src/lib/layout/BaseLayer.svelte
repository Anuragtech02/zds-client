<script script lang="ts">
	import CustomCursor from '$lib/components/CustomCursor.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import { onMount } from 'svelte';
	import '../../app.css';
	export let data: any;

	onMount(() => {
		console.log('BaseLayer mounted');
	});
</script>

<Header data={data.header} />
<CustomCursor />
<main>
	<slot />
</main>
<Footer
	data={data?.footer}
	links={data?.header?.links}
	showMarketplaceButton={data?.header?.showMarketplaceButton}
/>
