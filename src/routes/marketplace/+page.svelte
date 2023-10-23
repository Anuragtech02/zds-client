<script lang="ts">
	import MarketplaceItem from '$lib/sections/MarketPlace/MarketplaceItem.svelte';

	let filters = ['Filter1', 'Filter2', 'Filter3', 'Filter4', 'Filter5'];
	let items = [
		{
			id: 1,
			title: 'Lorem Ipsum Dolor',
			description:
				'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
			category: ['Filter1'],
			thumbnail:
				'https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			id: 2,
			title: 'Lorem Ipsum Dolor',
			description:
				'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
			category: ['Filter1', 'Filter2'],
			thumbnail:
				'https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			id: 3,
			title: 'Lorem Ipsum Dolor',
			description:
				'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
			category: ['Filter1', 'Filter2', 'Filter3'],
			thumbnail:
				'https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			id: 4,
			title: 'Lorem Ipsum Dolor',
			description:
				'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
			category: ['Filter1', 'Filter2', 'Filter3', 'Filter4'],
			thumbnail:
				'https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			id: 5,
			title: 'Lorem Ipsum Dolor',
			description:
				'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
			category: ['Filter1', 'Filter2', 'Filter3', 'Filter4', 'Filter5'],
			thumbnail:
				'https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		},
		{
			id: 6,
			title: 'Lorem Ipsum Dolor',
			description:
				'Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
			category: ['Filter1', 'Filter2', 'Filter3', 'Filter4', 'Filter5'],
			thumbnail:
				'https://images.unsplash.com/photo-1454942901704-3c44c11b2ad1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		}
	];
	let selectedFilters: Array<string> = [];
	let filteredItems = items;
	$: console.log(selectedFilters, filteredItems);
	const checkBoxChangeHandler = (e: Event, filter: string) => {
		const target = e.target as HTMLInputElement;
		if (target.checked) {
			selectedFilters.push(filter);
		} else {
			selectedFilters = selectedFilters.filter((selectedFilter) => selectedFilter !== filter);
		}
		filteredItems = items.filter((item) => {
			if (selectedFilters.length === 0) {
				return true;
			}
			return selectedFilters.some((selectedFilter) => item.category.includes(selectedFilter));
		});
		console.log(selectedFilters);
	};
</script>

<div class="flex flex-col gap-8">
	<div class="flex flex-col justify-between items-start w-full gap-4">
		<p class="text-lg text-left">Lorem Ipsum Dolor</p>
		<p class="text-md text-left">
			Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
			interdum, ac aliquet odio mattis.
		</p>
	</div>
	<div class="border border-[#3A3A3A] flex flex-col md:flex-row rounded-lg min-h-screen">
		<div
			class=" md:flex-col md:border-r border-[#3A3A3A] md:justify-start md:items-start flex justify-between items-center relative overflow-x-auto overflow-y-hidden border-b"
		>
			<p
				class="border-r md:px-8 md:border-0 border-[#3A3A3A] md:border-b px-4 py-4 h-full w-full md:h-fit"
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
				<button
					class="rounded-3xl bg-white text-black px-8 py-2 hover:bg-black border hover:text-white"
				>
					View All
				</button>
			</div>
			<div class="grid grid-cols-1 p-2 gap-4 lg:gap-8 lg:p-8 lg:grid-cols-2">
				{#each filteredItems as item (item.id)}
					<MarketplaceItem {item} />
				{/each}
			</div>
		</div>
	</div>
</div>
