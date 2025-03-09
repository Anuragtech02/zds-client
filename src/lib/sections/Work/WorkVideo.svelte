<script lang="ts">
	import { goto } from '$app/navigation';
	import { cursorStore } from '$lib/stores/cursor.store';
	import { onDestroy, onMount } from 'svelte';

	let container: HTMLDivElement;
	let isVisible = false;
	let observer: IntersectionObserver;
	let imageLoaded = false;

	export let video: {
		id: number;
		title: string;
		description?: string;
		shortDescription?: string;
		categories: string[];
		slug: string;
		thumbnail: string;
		thumbnailMobile?: string;
		Video: string;
	};

	export let type: 'works' | 'blogs' = 'works';
	export let className: string = '';
	export let fixedWidth = true;
	export let absolute = true;

	let heading = video.title;
	let categories = video.categories;

	// Throttle function to limit cursor update frequency
	function throttle(func: Function, limit: number) {
		let lastFunc: number;
		let lastRan: number;
		return function (...args: any[]) {
			if (!lastRan) {
				func(...args);
				lastRan = Date.now();
			} else {
				clearTimeout(lastFunc);
				lastFunc = window.setTimeout(function () {
					if (Date.now() - lastRan >= limit) {
						func(...args);
						lastRan = Date.now();
					}
				}, limit - (Date.now() - lastRan));
			}
		};
	}

	const showCursor = throttle(() => {
		$cursorStore.type = 'link';
		$cursorStore.showCursor = true;
	}, 100);

	const hideCursor = throttle(() => {
		$cursorStore.type = 'default';
		$cursorStore.showCursor = false;
	}, 100);

	function handleImageLoad() {
		imageLoaded = true;
	}

	onMount(() => {
		// Set up intersection observer for lazy loading
		if (typeof IntersectionObserver !== 'undefined') {
			observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) {
						isVisible = true;
						// Once visible, we can disconnect the observer
						observer.disconnect();
					}
				},
				{
					rootMargin: '200px', // Load images 200px before they enter viewport
					threshold: 0.01
				}
			);

			if (container) {
				observer.observe(container);
			}
		} else {
			// Fallback for browsers that don't support IntersectionObserver
			isVisible = true;
		}

		// Add cursor event listeners with passive flag for better performance
		if (container) {
			container.addEventListener('mouseenter', showCursor, { passive: true });
			container.addEventListener('mouseleave', hideCursor, { passive: true });
		}
	});

	onDestroy(() => {
		// Clean up observer
		if (observer && container) {
			observer.disconnect();
		}

		// Clean up event listeners
		if (container) {
			container.removeEventListener('mouseenter', showCursor);
			container.removeEventListener('mouseleave', hideCursor);
		}

		// Reset cursor store
		$cursorStore.showCursor = false;
	});
</script>

<div
	class={`item ${fixedWidth ? 'w-[300px] m-6 responsive-item' : 'w-full'} ${
		absolute ? 'absolute' : ''
	} ${className}`}
	bind:this={container}
>
	<div class="item-content h-full">
		{#if isVisible}
			<div
				role="button"
				tabindex="0"
				on:keypress={() => goto(`/${type}/${video.slug}`)}
				on:click={() => goto(`/${type}/${video.slug}`)}
				class="h-full w-full p-1 rounded-xl bg-[#404040] relative {!imageLoaded
					? 'image-loading'
					: ''}"
			>
				<!-- Image with lazy loading -->
				<div class="block rounded-xl overflow-hidden object-cover h-[250px] w-full aspect-[2]">
					<img
						src={window.innerWidth < 500
							? video.thumbnailMobile || video.thumbnail
							: video.thumbnail}
						alt={heading}
						class="block rounded-xl object-cover h-full w-full transition-opacity duration-300 {imageLoaded
							? 'opacity-100'
							: 'opacity-0'}"
						loading="lazy"
						on:load={handleImageLoad}
					/>
					{#if !imageLoaded}
						<div class="absolute inset-0 bg-[#2a2a2a] animate-pulse rounded-xl" />
					{/if}
				</div>

				<!-- Categories -->
				<div class="absolute top-3 right-3 flex flex-wrap gap-2 justify-end max-w-[80%]">
					{#each categories as category}
						<span class="text-sm rounded-2xl px-4 py-1 bg-[#404040]">
							{category}
						</span>
					{/each}
				</div>

				<!-- Title and description -->
				<div class="px-4 py-1 flex flex-col items-start justify-center">
					<p class="text-[0.8rem] w-full text-left rounded-t-xl mt-1">
						{heading}
					</p>
					{#if video?.shortDescription}
						<p class="text-sm line-clamp-2">
							{video?.shortDescription}
						</p>
					{/if}
				</div>
			</div>
		{:else}
			<!-- Placeholder while not visible -->
			<div class="h-[350px] rounded-xl bg-[#2a2a2a] animate-pulse" />
		{/if}
	</div>
</div>

<style>
	.item {
		display: block;
		z-index: 1;
		background: #000;
		color: #fff;
	}

	.image-loading {
		position: relative;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 0.5;
		}
		50% {
			opacity: 0.8;
		}
	}

	.animate-pulse {
		animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}

	@media screen and (min-width: 450px) {
		.item.responsive-item {
			width: 300px;
			margin: 1rem;
		}
	}
	@media screen and (min-width: 550px) {
		.item.responsive-item {
			width: 400px;
			margin: 1rem;
		}
	}
	@media screen and (min-width: 750px) {
		.item.responsive-item {
			width: 500px;
			margin: 1rem;
		}
	}
	@media screen and (min-width: 1250px) {
		.item.responsive-item {
			width: 40%;
			margin: 2rem;
		}
	}
	@media screen and (min-width: 1850px) {
		.item.responsive-item {
			width: 700px;
			margin: 2rem;
		}
	}

	.item.muuri-item-dragging {
		z-index: 3;
	}
	.item.muuri-item-releasing {
		z-index: 2;
	}
	.item.muuri-item-hidden {
		z-index: 0;
	}
	.item-content {
		position: relative;
		width: 100%;
		height: 100%;
	}
</style>
