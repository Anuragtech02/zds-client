<script>
	import BaseLayer from '$lib/layout/BaseLayer.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import '../app.css';
</script>

<BaseLayer>
	<PageLayout>
		<slot />
	</PageLayout>
</BaseLayer>
