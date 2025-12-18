<script lang="ts">
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import FloatingActionButton from '$lib/components/FloatingActionButton.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import CustomHead from '$lib/components/CustomHead.svelte';
	import { goto } from '$app/navigation';

	export let data: any;

	// Extract pages, location and page data
	$: pages = data?.pages || [];
	$: location = data?.location || '';
	$: pageData = data?.pageData;

	// Handle page card click
	function handlePageClick(slug: string) {
		goto(`/${location}/${slug}`);
	}

	// Extract description text from HTML for preview
	function extractTextFromHtml(html: string, maxLength: number = 150): string {
		if (!html) return '';

		// Check if we're in the browser (not SSR)
		if (typeof document === 'undefined') {
			// Simple HTML tag removal for SSR
			const text = html.replace(/<[^>]*>/g, '');
			return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
		}

		// Browser-side HTML parsing
		const div = document.createElement('div');
		div.innerHTML = html;
		const text = div.textContent || div.innerText || '';
		return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
	}
</script>

<CustomHead seo={pageData?.seo} />
<PageLayout
	title={pageData?.title || 'Location'}
	rightComp={true}
	description={pageData?.description || ''}
	bgImage={'/images/headingBG.png'}
	bgImageMobile={'/images/headingBG.png'}
	bgColor="#0F0F0F"
	renderTitleAsH1
>
	<SectionLayout className="custom-section mt-10 pt-0 z-[1] relative" customSection>
		{#if pages.length > 0}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each pages as page}
					{@const attributes = page.attributes || page}
					{@const title = attributes.title}
					{@const description = attributes.description}
					{@const slug = attributes.slug}

					<div
						class="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
						on:click={() => handlePageClick(slug)}
						on:keydown={(e) => e.key === 'Enter' && handlePageClick(slug)}
						role="button"
						tabindex="0"
					>
						<div class="p-6">
							<h3
								class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3"
							>
								{title}
							</h3>

							{#if description}
								<p class="text-gray-400 text-sm leading-relaxed text-left">
									{extractTextFromHtml(description)}
								</p>
							{/if}

							<div class="mt-4 flex items-center text-blue-400 text-sm">
								<span>Learn more</span>
								<svg
									class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<div class="text-center py-16">
				<div class="text-gray-500 mb-4">
					<svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 7a2 2 0 012-2h10a2 2 0 012 2v2M7 7h10"
						/>
					</svg>
				</div>
				<h3 class="text-xl text-white mb-2">No pages found</h3>
				<p class="text-gray-400">Pages for this location will appear here once they are published.</p>
			</div>
		{/if}
	</SectionLayout>
	<FloatingActionButton />
</PageLayout>

<style>
</style>
