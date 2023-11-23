<script lang="ts">
	import type { PageData } from './$types';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import BannerCta from '$lib/sections/Home/BannerCTA.svelte';
	import FloatingActionButton from '$lib/components/FloatingActionButton.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import CustomHead from '$lib/components/CustomHead.svelte';
	import { getImageUrl } from '$lib/utils/functions';
	export let data: PageData;
	export let Title = '';
	let category = data?.attributes?.category?.data?.attributes?.Name || '';
	let image;
	if (data) {
		Title = data?.attributes?.Title;
		image = getImageUrl(data?.attributes?.Video_Thumbnail);
	}
	console.log(data);
	// let heading = 'Lorem Ipsum is simply dummy text of the printing and typesetting.';
	// let description =
	// 	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
	// let images = [
	// 	'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	// 	'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	// 	'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	// 	'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	// 	'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	// ];
</script>

<CustomHead title={Title} description={data.attributes.Description} {image} />
<PageLayout
	title={Title}
	rightComp={true}
	description=""
	bgImage=""
	bgColor="#0F0F0F"
	tagText={category}
>
	<SectionLayout className="pt-0 [&>p]:text-left z-[1] relative">
		{@html data.attributes.Description}
	</SectionLayout>
	<FloatingActionButton />
</PageLayout>
<BannerCta />

<style>
	/* .work-section > p {
		text-align: unset !important;
	} */
</style>
