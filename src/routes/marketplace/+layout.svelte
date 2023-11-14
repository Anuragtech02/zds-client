<script>
	import PageLayout from '$lib/layout/PageLayout.svelte';
	export let data;
	let { Title, Description } = data;
	if (!Description) Description = '';
</script>

<PageLayout title={Title} description={Description}>
	<slot {data} />
</PageLayout>
