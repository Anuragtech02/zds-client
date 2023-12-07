<script>
	import CustomHead from '$lib/components/CustomHead.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	export let data;
	let { Title, Description } = data;
	if (!Description) Description = '';
</script>

<CustomHead title={Title} url="marketplace" />
<PageLayout title={Title} description={Description}>
	<slot {data} />
</PageLayout>
