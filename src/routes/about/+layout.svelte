<script>
	import DecorationLeft from '$lib/components/DecorationLeft.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import { getImageUrl } from '$lib/utils/functions';

	export let data;
	console.log(data);
	let { Page_Title, Page_Description, bgImage } = data;
	let imgSrc = getImageUrl(bgImage);
</script>

<PageLayout title={Page_Title} description={Page_Description} bgImage={imgSrc}>
	<slot />
</PageLayout>
<DecorationLeft bottom={'90%'} />
