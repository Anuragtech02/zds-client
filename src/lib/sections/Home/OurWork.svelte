<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import DecorationLeft from '$lib/components/DecorationLeft.svelte';
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import { breakSentence, getImageUrl } from '$lib/utils/functions';
	import WorkVideo from '../Work/WorkVideo.svelte';
	export let data;

	let arr = data.works.data;
	let title = data.title;
	let { initialWords, lastWord } = breakSentence(title);

	console.log(arr);
	const works = arr.map((a: any) => ({
		slug: a?.attributes.slug,
		title: a?.attributes.Title,
		category: a?.attributes?.category?.data?.attributes?.Name,
		Video: a?.attributes?.Video?.data?.attributes?.url,
		thumbnail: getImageUrl(a?.attributes?.Video_Thumbnail, 'original')
	}));
</script>

<SectionLayout padding="pb-[200px]">
	<div class=" flex flex-col justify-center items-center">
		<h2 class="self-start">
			<OutlinedText text={initialWords} className="mt-4" />
			{lastWord}
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
<DecorationLeft bottom={'90%'} />
