<script lang="ts">
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import FloatingActionButton from '$lib/components/FloatingActionButton.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import CustomHead from '$lib/components/CustomHead.svelte';
	import FAQSection from '$lib/sections/FAQSection.svelte';
	import { onMount } from 'svelte';

	export let data: any;
	export let Title = '';

	// Expect fields: title (or Name), description (rich HTML), seo
	if (data) {
		Title = data?.Title || data?.title || data?.Name || '';
	}

	let modifiedHtml: string = '';

	function convertImagesToMasonryDivs(htmlString: string) {
		const parser = new DOMParser();
		const doc = parser.parseFromString(htmlString, 'text/html');
		const allImages = doc.querySelectorAll('img');
		if (allImages.length === 0) return htmlString;

		const imageContainer = document.createElement('div');
		imageContainer.className = 'cms-image-container';
		const elementsToRemove = new Set<Element>();

		allImages.forEach((img) => {
			const parent = img.parentElement;
			const clonedImg = img.cloneNode(true) as HTMLImageElement;
			clonedImg.removeAttribute('style');
			imageContainer.appendChild(clonedImg);
			img.remove();
			if (parent && !parent.textContent?.trim() && parent.children.length === 0) {
				if (['FIGURE', 'P', 'DIV'].includes(parent.tagName)) {
					elementsToRemove.add(parent);
				}
			}
		});

		elementsToRemove.forEach((el) => el.parentNode?.removeChild(el));

		let insertLocation: Element | null = null;
		const allElements = doc.body.querySelectorAll('*');
		for (const element of allElements) {
			if (element.textContent && element.textContent.includes('Examples')) {
				insertLocation = element as Element;
				break;
			}
		}
		if (insertLocation) {
			insertLocation.insertAdjacentElement('afterend', imageContainer);
		} else {
			const firstParagraph = doc.querySelector('p');
			if (firstParagraph) firstParagraph.insertAdjacentElement('afterend', imageContainer);
			else doc.body.insertBefore(imageContainer, doc.body.firstChild);
		}
		return doc.body.innerHTML;
	}

	onMount(() => {
		const description = data?.description || data?.Description || '';
		modifiedHtml = description ? convertImagesToMasonryDivs(description) : '';
	});
</script>

<CustomHead seo={data?.seo} />
<PageLayout
	title={Title}
	rightComp={true}
	description=""
	bgImage={'/images/headingBG.png'}
	bgImageMobile={'/images/headingBG.png'}
	bgColor="#0F0F0F"
>
	<SectionLayout className="custom-section mt-10 pt-0 z-[1] relative" customSection>
		<div class="max-w-[786px] mx-auto [&>p]:my-4">
			{@html modifiedHtml}
		</div>
	</SectionLayout>

	{#if data?.faq}
		<FAQSection faqs={data.faq.items} title={data.faq.title} />
	{/if}

	<FloatingActionButton />
</PageLayout>

<style>
	/* Solution content typography */
	:global(.custom-section h1) {
		font-size: 1.8rem;
		line-height: 1.3;
		text-align: initial;
	}

	:global(.custom-section h2) {
		font-size: 1.2rem;
		line-height: 1.4;
		text-align: initial;
	}

	:global(.custom-section h3) {
		font-size: 1.1rem;
		line-height: 1.4;
		text-align: initial;
	}

	/* Responsive font sizes */
	@media (min-width: 640px) {
		:global(.custom-section h1) {
			font-size: 2rem;
		}

		:global(.custom-section h2) {
			font-size: 1.3rem;
		}

		:global(.custom-section h3) {
			font-size: 1.2rem;
		}
	}

	@media (min-width: 1024px) {
		:global(.custom-section h1) {
			font-size: 2.5rem;
		}

		:global(.custom-section h2) {
			font-size: 1.5rem;
		}

		:global(.custom-section h3) {
			font-size: 1.3rem;
		}
	}
</style>
