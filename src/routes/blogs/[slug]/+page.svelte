<script lang="ts">
	import type { PageData } from './$types';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import BannerCta from '$lib/sections/Home/BannerCTA.svelte';
	import FloatingActionButton from '$lib/components/FloatingActionButton.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import CustomHead from '$lib/components/CustomHead.svelte';
	import { getImageUrl } from '$lib/utils/functions';
	import { onMount } from 'svelte';
	export let data: PageData;
	export let Title = '';
	let category = data?.attributes?.category?.data?.attributes?.Name || '';
	const slug = data?.attributes?.slug;
	let image: string;
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

	let modifiedHtml: string = '';

	function convertImagesToMasonryDivs(htmlString) {
		// Parse the HTML string into a document object
		const parser = new DOMParser();
		const doc = parser.parseFromString(htmlString, 'text/html');

		// Find all paragraphs that contain images
		const paragraphs = doc.querySelectorAll('p:has(img)');

		// Iterate over these paragraphs
		paragraphs.forEach((p) => {
			// Create a new div element for the masonry layout
			const div = document.createElement('div');
			div.className = 'cms-image-container';

			// Move all images from the paragraph to the new div
			while (p.querySelector('img')) {
				const img = p.querySelector('img');
				div.appendChild(img);
			}

			// Replace the paragraph with the new div in the document
			p.parentNode.replaceChild(div, p);

			// Remove the original paragraph if it's now empty
			if (!p.firstChild) {
				p.parentNode?.removeChild(p);
			}
		});

		// Return the modified HTML as a string
		return doc.body.innerHTML;
	}

	onMount(() => {
		modifiedHtml = convertImagesToMasonryDivs(data.attributes.Description);
	});
</script>

<CustomHead title={Title} description="{Title}-{category}-ZDS" {image} url="blogs/{slug}" />
<PageLayout
	title={Title}
	rightComp={true}
	description=""
	bgImage=""
	bgColor="#0F0F0F"
	tagText={category}
>
	<SectionLayout className="pt-0 [&>p]:text-left [&>p]:my-8 z-[1] relative" customSection>
		{@html modifiedHtml}
	</SectionLayout>
	<FloatingActionButton />
</PageLayout>
<BannerCta />

<style>
	/* .work-section > p {
		text-align: unset !important;
	} */
</style>
