<script>
	import FacebookIcon from '$lib/icons/FacebookIcon.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import BannerCta from '$lib/sections/Home/BannerCTA.svelte';
</script>

<PageLayout
	title="LOREM IPSUM"
	rightComp={true}
	description=""
	bgImage=""
	bgColor="#0F0F0F"
	tagText="Animation & Visual Packaging"
>
	<slot />
</PageLayout>
<BannerCta />
