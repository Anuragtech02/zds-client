<script lang="ts">
	import CustomCursor from '$lib/components/CustomCursor.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('BaseLayer mounted');
	});
</script>

<Header />
<CustomCursor />
<main>
	<slot />
</main>
<Footer />
