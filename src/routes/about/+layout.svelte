<script>
	import PageLayout from '$lib/layout/PageLayout.svelte';
	export let data;
	let { Page_Title, Page_Description } = data;
</script>

<PageLayout title={Page_Title} description={Page_Description} bgImage="/images/about-us-upper.png">
	<slot />
</PageLayout>
