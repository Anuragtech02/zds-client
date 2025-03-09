<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import CustomHead from '$lib/components/CustomHead.svelte';
	import FloatingActionButton from '$lib/components/FloatingActionButton.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import WorkVideo from '$lib/sections/Work/WorkVideo.svelte';
	import { getImageUrl } from '$lib/utils/functions.js';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { fetchData } from '$lib/utils/functions.js';

	// Improve view transitions
	onNavigate((navigation) => {
		if (!document.startViewTransition || navigation.type !== 'link') return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	export let data;

	// Add safe default values for all destructured properties
	const {
		Page_Title = '',
		Page_Description = '',
		description = '',
		Work_Categories = { data: [] },
		bgImage = '',
		Bg_Image_File = {},
		categoryEndpoint = 'work-categories',
		locationFilter = null,
		seo = {}
	} = data || {};

	let imgSrc = getImageUrl(Bg_Image_File?.Image || bgImage);
	let imgSrcMobile = getImageUrl(Bg_Image_File?.mobileImage || bgImage);

	// Add safer extraction of categories with proper null checking
	let categories = ['All Categories'];

	console.log('Outer categories', Work_Categories);

	// Safely extract category names if Work_Categories exists and has data
	if (Work_Categories && Array.isArray(Work_Categories.data)) {
		const categoryNames = Work_Categories.data
			.map((category) => category?.attributes?.Name)
			.filter(Boolean);

		categories = ['All Categories', ...categoryNames];
	}

	let selectedCategory = categories[0];
	let isLoading = true;
	let works = [];
	let filteredWorks = [];
	let isScrolling = false;
	let scrollTimeout;

	// Function to fetch full category data with works
	async function fetchDetailedCategoryData() {
		isLoading = true;

		try {
			// Populate options for getting detailed category data with works
			const categoriesSearchParams = new URLSearchParams();
			categoriesSearchParams.append('populate[0]', 'Name');
			categoriesSearchParams.append('populate[1]', 'Description');
			categoriesSearchParams.append('populate[2]', 'Works');
			categoriesSearchParams.append('populate[3]', 'Works.Video');
			categoriesSearchParams.append('populate[4]', 'Works.Video_Thumbnail');
			categoriesSearchParams.append('populate[5]', 'Works.Video_Thumbnail_File.Image');
			categoriesSearchParams.append('populate[6]', 'Works.Video_Thumbnail_File.mobileImage');

			// Sort by updatedAt, newest first
			categoriesSearchParams.append('sort[0]', 'updatedAt:desc');

			// Add location filter if present
			if (locationFilter) {
				categoriesSearchParams.append('filters[Works][location][$eq]', locationFilter);
			}

			// Fetch full categories data
			const fullCategoriesData = await fetchData(
				categoryEndpoint,
				categoriesSearchParams.toString(),
				fetch
			);

			// Process works data - with deduplication
			let worksMap = new Map(); // Use a Map to track unique works by ID

			// Safely access the data array
			const categoriesData = fullCategoriesData || [];

			const locationStats = { withLocation: 0, withoutLocation: 0, locations: new Set() };

			categoriesData.forEach((category) => {
				if (!category?.attributes) return;

				const categoryName = category.attributes.Name;
				if (!categoryName) return;

				// Extract works from the correct nested structure
				const categoryWorks = category.attributes.Works?.data || [];

				categoryWorks.forEach((work) => {
					if (!work?.id || !work?.attributes) return;

					const work_data = work.attributes;
					const workId = work.id;
					if (work?.attributes?.location) {
						locationStats.withLocation++;
						locationStats.locations.add(work.attributes.location);
					} else {
						locationStats.withoutLocation++;
					}

					// Get video URL - nested in data.attributes structure
					let videoUrl = '';
					if (work_data.Video?.data?.attributes?.url) {
						videoUrl = work_data.Video.data.attributes.url;
					}

					// Get thumbnail URL - could be in Video_Thumbnail or Video_Thumbnail_File
					let thumbnailUrl = '';
					if (work_data.Video_Thumbnail?.data?.attributes?.url) {
						thumbnailUrl = work_data.Video_Thumbnail.data.attributes.url;
					}

					let thumbnailMobileUrl = thumbnailUrl;
					if (work_data.Video_Thumbnail_File?.Image) {
						thumbnailUrl = getImageUrl(work_data.Video_Thumbnail_File.Image);
						thumbnailMobileUrl = getImageUrl(
							work_data.Video_Thumbnail_File.mobileImage || work_data.Video_Thumbnail_File.Image
						);
					}

					// If we've seen this work before, just add the category to its categories array
					if (worksMap.has(workId)) {
						const existingWork = worksMap.get(workId);
						if (!existingWork.categories.includes(categoryName)) {
							existingWork.categories.push(categoryName);
						}
					} else {
						// If this is a new work, create a new entry
						worksMap.set(workId, {
							id: workId,
							categories: [categoryName],
							title: work_data?.Title || 'Untitled',
							description: work_data?.Description || '',
							shortDescription: work_data?.Short_Description || null,
							slug: work_data?.slug || workId.toString(),
							thumbnail: thumbnailUrl,
							thumbnailMobile: thumbnailMobileUrl,
							Video: videoUrl,
							order: work_data?.order || null,
							location: work_data?.location || null
						});
					}
				});
			});

			// Convert the Map back to an array and sort
			works = Array.from(worksMap.values()).sort((a, b) => {
				const orderA = a.order > 0 ? a.order : 1000;
				const orderB = b.order > 0 ? b.order : 1000;
				return orderA - orderB;
			});

			console.log('Processed works:', works);

			// Update filtered works
			updateFilteredWorks();
		} catch (error) {
			console.error('Error fetching category data:', error);
		} finally {
			isLoading = false;
		}
	}

	// Track scrolling to disable cursor during scroll
	function handleScroll() {
		isScrolling = true;
		document.documentElement.classList.add('is-scrolling');

		clearTimeout(scrollTimeout);
		scrollTimeout = setTimeout(() => {
			isScrolling = false;
			document.documentElement.classList.remove('is-scrolling');
		}, 150);
	}

	function updateFilteredWorks() {
		// First, filter by category
		let filtered = works.filter((work) => {
			if (selectedCategory === 'All Categories') {
				return true;
			}
			return work.categories.includes(selectedCategory);
		});

		// Then apply location filter if present
		if (locationFilter) {
			const lowerLocationFilter = locationFilter.toLowerCase();
			filtered = filtered.filter((work) => {
				// If work has no location and we're filtering for locations, exclude it
				if (!work.location) return false;

				// Case-insensitive matching
				return work.location.toLowerCase() === lowerLocationFilter;
			});

			console.log(
				`Location filtering: ${filtered.length} works match location "${locationFilter}"`
			);
		}

		filteredWorks = filtered;
	}

	let categoryChangeHandler = (category) => {
		selectedCategory = category;
		updateFilteredWorks();
	};

	function getCategoryDescription(cat) {
		if (cat === 'All Categories') {
			return description;
		}

		if (!Work_Categories?.data) return '';

		const category = Work_Categories.data.find((c) => c?.attributes?.Name === cat);
		return category?.attributes?.Description || '';
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		fetchDetailedCategoryData();

		return () => {
			window.removeEventListener('scroll', handleScroll);
			clearTimeout(scrollTimeout);
		};
	});

	$: if (selectedCategory) {
		updateFilteredWorks();
	}
</script>

<!-- <svelte:head>
	<style>
		.is-scrolling {
			cursor: default !important;
		}

		.is-scrolling * {
			cursor: default !important;
			transition: none !important;
			animation: none !important;
		}

		/* Hide custom cursor during scroll */
		.is-scrolling .cursor-element {
			opacity: 0 !important;
			visibility: hidden !important;
		}

		@keyframes pulse {
			0%, 100% {
				opacity: 0.5;
			}
			50% {
				opacity: 0.8;
			}
		}

		.animate-pulse {
			animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
		}
	</style>
</svelte:head> -->

<CustomHead {seo} />

<PageLayout
	title={Page_Title}
	description={Page_Description}
	bgImage={imgSrc}
	bgImageMobile={imgSrcMobile}
>
	<SectionLayout>
		<!-- Category tabs -->
		<div
			class="w-full flex justify-start xl:justify-start gap-10 items-center border-b-2 border-[#8D8D8D] pb-4 overflow-x-scroll lg:overflow-hidden"
		>
			{#each categories as category}
				<button
					class={`${
						category === selectedCategory ? 'active-category text-white' : 'text-[#8D8D8D]'
					} text-lg w-fit cursor-pointer relative whitespace-nowrap`}
					on:click={categoryChangeHandler.bind(null, category)}
				>
					{category}
				</button>
			{/each}
		</div>

		<!-- Category description -->
		<div class="lg:w-[60%] text-lg text-[#FFFFFF] font-light mt-8">
			{getCategoryDescription(selectedCategory)}
		</div>

		<!-- Works grid with category transitions -->
		{#key selectedCategory}
			<div
				in:fly={{ y: 50, duration: 300 }}
				class="w-full mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
			>
				{#if isLoading}
					<!-- Skeleton loading placeholders -->
					{#each Array(6) as _, i}
						<div class="h-[350px] rounded-xl bg-[#2a2a2a] animate-pulse" />
					{/each}
				{:else if filteredWorks.length === 0}
					<div class="col-span-3 text-center py-12">
						<p class="text-lg text-white">No works found in this category.</p>
					</div>
				{:else}
					{#each filteredWorks as video, i (video.id)}
						<div in:fly|local={{ y: 30, delay: Math.min(i * 50, 300), duration: 200 }}>
							<WorkVideo absolute={false} {video} fixedWidth={false} className="!m-0 w-full" />
						</div>
					{/each}
				{/if}
			</div>
		{/key}
	</SectionLayout>
	<FloatingActionButton />
</PageLayout>

<style>
	.active-category::after {
		content: '';
		display: block;
		width: 7px;
		height: 7px;
		position: absolute;
		left: 45%;
		border-radius: 100%;
		background-color: #ff00ce;
	}

	/* View transitions */
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}
</style>
