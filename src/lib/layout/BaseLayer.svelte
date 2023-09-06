<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('BaseLayer mounted');
	});
</script>

<slot />
