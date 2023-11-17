<script lang="ts">
	import PageLayout from '$lib/layout/PageLayout.svelte';
	import WorkVideo from '$lib/sections/Work/WorkVideo.svelte';
	import { getImageUrl } from '$lib/utils/functions.js';
	import Muuri from 'muuri';

	export let data;
	console.log(data);
	const { Page_Title, Page_Description, description, Work_Categories, bgImage } = data;
	let imgSrc = getImageUrl(bgImage);
	var focus = (node: any) => {
		var grid = new Muuri('.grid-muuri');
	};

	let categories = [
		'All Categories',
		...Work_Categories?.data?.map((category: any) => {
			const Category_Name = category?.attributes?.Name;
			return Category_Name;
		})
	];
	let works = Work_Categories?.data?.map((category: any) => {
		const work = category?.attributes?.Works?.data?.map((w: any) => {
			const work_data = w?.attributes;
			return {
				id: w?.id,
				category: category?.attributes?.Name,
				title: work_data?.Title,
				description: work_data?.Description,
				slug: work_data?.slug,
				thumbnail: getImageUrl(work_data?.Video_Thumbnail),
				Video: getImageUrl(work_data?.Video)
			};
		});
		return work;
	});
	works = works.flat();
	console.log(works);

	let selectedCategory = categories[0];
	let categoryChangeHandler = (category: string) => {
		selectedCategory = category;
	};

	$: filteredWorks = works.filter((work: any) => {
		if (selectedCategory === 'All Categories') {
			return true;
		}
		return work.category === selectedCategory;
	});
	$: console.log(selectedCategory, works, filteredWorks);
</script>

<PageLayout title={Page_Title} description={Page_Description} bgImage={imgSrc}>
	<div class="min-h-screen flex flex-col justify-start items-start gap-12">
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
		{#each description.split('\n') as d}
			<div class="lg:w-[60%] text-lg text-[#FFFFFF] font-light">{d}</div>
		{/each}

		<div use:focus class="grid-muuri w-full h-full">
			{#key filteredWorks}
				{#each filteredWorks as video (video.id)}
					<WorkVideo fixedWidth={true} absolute={true} {video} />
				{/each}
			{/key}
		</div>
	</div>
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
</style>
