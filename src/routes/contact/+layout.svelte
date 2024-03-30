<script>
	import CustomHead from '$lib/components/CustomHead.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import { getImageUrl } from '$lib/utils/functions';
	export let data;
	let { Page_Title, Page_Description, bgImage, Bg_Image_File } = data;

	let imgSrc = getImageUrl(Bg_Image_File?.Image || bgImage);
	let imgSrcMobile = getImageUrl(Bg_Image_File?.mobileImage || bgImage);
	if (!Page_Description) Page_Description = '';
</script>

<CustomHead seo={data.seo} />
<PageLayout
	title={Page_Title}
	description={Page_Description}
	bgImage={imgSrc}
	bgImageMobile={imgSrcMobile}
>
	<slot {data} />
</PageLayout>
