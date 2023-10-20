<script lang="ts">
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import WorkVideo from '../Work/WorkVideo.svelte';

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
	var focus = (node: any) => {
		// var grid = new Muuri('.grid-muuri');
	};
</script>

<div class="py-4 px-32 flex flex-col justify-center items-center">
	<h2 class="self-start ml-16">
		<OutlinedText text="OUR" className="mt-4" />
		WORK
	</h2>
	<div class="relative min-w-screen min-h-screen grid xl:grid-cols-2 mt-6">
		{#each works as video}
			<WorkVideo {video} absolute={false} />
		{/each}
	</div>
	<button
		class="mt-16 rounded-3xl backdrop-blur-md border px-8 py-2 hover:bg-white hover:text-black"
	>
		Explore More
	</button>
</div>
