<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import WorkVideo from '../Work/WorkVideo.svelte';
	export let data;
	console.log(data);
	const works = [
		{
			id: 1,
			title: 'Lorem Ipsum Dolor',
			category: 'Animation &  Visual Packaging',
			thumbnail: '/images/work/R385.png'
		},
		{
			id: 2,
			title: 'Lorem Ipsum Dolor',
			category: 'Animation &  Visual Packaging',
			thumbnail: '/images/work/R397.png'
		},
		{
			id: 3,
			title: 'Lorem Ipsum Dolor',
			category: 'Animation &  Visual Packaging',
			thumbnail: '/images/work/R398.png'
		},
		{
			id: 4,
			title: 'Lorem Ipsum Dolor',
			category: 'Animation &  Visual Packaging',
			thumbnail: '/images/work/R399.png'
		},
		{
			id: 5,
			title: 'Lorem Ipsum Dolor',
			category: 'Animation &  Visual Packaging',
			thumbnail: '/images/work/R400.png'
		},
		{
			id: 6,
			title: 'Lorem Ipsum Dolor',
			category: 'Animation &  Visual Packaging',
			thumbnail: '/images/work/R401.png'
		}
	];
</script>

<SectionLayout padding="pb-[200px]">
	<div class=" flex flex-col justify-center items-center">
		<h2 class="self-start">
			<OutlinedText text="OUR" className="mt-4" />
			WORK
		</h2>
		<div
			class="relative min-w-screen w-full gap-4 grid justify-center sm:grid-cols-2 lg:grid-cols-3 mt-6"
		>
			{#each works as video}
				<WorkVideo fixedWidth={false} {video} absolute={false} />
			{/each}
		</div>
		<Button className="mt-20 our-work-btn translate-y-[100px] opacity-0" link="/work"
			>Explore More</Button
		>
	</div>
</SectionLayout>
