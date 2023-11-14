<script>
	import PageLayout from '$lib/layout/PageLayout.svelte';
	export let data;
	let { Page_Title, Page_Description } = data;
	if (!Page_Description) Page_Description = '';
</script>

<PageLayout
	title={Page_Title}
	description={Page_Description}
	bgImage="/images/contact-us-upper.png"
>
	<slot {data} />
</PageLayout>
