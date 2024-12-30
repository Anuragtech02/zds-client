<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import DecorationLeft from '$lib/components/DecorationLeft.svelte';
	import OutlinedText from '$lib/components/OutlinedText.svelte';
	import SectionLayout from '$lib/layout/SectionLayout.svelte';
	import { breakSentence, getImageUrl } from '$lib/utils/functions';
	import { fade } from 'svelte/transition';
	import WorkVideo from '../Work/WorkVideo.svelte';
	import { onMount, onDestroy } from 'svelte';
	export let data;

	let arr = data.works.data;
	let title = data.title;
	let { initialWords, lastWord } = breakSentence(title);
	let expandedIndex = 0;
	let isHovering = false;
	let intervalId: any;

	const AUTOPLAY_INTERVAL = 3000; // 3 seconds per project

	const works = arr.map((a: any) => ({
		slug: a?.attributes.slug,
		title: a?.attributes.Title,
		category: a?.attributes?.category?.data?.attributes?.Name,
		Video: a?.attributes?.Video?.data?.attributes?.url,
		thumbnail: getImageUrl(a?.attributes?.Video_Thumbnail, 'original'),
		description: a?.attributes?.Description,
		shortDescription: a?.attributes?.Short_Description || null
	}));

	let isMobile = false;

	function checkMobile() {
		if (typeof window !== 'undefined') {
			isMobile = window.innerWidth < 768;
		}
	}

	function startAutoplay() {
		if (intervalId) clearInterval(intervalId);
		intervalId = setInterval(() => {
			if (!isHovering && !isMobile) {
				expandedIndex = (expandedIndex + 1) % works.length;
			}
		}, AUTOPLAY_INTERVAL);
	}

	function handleMouseEnter() {
		isHovering = true;
	}

	function handleMouseLeave() {
		isHovering = false;
	}

	onMount(() => {
		startAutoplay();
	});

	onDestroy(() => {
		if (intervalId) clearInterval(intervalId);
	});
</script>

<svelte:window on:resize={checkMobile} />

<SectionLayout padding="pb-[20px] sm:pb-[150px]">
	<div class="flex flex-col justify-center items-center">
		<h2 class="self-start">
			<OutlinedText text={initialWords} className="mt-4" />
			{lastWord}
		</h2>

		<!-- Desktop Layout -->
		<div class="hidden md:flex w-full mt-6 h-[85vh] gap-2 bg-gray-900 rounded-2xl p-2">
			{#each works as video, index}
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="relative transition-all duration-700 ease-in-out cursor-pointer rounded-2xl overflow-hidden"
					style="flex: {expandedIndex === index ? '0 0 60%' : '0 0 13.33%'}"
					on:mouseenter={() => (expandedIndex = index)}
					on:click={() => goto(`/works/${video.slug}`)}
				>
					<!-- Background Image -->
					<div class="absolute inset-0">
						<img src={video.thumbnail} alt={video.title} class="h-full w-full object-cover" />
					</div>

					{#if expandedIndex === index}
						<!-- Category Tag - Only visible when expanded -->
						<div
							class="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-sm px-4 py-1 rounded-full text-sm text-white"
							in:fade={{ duration: 500 }}
						>
							{video.category}
						</div>

						<!-- Gradient Overlay - Only visible when expanded -->
						<div class="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/90" />

						<!-- Content - Only visible when expanded -->
						<div
							class="absolute bottom-0 left-0 right-0 p-6"
							in:fade={{ duration: 500, delay: 100 }}
						>
							<h3 class="text-2xl font-medium text-white mb-4 text-left">{video.title}</h3>
							{#if video?.shortDescription}
								<p class="text-white/80 mb-6 line-clamp-2">
									{video?.shortDescription}
								</p>
							{/if}
							<button
								class="px-6 py-2 bg-white text-black rounded-full hover:bg-white/90 transition-colors"
							>
								More
							</button>
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Mobile Layout -->
		<div class="md:hidden w-full overflow-x-auto snap-x snap-mandatory flex gap-4 mt-6">
			{#each works as video}
				<div class="snap-center min-w-full">
					<WorkVideo {video} fixedWidth={false} absolute={false} />
				</div>
			{/each}
		</div>

		<Button className="mt-20 our-work-btn translate-y-[100px] opacity-0" link="/works">
			Explore More
		</Button>
	</div>
</SectionLayout>

<DecorationLeft bottom={'-30px'} />

<style>
	.overflow-x-auto {
		scrollbar-width: none;
		-ms-overflow-style: none;
	}

	.overflow-x-auto::-webkit-scrollbar {
		display: none;
	}
</style>
