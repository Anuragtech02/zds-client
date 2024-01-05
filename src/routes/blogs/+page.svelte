<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import CustomHead from '$lib/components/CustomHead.svelte';
	import FloatingActionButton from '$lib/components/FloatingActionButton.svelte';
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import WorkVideo from '$lib/sections/Work/WorkVideo.svelte';
	import { getImageUrl } from '$lib/utils/functions.js';
	import { fly } from 'svelte/transition';

	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	export let data;
	let works: any = [];
	let selectedCategory: any = {};
	let imgSrc = '';
	let Page_Title = '';
	let Page_Description = '';
	let description = '';
	let Work_Categories: any = {};
	let bgImage = '';
	let categories: any = [];

	let showNoDataFound = false;

	try {
		// const { Page_Title, Page_Description, description, Work_Categories, bgImage } = data;
		Page_Title = data?.Page_Title;
		Page_Description = data?.Page_Description;
		description = data?.description;
		Work_Categories = data?.Work_Categories;
		bgImage = data?.bgImage;

		imgSrc = getImageUrl(bgImage);

		categories = [
			'All Categories',
			...Work_Categories?.data?.map((category: any) => {
				const Category_Name = category?.attributes?.Name;
				return Category_Name;
			})
		];
		works = Work_Categories?.data?.map((category: any) => {
			const work = category?.attributes?.blogs?.data?.map((w: any) => {
				const work_data = w?.attributes;
				return {
					id: w?.id,
					category: category?.attributes?.Name,
					title: work_data?.Title,
					description: work_data?.Description,
					slug: work_data?.slug
				};
			});
			return work;
		});
		works = works.flat();

		selectedCategory = categories[0];
	} catch (error) {
		showNoDataFound = true;
	}

	let categoryChangeHandler = (category: string) => {
		selectedCategory = category;
	};

	$: filteredWorks = works.filter((work: any) => {
		if (selectedCategory === 'All Categories') {
			return true;
		}
		return work.category === selectedCategory;
	});
</script>

<CustomHead title={Page_Title} description={Page_Description} url="blogs" />
<PageLayout title={Page_Title} description={Page_Description} bgImage={imgSrc}>
	<SectionLayout>
		{#if showNoDataFound}
			<h4>Oops, No content yet</h4>
			<p>No blogs to display</p>
		{:else}
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
			<!-- {#each description.split('\n') as d} -->
			<div in:fly={{ y: 100 }} class="lg:w-[60%] text-lg text-[#FFFFFF] font-light mt-8">
				{description}
			</div>
			<!-- {/each} -->

			<div class="w-full mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<!-- {#key filteredWorks} -->
				{#each filteredWorks as video, i}
					<!-- <div class="item"> -->
					<div
						in:fly={{
							y: 100,
							delay: i * 100
						}}
					>
						<!-- <WorkVideo absolute={false} {video} fixedWidth={false} className="!m-0 w-full" /> -->
					</div>
					<!-- </div> -->
				{/each}
				<!-- {/key} -->
			</div>
		{/if}
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
