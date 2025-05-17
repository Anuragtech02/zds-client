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

	if (data) {
		Title = 'Anamorphic 3D Wireframe';
	}

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
		modifiedHtml = convertImagesToMasonryDivs(data.description);
	});
</script>

<!-- <CustomHead seo={data.attributes.seo} /> -->
<PageLayout
	title={Title}
	rightComp={true}
	description=""
	bgImage={'/images/headingBG.png'}
	bgImageMobile={'/images/headingBG.png'}
	bgColor="#0F0F0F"
	renderTitleAsH1
>
	<SectionLayout className="mt-10 pt-0 [&>p]:text-left [&>p]:my-4 z-[1] relative" customSection>
		{@html modifiedHtml}
	</SectionLayout>
	<FloatingActionButton />
</PageLayout>

<!-- <BannerCta /> -->

<style>
	/* .work-section > p {
		text-align: unset !important;
	} */
</style>
