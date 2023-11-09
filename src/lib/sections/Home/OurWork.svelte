<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import { getImageUrl } from '$lib/utils/functions';
	import WorkVideo from '../Work/WorkVideo.svelte';
	export let data;
	let arr = data.works.data;
	// console.log(arr);
	const works = arr.map((a: any) => ({
		id: a?.id,
		title: a?.attributes.Work_Title,
		category: a?.attributes?.category?.data?.attributes?.Name,
		thumbnail: getImageUrl(a?.attributes?.Images[0]?.Image)
	}));
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
