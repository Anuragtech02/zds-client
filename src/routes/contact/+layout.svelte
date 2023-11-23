<script>
	import CustomHead from '$lib/components/CustomHead.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import { getImageUrl } from '$lib/utils/functions';
	export let data;
	let { Page_Title, Page_Description, bgImage } = data;
	console.log(data);
	let imgSrc = getImageUrl(bgImage);
	if (!Page_Description) Page_Description = '';
</script>

<CustomHead title={Page_Title} />
<PageLayout title={Page_Title} description={Page_Description} bgImage={imgSrc}>
	<slot {data} />
</PageLayout>
