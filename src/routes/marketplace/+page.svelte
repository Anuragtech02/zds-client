<script lang="ts">
	import { Button } from '$lib/components/index.js';
	import MarketplaceItem from '$lib/sections/MarketPlace/MarketplaceItem.svelte';
	import { getImageUrl } from '$lib/utils/functions.js';
	export let data;
	console.log(data);
	const { ContentDescription, ContentTitle } = data;

	let filters = data.market_place_items.data.map((item: any) => {
		let f = item.attributes.market_place_item_categories.data.map(
			(cat: any) => cat.attributes.category
		);
		return f;
	});
	filters = Array.from(new Set(filters.flat()));
	console.log({ filters });
	let items = data.market_place_items.data.map((item: any) => {
		let f = item.attributes;
		return {
			id: item.id,
			title: f.Title,
			description: f.Description,
			thumbnail: getImageUrl(f.Thumbnail),
			category: f.market_place_item_categories.data.map((cat: any) => cat.attributes.category)
		};
	});
	console.log({ items });
	let selectedFilters: Array<string> = [];

	let filteredItems = items;
	$: console.log(selectedFilters, filteredItems, filters);
	const checkBoxChangeHandler = (e: Event, filter: string) => {
		const target = e.target as HTMLInputElement;
		console.log(target.checked, filter);
		if (target.checked) {
			selectedFilters.push(filter);
		} else {
			selectedFilters = selectedFilters.filter((selectedFilter) => selectedFilter !== filter);
		}
		filteredItems = items.filter((item: any) => {
			if (selectedFilters.length === 0) {
				return true;
			}
			let bool = selectedFilters.some((selectedFilter) => item.category.includes(selectedFilter));
			console.log(bool, selectedFilters, item.category);
			return bool;
		});
		console.log(selectedFilters);
	};
</script>

<div class="flex flex-col gap-8">
	<div class="flex flex-col justify-between items-start w-full gap-4">
		<p class="text-lg text-left">{ContentTitle}</p>
		<p class="text-md text-left">
			{ContentDescription}
		</p>
	</div>
	<div class="border border-[#3A3A3A] flex flex-col md:flex-row rounded-lg min-h-screen">
		<div
			class=" md:flex-col md:border-r border-[#3A3A3A] md:justify-start md:items-start flex justify-between items-center relative overflow-x-auto overflow-y-hidden border-b"
		>
			<p
				class="border-r md:px-8 md:border-0 border-[#3A3A3A] md:border-b px-4 py-5 h-full w-full md:h-fit"
			>
				Filters
			</p>
			{#each filters as filter}
				<span class="flex md:px-8 justify-center items-center gap-4 w-full p-4">
					<input
						type="checkbox"
						class="h-4 w-4 cursor-pointer"
						on:change={(e) => checkBoxChangeHandler(e, filter)}
					/>
					<p>
						{filter}
					</p>
				</span>
			{/each}
		</div>
		<div class="md:w-full">
			<div class="flex justify-between items-center gap-4 p-8 border-[#3A3A3A] border-b md:py-3">
				<p class="text-lg">Lorem Ipsum Dolor</p>
				<Button
					link="https://envato.com"
					className="bg-white text-black hover:!bg-black hover:text-white">View All</Button
				>
			</div>
			<div class="grid grid-cols-1 p-2 gap-4 lg:gap-8 lg:p-8 lg:grid-cols-2">
				{#each filteredItems as item (item.id)}
					<MarketplaceItem {item} />
				{/each}
			</div>
		</div>
	</div>
</div>
