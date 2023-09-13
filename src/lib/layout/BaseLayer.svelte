<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('BaseLayer mounted');
	});
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
