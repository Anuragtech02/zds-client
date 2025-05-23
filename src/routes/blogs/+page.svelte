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
	let imgSrcMobile = '';
	let Page_Title = 'Blogs';
	let Page_Description = '';
	let description = '';
	let Work_Categories: any = {};
	let bgImage = '';
	let bgImageMobile = '';
	let categories: any = [];

	let showNoDataFound = false;

	try {
		// const { Page_Title, Page_Description, description, Work_Categories, bgImage } = data;
		Page_Title = 'Blogs';
		Page_Description = data?.Page_Description;
		description = data?.description;
		Work_Categories = data?.Work_Categories;
		bgImage = data?.Bg_Image_File.Image;
		bgImageMobile = data?.Bg_Image_File.mobileImage;

		imgSrc = getImageUrl(bgImage);
		imgSrcMobile = getImageUrl(bgImageMobile);

		categories = [
			'All Categories',
			...Work_Categories?.data?.map((category: any) => {
				const Category_Name = category?.attributes?.Name;
				return Category_Name;
			})
		];
		let blogsMap = new Map();

		Work_Categories?.data?.forEach((category: any) => {
			const blogs = category?.attributes?.blogs?.data || [];

			blogs.forEach((blog: any) => {
				const work_data = blog?.attributes;
				const blogId = blog?.id;

				if (blogsMap.has(blogId)) {
					const existingBlog = blogsMap.get(blogId);
					if (!existingBlog.categories.includes(category?.attributes?.Name)) {
						existingBlog.categories.push(category?.attributes?.Name);
					}
				} else {
					blogsMap.set(blogId, {
						id: blog?.id,
						categories: [category?.attributes?.Name],
						title: work_data?.Title,
						description: work_data?.Description,
						slug: work_data?.slug,
						video: {
							id: blog?.id,
							title: work_data?.Title,
							categories: [category?.attributes?.Name],
							slug: work_data?.slug,
							thumbnail: getImageUrl(work_data?.thumbnail),
							Video: '',
							shortDescription: work_data?.Short_Description || null
						},
						createdAt: work_data?.createdAt,
						updatedAt: work_data?.updatedAt
					});
				}
			});
		});

		works = Array.from(blogsMap.values());
		selectedCategory = categories[0];
	} catch (error) {
		console.log('Nothing found', error);
		showNoDataFound = true;
	}

	let categoryChangeHandler = (category: string) => {
		selectedCategory = category;
	};

	$: filteredWorks = works
		.filter((work: any) => {
			if (selectedCategory === 'All Categories') {
				return true;
			}
			return work.categories.includes(selectedCategory);
		})
		// @ts-expect-error - Type 'string' is not assignable to type 'number'
		.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

	console.log(works);

	function getCategoryDescription(cat: string) {
		// check for all categories
		if (cat === 'All Categories') {
			return description;
		}
		// check for other categories
		const category = Work_Categories?.data?.find((c: any) => c.attributes.Name === cat);
		return category?.attributes?.Description || '';
	}
</script>

<CustomHead seo={data.seo} />
<PageLayout
	title={Page_Title}
	description={''}
	bgImage={imgSrc}
	renderTitleAsH1
	bgImageMobile={imgSrcMobile}
>
	<SectionLayout className="py-[50px]">
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
				{getCategoryDescription(selectedCategory)}
			</div>
			<!-- {/each} -->

			<div class="w-full mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{#key filteredWorks}
					{#each filteredWorks as video, i}
						<!-- <div class="item"> -->
						<div
							in:fly={{
								y: 100,
								delay: i * 100
							}}
							class="flex flex-col h-full"
						>
							<WorkVideo
								absolute={false}
								video={video.video}
								type="blogs"
								fixedWidth={false}
								className="!m-0 w-full h-full"
							/>
						</div>
						<!-- </div> -->
					{/each}
				{/key}
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
