<script lang="ts">
	import WorkVideo from '$lib/sections/Work/WorkVideo.svelte';
	import Muuri from 'muuri';
	var focus = (node: any) => {
		var grid = new Muuri('.grid-muuri');
	};
	let categories = [
		'All Categories',
		'web',
		'design',
		'illustration',
		'branding',
		'photography',
		'app'
	];
	const works = [
		{
			id: 1,
			title: 'Animation &  Visual Packaging',
			category: 'web',
			thumbnail:
				'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'
		},
		{
			id: 2,
			title: 'Animation &  Visual Packaging',
			category: 'design',
			thumbnail:
				'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'
		},
		{
			id: 3,
			title: 'Animation &  Visual Packaging',
			category: 'web',
			thumbnail:
				'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'
		},
		{
			id: 4,
			title: 'Animation &  Visual Packaging',
			category: 'design',
			thumbnail:
				'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'
		},
		{
			id: 5,
			title: 'Animation &  Visual Packaging',
			category: 'web',
			thumbnail:
				'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'
		}
	];
	let selectedCategory = categories[0];
	let categoryChangeHandler = (category: string) => {
		selectedCategory = category;
	};

	$: filteredWorks = works.filter((work) => {
		if (selectedCategory === 'All Categories') {
			return true;
		}
		return work.category === selectedCategory;
	});
	$: console.log(selectedCategory, works, filteredWorks);
</script>

<div class="min-h-screen flex flex-col justify-start items-start gap-12">
	<div
		class="w-full flex justify-start md:justify-around gap-4 items-center border-b-2 pb-4 overflow-x-scroll lg:overflow-hidden"
	>
		{#each categories as category}
			<button
				class={`${
					category === selectedCategory ? 'active-category' : ''
				} text-lg w-fit cursor-pointer relative whitespace-nowrap`}
				on:click={categoryChangeHandler.bind(null, category)}
			>
				{category}
			</button>
		{/each}
	</div>
	<div class="lg:w-[60%] text-lg">
		Welcome to the heart of our creative journey- a showcase of our finest work across diverse
		services. Explore our portfolio, where each project represents, not just our expertise, but our
		unwavering dedication to turning ideas into captivating realities.
	</div>
	<div class="lg:w-[60%] text-lg">
		Our portfolio is a testament to our versatility, innovation, and dedication. Each project is a
		unique story of a collaborative effort, creativity, and unrestrained enthusiasm. Join us as we
		take you on a visual journey through our diverse range of projects.
	</div>
	<div use:focus class="grid-muuri w-full h-full">
		{#key filteredWorks}
			{#each filteredWorks as video (video.id)}
				<WorkVideo {video} />
			{/each}
		{/key}
	</div>
</div>

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
