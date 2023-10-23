<script lang="ts">
	import MarketplaceItem from '$lib/sections/MarketPlace/MarketplaceItem.svelte';

	let filters = ['Filter1', 'Filter2', 'Filter3', 'Filter4', 'Filter5'];
</script>

<div class="flex flex-col gap-8">
	<div class="flex flex-col justify-between items-start w-full gap-4">
		<p class="text-lg text-left">Lorem Ipsum Dolor</p>
		<p class="text-md text-left">
			Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
			interdum, ac aliquet odio mattis.
		</p>
	</div>
	<div class="border flex flex-col md:flex-row rounded-lg min-h-screen">
		<div
			class=" md:flex-col md:border-r md:justify-start md:items-start flex justify-between items-center relative overflow-x-auto overflow-y-hidden border-b"
		>
			<p class="border-r md:px-8 md:border-0 md:border-b px-4 py-4 h-full w-full md:h-fit">
				Filters
			</p>
			{#each filters as filter}
				<span class="flex md:px-8 justify-center items-center gap-4 w-full p-4">
					<input type="checkbox" class="h-4 w-4" />
					<p>
						{filter}
					</p>
				</span>
			{/each}
		</div>
		<div class="md:w-full">
			<div class="flex justify-between items-center gap-4 p-8 border-b md:py-3">
				<p class="text-lg">Lorem Ipsum Dolor</p>
				<button
					class="rounded-2xl bg-white text-black px-4 py-2 hover:bg-black hover:border hover:text-white"
				>
					View All
				</button>
			</div>
			<div class="grid grid-cols-1 p-2 gap-4 lg:gap-8 lg:p-8 lg:grid-cols-2">
				{#each [1, 1, 1, 1, 1, 1] as item}
					<MarketplaceItem />
				{/each}
			</div>
		</div>
	</div>
</div>
