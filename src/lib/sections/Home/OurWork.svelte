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

	const AUTOPLAY_INTERVAL = 4000; // 3 seconds per project

	const works = arr.map((a: any) => ({
		slug: a?.attributes.slug,
		title: a?.attributes.Title,
		categories: a?.attributes?.categories?.data?.map((cat: any) => cat?.attributes?.Name) || [],
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
		<!-- Desktop Layout -->
		<div class="hidden md:block w-full mt-6 h-[85vh] bg-gray-900 rounded-2xl overflow-hidden">
			<div
				class="grid w-full h-full p-2 gap-2"
				style="grid-template-columns: {expandedIndex === 0
					? 'minmax(0, 60%) minmax(0, 13.33%) minmax(0, 13.33%) minmax(0, 13.33%)'
					: expandedIndex === 1
					? 'minmax(0, 13.33%) minmax(0, 60%) minmax(0, 13.33%) minmax(0, 13.33%)'
					: expandedIndex === 2
					? 'minmax(0, 13.33%) minmax(0, 13.33%) minmax(0, 60%) minmax(0, 13.33%)'
					: 'minmax(0, 13.33%) minmax(0, 13.33%) minmax(0, 13.33%) minmax(0, 60%)'}; transition: grid-template-columns 400ms ease-in-out;"
			>
				{#each works?.slice(0, 4) as video, index}
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="relative cursor-pointer rounded-xl overflow-hidden transition-transform duration-400 ease-in-out"
						on:mouseenter={() => {
							expandedIndex = index;
							clearTimeout(intervalId);
						}}
						on:click={() => goto(`/works/${video.slug}`)}
					>
						<!-- Background Image -->
						<div class="absolute inset-0">
							<img src={video.thumbnail} alt={video.title} class="h-full w-full object-cover" />
						</div>

						{#if expandedIndex === index}
							<!-- Category Tag - Only visible when expanded -->
							<div
								class="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-sm text-white flex flex-wrap justify-end gap-1 max-w-[calc(100%-2rem)]"
								in:fade={{ duration: 300 }}
							>
								{#each video.categories as category}
									<span
										class="text-xs md:text-sm rounded-full px-2 py-1 bg-[#404040] whitespace-nowrap"
									>
										{category}
									</span>
								{/each}
							</div>

							<!-- Gradient Overlay - Only visible when expanded -->
							<div class="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/90" />

							<!-- Content - Only visible when expanded -->
							<div class="absolute bottom-0 left-0 right-0 p-4 md:p-6" in:fade={{ duration: 300 }}>
								<h3
									class="text-lg md:text-2xl font-medium text-white mb-2 md:mb-4 text-left line-clamp-2"
								>
									{video.title}
								</h3>
								{#if video?.shortDescription}
									<p class="text-white/80 mb-3 md:mb-6 line-clamp-2 text-sm md:text-base">
										{video?.shortDescription}
									</p>
								{/if}
								<button
									class="px-3 py-1 md:px-6 md:py-2 bg-white text-black rounded-full hover:bg-white/90 transition-colors text-sm md:text-base"
								>
									More
								</button>
							</div>
						{/if}
					</div>
				{/each}
			</div>
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
