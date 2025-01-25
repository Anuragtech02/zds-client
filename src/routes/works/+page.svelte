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

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	export let data;

	const { Page_Title, Page_Description, description, Work_Categories, bgImage, Bg_Image_File } =
		data;
	let imgSrc = getImageUrl(Bg_Image_File?.Image || bgImage);
	let imgSrcMobile = getImageUrl(Bg_Image_File?.mobileImage || bgImage);

	// Get categories directly from Work_Categories
	let categories = [
		'All Categories',
		...Work_Categories?.data?.map((category: any) => category?.attributes?.Name).filter(Boolean)
	];

	// Process works data - with deduplication
	let worksMap = new Map(); // Use a Map to track unique works by ID

	Work_Categories?.data
		?.sort(
			(a: { attributes: { updatedAt: string } }, b: { attributes: { updatedAt: string } }) =>
				new Date(b.attributes.updatedAt).getTime() - new Date(a.attributes.updatedAt).getTime()
		)
		.forEach((category: any) => {
			const categoryWorks = category?.attributes?.Works?.data || [];

			categoryWorks.forEach((w: any) => {
				const work_data = w?.attributes;
				const workId = w?.id;

				// If we've seen this work before, just add the category to its categories array
				if (worksMap.has(workId)) {
					const existingWork = worksMap.get(workId);
					if (!existingWork.categories.includes(category?.attributes?.Name)) {
						existingWork.categories.push(category?.attributes?.Name);
					}
				} else {
					// If this is a new work, create a new entry
					worksMap.set(workId, {
						id: workId,
						categories: [category?.attributes?.Name],
						title: work_data?.Title,
						description: work_data?.Description,
						shortDescription: work_data?.Short_Description || null,
						slug: work_data?.slug,
						thumbnail: getImageUrl(
							work_data?.Video_Thumbnail_File?.Image || work_data?.Video_Thumbnail
						),
						thumbnailMobile: getImageUrl(
							work_data?.Video_Thumbnail_File?.mobileImage || work_data?.Video_Thumbnail
						),
						Video: getImageUrl(work_data?.Video),
						order: work_data?.order || null
					});
				}
			});
		});

	// Convert the Map back to an array
	let works = Array.from(worksMap.values()).sort((a, b) => {
		const orderA = a.order > 0 ? a.order : 1000;
		const orderB = b.order > 0 ? b.order : 1000;
		return orderA - orderB;
	});

	onMount(() => {
		console.log(works);
	});

	let selectedCategory = categories[0];
	let categoryChangeHandler = (category: string) => {
		filteredWorks = [];
		selectedCategory = category;
	};

	function getCategoryDescription(cat: string) {
		if (cat === 'All Categories') {
			return description;
		}
		const category = Work_Categories?.data?.find((c: any) => c.attributes.Name === cat);
		return category?.attributes?.Description || '';
	}

	$: filteredWorks = works.filter((work: any) => {
		if (selectedCategory === 'All Categories') {
			return true;
		}
		return work.categories.includes(selectedCategory);
	});
</script>

<CustomHead seo={data.seo} />
<PageLayout
	title={Page_Title}
	description={Page_Description}
	bgImage={imgSrc}
	bgImageMobile={imgSrcMobile}
>
	<SectionLayout>
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

		{#key filteredWorks}
			<div in:fly={{ y: 100 }} class="lg:w-[60%] text-lg text-[#FFFFFF] font-light mt-8">
				{getCategoryDescription(selectedCategory)}
			</div>
		{/key}

		<div class="w-full mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each filteredWorks as video, i}
				{#key filteredWorks}
					<div in:fly={{ y: 100, delay: i * 100 }}>
						<WorkVideo absolute={false} {video} fixedWidth={false} className="!m-0 w-full" />
					</div>
				{/key}
			{/each}
		</div>
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
	.grid-muuri {
		position: relative;
	}

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
