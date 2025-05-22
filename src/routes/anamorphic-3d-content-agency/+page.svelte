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
		Title = 'Anamorphic 3D';
	}

	let modifiedHtml: string = '';

	function convertImagesToMasonryDivs(htmlString) {
		// Parse the HTML string into a document object
		const parser = new DOMParser();
		const doc = parser.parseFromString(htmlString, 'text/html');

		// Find all images in the document
		const allImages = doc.querySelectorAll('img');

		if (allImages.length === 0) {
			return htmlString; // Return original if no images found
		}

		// Create a single container for all images
		const imageContainer = document.createElement('div');
		imageContainer.className = 'cms-image-container';

		// Track elements that need to be removed after moving images
		const elementsToRemove = new Set();

		// Process each image
		allImages.forEach((img) => {
			const parent = img.parentElement;

			// Clone the image to preserve attributes but remove inline styles
			const clonedImg = img.cloneNode(true);
			clonedImg.removeAttribute('style'); // Remove inline styles that interfere with grid

			// Add to our image container
			imageContainer.appendChild(clonedImg);

			// Mark the original image for removal
			img.remove();

			// If the parent becomes empty, mark it for removal
			if (parent && !parent.textContent.trim() && parent.children.length === 0) {
				// Check if it's a figure, p, or div that contained only the image
				if (['FIGURE', 'P', 'DIV'].includes(parent.tagName)) {
					elementsToRemove.add(parent);
				}
			}
		});

		// Remove empty containers
		elementsToRemove.forEach((element) => {
			if (element.parentNode) {
				element.parentNode.removeChild(element);
			}
		});

		// Find a good spot to insert the image container
		// Look for the "Examples" heading and insert after it
		let insertLocation = null;
		const allElements = doc.body.querySelectorAll('*');

		for (const element of allElements) {
			if (
				element.textContent &&
				element.textContent.includes('Examples of Anamorphic 3D Content')
			) {
				insertLocation = element;
				break;
			}
		}

		if (insertLocation) {
			// Insert after the examples heading
			insertLocation.insertAdjacentElement('afterend', imageContainer);
		} else {
			// Fallback: insert after the first paragraph
			const firstParagraph = doc.querySelector('p');
			if (firstParagraph) {
				firstParagraph.insertAdjacentElement('afterend', imageContainer);
			} else {
				// Last resort: prepend to body
				doc.body.insertBefore(imageContainer, doc.body.firstChild);
			}
		}

		// Return the modified HTML
		return doc.body.innerHTML;
	}

	onMount(() => {
		if (data?.description) {
			modifiedHtml = convertImagesToMasonryDivs(data.description);
		}
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
	<SectionLayout
		className="custom-section mt-10 pt-0 [&>p]:text-left [&>p]:my-4 z-[1] relative"
		customSection
	>
		{@html modifiedHtml}
	</SectionLayout>
	<FloatingActionButton />
</PageLayout>

<!-- <BannerCta /> -->

<style>
</style>
